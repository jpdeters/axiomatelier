export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.hostname === "www.axiomatelier.com") {
      url.hostname = "axiomatelier.com";
      return Response.redirect(url.toString(), 301);
    }

    return fetch(request);
  },
};
