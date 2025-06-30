
/** ------------------------------------------------------------------
 *  GET  or  POST   /api/get-external-listings
 *  Params / Body:
 *    page          (int, default 1)
 *    limit         (int, default 100)
 *    market_center (string / int, optional)
 *    list_category (string, optional)
 * ----------------------------------------------------------------- */
import axios from 'axios';
import util  from 'util';   // optional, for deep debug prints

/* ────────────────────────────────────────────────────────── */
/* CONFIGURE how your filter names map to KW field names here */
const MARKET_CENTER_FIELDS = [
  'listing_market_center',   // ← adjust if KW uses a different key
  'office_mls_id',
  'market_center'
];

const CATEGORY_FIELDS = [
  'prop_subtype',            // e.g. "Single Family Detached"
  'prop_type',
  'list_category'
];
/* ────────────────────────────────────────────────────────── */

/**
 * POST  /api/get-external-listings
 *        (or GET — the router can expose both)
 *
 * Body / Query params:
 *   page          default 1
 *   limit         default 100
 *   market_center optional filter
 *   list_category optional filter
 */
// export const getExternalListings = async (req, res) => {
//   try {
//     /* ───── 1. pagination input ───── */
//     const page  = Number(req.body.page  ?? req.query.page  ?? 1);
//     const limit = Number(req.body.limit ?? req.query.limit ?? 100);
//     const offset = (page - 1) * limit;

//     const market_center = req.body.market_center ?? req.query.market_center;
//     const list_category = req.body.list_category ?? req.query.list_category;

//     /* ───── 2. common KW headers ───── */
//     const kwHeaders = {
//       Authorization:
//         'Basic b2FoNkRibjE2dHFvOE52M0RaVXk0NHFVUXAyRjNHYjI6eHRscnJmNUlqYVZpckl3Mg==',
//       Accept: 'application/json'
//     };

//     /* ───── 3. discover total count ───── */
//     const metaURL =
//       'https://partners.api.kw.com/v2/listings/region/50394?page[offset]=0&page[limit]=1';

//     const meta = await axios.get(metaURL, { headers: kwHeaders, timeout: 15_000 });

//     const total =
//       meta.data?.hits?.total?.value ??
//       meta.data?.total ??
//       0;

//     if (total === 0) {
//       return res.json({ success: true, total: 0, count: 0, data: [] });
//     }
//     if (offset >= total) {
//       return res.status(400).json({
//         success: false,
//         message: `Page ${page} is out of range. Total listings: ${total}`
//       });
//     }

//     /* ───── 4. fetch requested page ───── */
//     const effectiveLimit = Math.min(limit, total - offset);

//     const pageURL =
//       `https://partners.api.kw.com/v2/listings/region/50394` +
//       `?page[offset]=${offset}&page[limit]=${effectiveLimit}`;

//     const pageRes = await axios.get(pageURL, { headers: kwHeaders, timeout: 15_000 });

//     /* ───── 5. normalise KW response ───── */
//     let listings = [];

//     // Format A: KW uses data.data
//     if (Array.isArray(pageRes.data?.data)) {
//       listings = pageRes.data.data;

//     // Format B: KW uses hits.hits
//     } else if (Array.isArray(pageRes.data?.hits?.hits)) {
//       listings = pageRes.data.hits.hits.map(hit => ({
//         ...hit._source,                    // flatten all real fields
//         _kw_meta: { id: hit._id, score: hit._score ?? null }
//       }));
//     }

//     /* DEBUG (optional) — view one full record in the console
//        console.log(util.inspect(listings[0], { depth: null, colors: true })); */

//     /* ───── 6. apply optional filters safely ───── */
//     if (market_center) {
//       listings = listings.filter(item =>
//         MARKET_CENTER_FIELDS.some(
//           f => item[f] !== undefined && String(item[f]) === String(market_center)
//         )
//       );
//     }

//     if (list_category) {
//       const lc = String(list_category).toLowerCase();
//       listings = listings.filter(item =>
//         CATEGORY_FIELDS.some(
//           f =>
//             item[f] !== undefined &&
//             String(item[f]).toLowerCase() === lc
//         )
//       );
//     }

//     /* ───── 7. respond ───── */
//     return res.json({
//       success: true,
//       total,
//       page,
//       per_page: effectiveLimit,
//       count: listings.length,
//       data: listings
//     });

//   } catch (err) {
//     /* surface KW error body if present */
//     const status  = err.response?.status  ?? 500;
//     const details = err.response?.data    ?? err.message;
//     console.error('KW fetch error:', util.inspect(details, { depth: null }));

//     return res.status(status).json({
//       success: false,
//       message: 'Failed to fetch listings',
//       error: details
//     });
//   }
// };





export const getExternalListings = async (req, res) => {
  try {
    const page = Number(req.body.page ?? req.query.page ?? 1);
    const limit = Number(req.body.limit ?? req.query.limit ?? 10);
    const offset = (page - 1) * limit;

    const marketCenterFilter = req.body.market_center ?? req.query.market_center;
    const listCategoryFilter = req.body.list_category ?? req.query.list_category;

    const headers = {
      Authorization: 'Basic b2FoNkRibjE2dHFvOE52M0RaVXk0NHFVUXAyRjNHYjI6eHRscnJmNUlqYVZpckl3Mg==',
      Accept: 'application/json',
    };

    // Fetch a larger set to allow for client-side pagination
    const fetchURL = `https://partners.api.kw.com/v2/listings/region/50394?page[offset]=0&page[limit]=200`;
    const fetchRes = await axios.get(fetchURL, { headers });

    const hits = fetchRes.data?.hits?.hits ?? [];

    let listings = hits.map((hit) => ({
      ...hit._source,
      _kw_meta: { id: hit._id, score: hit._score ?? null },
    }));

    // Filter BEFORE pagination
    if (marketCenterFilter !== undefined) {
      const mc = String(marketCenterFilter);
      const FIELD_CANDIDATES = ['listing_market_center', 'office_mls_id', 'market_center'];

      listings = listings.filter((item) =>
        FIELD_CANDIDATES.some((key) => item[key] !== undefined && String(item[key]) === mc)
      );
    }

    if (listCategoryFilter !== undefined) {
      const lc = String(listCategoryFilter).toLowerCase();

      listings = listings.filter((item) => {
        const val = item.list_category || item.status || item.property_status || '';
        return String(val).toLowerCase() === lc;
      });
    }

    const total = listings.length;

    // Apply pagination AFTER filtering
    const paginatedListings = listings.slice(offset, offset + limit);

    return res.json({
      success: true,
      total,
      page,
      per_page: limit,
      count: paginatedListings.length,
      data: paginatedListings,
    });

  } catch (err) {
    const status = err.response?.status ?? 500;
    const message = err.response?.data ?? err.message;
    console.error('KW API Error:', message);

    return res.status(status).json({
      success: false,
      message: 'Failed to fetch listings',
      error: message,
    });
  }
};


