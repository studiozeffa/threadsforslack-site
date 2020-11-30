export default function() {
  return /* html */`
    <!DOCTYPE html>
    <html lang="en" class="no-js">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Evelyn Template</title>
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <div class="body-wrap">
          <header class="site-header">
            <div class="container">
              <div class="site-header-inner">
                <div class="brand">
                  <h1 class="m-0">
                    <a href="index.html">
                      <img
                        src="/images/logo-invert.svg"
                        alt="Evelyn"
                        width="32"
                        height="32"
                      />
                    </a>
                  </h1>
                </div>
              </div>
            </div>
          </header>

          <main class="site-content">
            <section class="signin section illustration-section-02">
              <div class="container-xs">
                <div class="signin-inner section-inner">
                  <div class="section-header center-content">
                    <h1 class="m-0">
                      Welcome. We exist to make entrepreneurship easier.
                    </h1>
                  </div>
                  <div class="tiles-wrap">
                    <div class="tiles-item">
                      <div class="tiles-item-inner">
                        <form>
                          <fieldset>
                            <div class="mb-12">
                              <label class="form-label screen-reader" for="name"
                                >Full name</label
                              >
                              <input
                                id="name"
                                class="form-input"
                                type="name"
                                placeholder="Full name"
                                required
                              />
                            </div>
                            <div class="mb-12">
                              <label class="form-label screen-reader" for="email"
                                >Email</label
                              >
                              <input
                                id="email"
                                class="form-input"
                                type="email"
                                placeholder="Email"
                                required
                              />
                            </div>
                            <div class="mb-12">
                              <label class="form-label screen-reader" for="password"
                                >Password</label
                              >
                              <input
                                id="password"
                                class="form-input"
                                type="password"
                                placeholder="Password"
                                required
                              />
                            </div>
                            <div class="mt-24 mb-32">
                              <button class="button button-primary button-block">
                                Sign up
                              </button>
                            </div>
                          </fieldset>
                        </form>
                        <div class="signin-bottom has-top-divider">
                          <div class="pt-32 text-xs center-content text-color-low">
                            Already have an account?
                            <a class="func-link" href="login.html">Login</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>

        <script src="/js/main.min.js"></script>
      </body>
    </html>
  `;
}
