import Script from "next/script";

export default function Home() {
  // Webflow-exported HTML body injected verbatim so Webflow's CSS/JS behave as expected.
  // Keep this as close as possible to the Webflow export to preserve layout/spacing/animations.
  const bodyHtml = `
      <div class="page-wrapper">
    <div class="cookies">
      <div class="cookies-block">
        <div class="cookies-text-wrap">
          <div class="paragraph-01 cookies-text">We use cookies to improve your browsing experience. <a
              href="contact.html" class="cookies-text-link">Privacy Policy</a></div>
        </div>
        <div class="cookies-button-wrap"><a data-w-id="d7b0448b-05fa-ad9c-f30d-b5d60a50f286" href="#"
            class="cookies-button w-button">Accept</a><img
            src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c5b5d7fded2a0038a0d75a_cancel-01.svg"
            loading="lazy" data-w-id="d7b0448b-05fa-ad9c-f30d-b5d60a50f288" alt="" class="cancel-icon"></div>
      </div>
    </div>
    <section data-w-id="b7daf1d6-6c2e-529f-fc53-121288ad5ada" class="navbar">
      <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease"
        role="banner" class="navbar-container w-nav">
        <div class="navbar-wrapper">
          <div class="navbar-left"><a href="index.html" aria-current="page"
              class="navbar-brand w-nav-brand w--current"><img loading="lazy"
                src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/692e8fea88874a81e28b09ce_Xentro%20Home%20Logo.svg"
                alt=""></a></div>
          <div class="navbar-center">
            <nav role="navigation" class="nav-menu-wrapper w-nav-menu">
              <ul role="list" class="nav-menu w-list-unstyled">
                <li class="nav-item"><a href="index.html" aria-current="page"
                    class="nav-link w-inline-block w--current">
                    <div class="nav-link-text">Home</div>
                  </a></li>
                <li class="nav-item"><a href="about.html" class="nav-link w-inline-block">
                    <div class="nav-link-text">About</div>
                  </a></li>
                <li class="nav-item"><a href="features.html" class="nav-link w-inline-block">
                    <div class="nav-link-text">Features</div>
                  </a></li>
                <li class="nav-item"><a href="pricing.html" class="nav-link w-inline-block">
                    <div class="nav-link-text">Pricing</div>
                  </a></li>
                <li class="nav-item">
                  <div data-delay="0" data-hover="true" class="nav-dropdown w-dropdown">
                    <div class="nav-dropdown-toggle w-dropdown-toggle">
                      <div class="nav-dropdown-icon w-icon-dropdown-toggle"></div>
                      <div class="nav-link-text">Pages</div>
                    </div>
                    <nav class="nav-dropdown-list-wrap shadow-three mobile-shadow-hide pages w-dropdown-list">
                      <div class="nav-dropdown-list-body">
                        <div class="nav-dropdown-list">
                          <div class="paragraph-02 dropdown-title">Main Pages</div>
                          <div class="dropdown-page-link-list"><a href="index.html" aria-current="page"
                              class="paragraph-01 dropdown-link w--current">Home</a><a href="about.html"
                              class="paragraph-01 dropdown-link">About</a><a href="features.html"
                              class="paragraph-01 dropdown-link">Features</a><a href="pricing.html"
                              class="paragraph-01 dropdown-link">Pricing</a><a href="blog.html"
                              class="paragraph-01 dropdown-link">Blog</a><a href="contact.html"
                              class="paragraph-01 dropdown-link">Contact</a></div>
                        </div>
                        <div class="nav-dropdown-list">
                          <div class="paragraph-02 dropdown-title">Inner Pages</div>
                          <div class="dropdown-page-link-list"><a href="career.html"
                              class="paragraph-01 dropdown-link">Career</a><a
                              href="https://trego-trading.webflow.io/blog/design-clarity-starts-with-empathy"
                              class="paragraph-01 dropdown-link">Blog Details</a><a
                              href="https://trego-trading.webflow.io/product/starter"
                              class="paragraph-01 dropdown-link">Pricing Details</a><a href="integration.html"
                              class="paragraph-01 dropdown-link">Integrations</a><a
                              href="https://trego-trading.webflow.io/integration/logsync"
                              class="paragraph-01 dropdown-link">Integration Details</a><a href="coming-soon.html"
                              class="paragraph-01 dropdown-link">Coming Soon</a></div>
                        </div>
                        <div class="nav-dropdown-list">
                          <div class="paragraph-02 dropdown-title">Utility Pages</div>
                          <div class="dropdown-page-link-list"><a href="404.html"
                              class="paragraph-01 dropdown-link">404</a><a href="401.html"
                              class="paragraph-01 dropdown-link">Password</a><a href="utility-pages/style-guide.html"
                              class="paragraph-01 dropdown-link">Style Guide</a><a href="utility-pages/license.html"
                              class="paragraph-01 dropdown-link">License</a><a href="utility-pages/changelog.html"
                              class="paragraph-01 dropdown-link">Changelog</a></div>
                        </div>
                      </div>
                    </nav>
                  </div>
                </li>
                <li class="mobile-margin-top-10"></li>
              </ul>
            </nav>
          </div>
          <div class="navbar-right">
            <div data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_ec_product_type_2dr10dr: productType {
            id
            name
          }
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper" data-node-type="commerce-cart-wrapper"><a
                class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog"
                aria-label="Open cart" data-node-type="commerce-cart-open-link" href="#"><svg
                  class="w-commerce-commercecartopenlinkicon hide" width="17px" height="17px" viewBox="0 0 17 17">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path
                      d="M2.60592789,2 L0,2 L0,0 L4.39407211,0 L4.84288393,4 L16,4 L16,9.93844589 L3.76940945,12.3694378 L2.60592789,2 Z M15.5,17 C14.6715729,17 14,16.3284271 14,15.5 C14,14.6715729 14.6715729,14 15.5,14 C16.3284271,14 17,14.6715729 17,15.5 C17,16.3284271 16.3284271,17 15.5,17 Z M5.5,17 C4.67157288,17 4,16.3284271 4,15.5 C4,14.6715729 4.67157288,14 5.5,14 C6.32842712,14 7,14.6715729 7,15.5 C7,16.3284271 6.32842712,17 5.5,17 Z"
                      fill="currentColor" fill-rule="nonzero"></path>
                  </g>
                </svg>
                <div class="cart-text-wrap">
                  <div class="cart-text w-inline-block">Cart</div>
                  <div class="cart-quentity-wrap">
                    <div class="cart-text w-inline-block">(</div>
                    <div
                      data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D"
                      class="w-commerce-commercecartopenlinkcount cart-quantity">0</div>
                    <div class="cart-text w-inline-block">)</div>
                  </div>
                </div>
              </a>
              <div style="display:none"
                class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal"
                data-node-type="commerce-cart-container-wrapper">
                <div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer">
                  <div class="w-commerce-commercecartheader cart-header">
                    <div class="text-style-h3 text-black">Your Cart</div><a
                      class="w-commerce-commercecartcloselink w-inline-block" role="button" aria-label="Close cart"
                      data-node-type="commerce-cart-close-link"><svg width="16px" height="16px" viewBox="0 0 16 16">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g fill-rule="nonzero" fill="#333333">
                            <polygon
                              points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8">
                            </polygon>
                          </g>
                        </g>
                      </svg></a>
                  </div>
                  <div class="w-commerce-commercecartformwrapper">
                    <form style="display:none" class="w-commerce-commercecartform" data-node-type="commerce-cart-form">
                      <script type="text/x-wf-template"
                        id="wf-template-24a944c7-57bf-e4ea-64ea-ee5d38f7287b">%3Cdiv%20class%3D%22w-commerce-commercecartitem%22%3E%3Cimg%20data-wf-bindings%3D%22%255B%257B%2522src%2522%253A%257B%2522type%2522%253A%2522ImageRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.f_main_image_4dr%2522%257D%257D%255D%22%20src%3D%22%22%20alt%3D%22%22%20class%3D%22w-commerce-commercecartitemimage%20w-dyn-bind-empty%22%2F%3E%3Cdiv%20class%3D%22w-commerce-commercecartiteminfo%20cart-item-content%22%3E%3Cdiv%20class%3D%22cart-item-info%22%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_name_%2522%257D%257D%255D%22%20class%3D%22w-commerce-commercecartproductname%20text-style-h4%20text-black%20w-dyn-bind-empty%22%3E%3C%2Fdiv%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePrice%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522price%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.price%2522%257D%257D%255D%22%20class%3D%22paragraph-02%20text-black%22%3E%24%C2%A00.00%C2%A0USD%3C%2Fdiv%3E%3C%2Fdiv%3E%3Cscript%20type%3D%22text%2Fx-wf-template%22%20id%3D%22wf-template-24a944c7-57bf-e4ea-64ea-ee5d38f72881%22%3E%253Cli%253E%253Cspan%2520data-wf-bindings%253D%2522%25255B%25257B%252522innerHTML%252522%25253A%25257B%252522type%252522%25253A%252522PlainText%252522%25252C%252522filter%252522%25253A%25257B%252522type%252522%25253A%252522identity%252522%25252C%252522params%252522%25253A%25255B%25255D%25257D%25252C%252522dataPath%252522%25253A%252522database.commerceOrder.userItems%25255B%25255D.product.f_sku_properties_3dr%25255B%25255D.name%252522%25257D%25257D%25255D%2522%2520class%253D%2522paragraph-02%2520text-black%2520w-dyn-bind-empty%2522%253E%253C%252Fspan%253E%253Cspan%2520class%253D%2522paragraph-02%2520text-black%2522%253E%253A%2520%253C%252Fspan%253E%253Cspan%2520data-wf-bindings%253D%2522%25255B%25257B%252522innerHTML%252522%25253A%25257B%252522type%252522%25253A%252522CommercePropValues%252522%25252C%252522filter%252522%25253A%25257B%252522type%252522%25253A%252522identity%252522%25252C%252522params%252522%25253A%25255B%25255D%25257D%25252C%252522dataPath%252522%25253A%252522database.commerceOrder.userItems%25255B%25255D.product.f_sku_properties_3dr%25255B%25255D%252522%25257D%25257D%25255D%2522%2520class%253D%2522paragraph-02%2520text-black%2520w-dyn-bind-empty%2522%253E%253C%252Fspan%253E%253C%252Fli%253E%3C%2Fscript%3E%3Cul%20data-wf-bindings%3D%22%255B%257B%2522optionSets%2522%253A%257B%2522type%2522%253A%2522CommercePropTable%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%5B%5D%2522%257D%257D%252C%257B%2522optionValues%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.f_sku_values_3dr%2522%257D%257D%255D%22%20class%3D%22w-commerce-commercecartoptionlist%22%20data-wf-collection%3D%22database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%22%20data-wf-template-id%3D%22wf-template-24a944c7-57bf-e4ea-64ea-ee5d38f72881%22%3E%3Cli%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D.name%2522%257D%257D%255D%22%20class%3D%22paragraph-02%20text-black%20w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3Cspan%20class%3D%22paragraph-02%20text-black%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D%2522%257D%257D%255D%22%20class%3D%22paragraph-02%20text-black%20w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Ful%3E%3Ca%20href%3D%22%23%22%20role%3D%22button%22%20data-wf-bindings%3D%22%255B%257B%2522data-commerce-sku-id%2522%253A%257B%2522type%2522%253A%2522ItemRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.id%2522%257D%257D%255D%22%20class%3D%22remove-button%20w-inline-block%22%20data-wf-cart-action%3D%22remove-item%22%20data-commerce-sku-id%3D%22%22%20aria-label%3D%22Remove%20item%20from%20cart%22%3E%3Cdiv%3ERemove%3C%2Fdiv%3E%3C%2Fa%3E%3C%2Fdiv%3E%3Cinput%20aria-label%3D%22Update%20quantity%22%20data-wf-bindings%3D%22%255B%257B%2522value%2522%253A%257B%2522type%2522%253A%2522Number%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522numberPrecision%2522%252C%2522params%2522%253A%255B%25220%2522%252C%2522numberPrecision%2522%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.count%2522%257D%257D%252C%257B%2522data-commerce-sku-id%2522%253A%257B%2522type%2522%253A%2522ItemRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.id%2522%257D%257D%255D%22%20data-wf-conditions%3D%22%257B%2522condition%2522%253A%257B%2522fields%2522%253A%257B%2522product%253Aec-product-type%2522%253A%257B%2522ne%2522%253A%2522e348fd487d0102946c9179d2a94bb613%2522%252C%2522type%2522%253A%2522Option%2522%257D%257D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D%2522%257D%22%20class%3D%22w-commerce-commercecartquantity%20hide%22%20required%3D%22%22%20pattern%3D%22%5E%5B0-9%5D%2B%24%22%20inputMode%3D%22numeric%22%20type%3D%22number%22%20name%3D%22quantity%22%20autoComplete%3D%22off%22%20data-wf-cart-action%3D%22update-item-quantity%22%20data-commerce-sku-id%3D%22%22%20value%3D%221%22%2F%3E%3C%2Fdiv%3E</script>
                      <div class="w-commerce-commercecartlist cart-list"
                        data-wf-collection="database.commerceOrder.userItems"
                        data-wf-template-id="wf-template-24a944c7-57bf-e4ea-64ea-ee5d38f7287b">
                        <div class="w-commerce-commercecartitem"><img
                            data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D"
                            src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty">
                          <div class="w-commerce-commercecartiteminfo cart-item-content">
                            <div class="cart-item-info">
                              <div
                                data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D"
                                class="w-commerce-commercecartproductname text-style-h4 text-black w-dyn-bind-empty">
                              </div>
                              <div
                                data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D"
                                class="paragraph-02 text-black">$&nbsp;0.00&nbsp;USD</div>
                            </div>
                            <script type="text/x-wf-template"
                              id="wf-template-24a944c7-57bf-e4ea-64ea-ee5d38f72881">%3Cli%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D.name%2522%257D%257D%255D%22%20class%3D%22paragraph-02%20text-black%20w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3Cspan%20class%3D%22paragraph-02%20text-black%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D%2522%257D%257D%255D%22%20class%3D%22paragraph-02%20text-black%20w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3C%2Fli%3E</script>
                            <ul
                              data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D"
                              class="w-commerce-commercecartoptionlist"
                              data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr"
                              data-wf-template-id="wf-template-24a944c7-57bf-e4ea-64ea-ee5d38f72881">
                              <li><span
                                  data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D"
                                  class="paragraph-02 text-black w-dyn-bind-empty"></span><span
                                  class="paragraph-02 text-black">: </span><span
                                  data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D"
                                  class="paragraph-02 text-black w-dyn-bind-empty"></span></li>
                            </ul><a href="#" role="button"
                              data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D"
                              class="remove-button w-inline-block" data-wf-cart-action="remove-item"
                              data-commerce-sku-id="" aria-label="Remove item from cart">
                              <div>Remove</div>
                            </a>
                          </div><input aria-label="Update quantity"
                            data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D"
                            data-wf-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22product%3Aec-product-type%22%3A%7B%22ne%22%3A%22e348fd487d0102946c9179d2a94bb613%22%2C%22type%22%3A%22Option%22%7D%7D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D%22%7D"
                            class="w-commerce-commercecartquantity hide" required="" pattern="^[0-9]+$"
                            inputmode="numeric" type="number" name="quantity" autocomplete="off"
                            data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1">
                        </div>
                      </div>
                      <div class="w-commerce-commercecartfooter cart-footer">
                        <div aria-atomic="true" aria-live="polite" class="w-commerce-commercecartlineitem">
                          <div class="text-style-h4 text-black">Subtotal</div>
                          <div
                            data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D"
                            class="w-commerce-commercecartordervalue text-style-h4 text-black"></div>
                        </div>
                        <div>
                          <div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a
                              data-node-type="commerce-cart-apple-pay-button" role="button" aria-label="Apple Pay"
                              aria-haspopup="dialog"
                              style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat"
                              class="w-commerce-commercecartapplepaybutton" tabindex="0">
                              <div></div>
                            </a><a data-node-type="commerce-cart-quick-checkout-button" role="button" tabindex="0"
                              aria-haspopup="dialog" style="display:none"
                              class="w-commerce-commercecartquickcheckoutbutton"><svg
                                class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
                                <defs>
                                  <polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon>
                                  <polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443">
                                  </polygon>
                                </defs>
                                <g fill="none" fill-rule="evenodd">
                                  <path fill="#4285F4"
                                    d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469">
                                  </path>
                                  <path fill="#34A853"
                                    d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16">
                                  </path>
                                  <g transform="translate(0 4)">
                                    <mask id="google-mark-b" fill="#fff">
                                      <use xlink:href="#google-mark-a"></use>
                                    </mask>
                                    <path fill="#FBBC04"
                                      d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337"
                                      mask="url(#google-mark-b)"></path>
                                  </g>
                                  <mask id="google-mark-d" fill="#fff">
                                    <use xlink:href="#google-mark-c"></use>
                                  </mask>
                                  <path fill="#EA4335"
                                    d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291"
                                    mask="url(#google-mark-d)"></path>
                                </g>
                              </svg><svg class="w-commerce-commercequickcheckoutmicrosofticon"
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                <g fill="none" fill-rule="evenodd">
                                  <polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon>
                                  <polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon>
                                  <polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon>
                                  <polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon>
                                </g>
                              </svg>
                              <div>Pay with browser.</div>
                            </a></div><a href="checkout.html" value="Continue to Checkout"
                            class="w-commerce-commercecartcheckoutbutton checkout-button"
                            data-loading-text="Hang Tight..." data-node-type="cart-checkout-button">Continue to
                            Checkout</a>
                        </div>
                      </div>
                    </form>
                    <div class="w-commerce-commercecartemptystate">
                      <div aria-label="This cart is empty" aria-live="polite">No items found.</div>
                    </div>
                    <div aria-live="assertive" style="display:none" data-node-type="commerce-cart-error"
                      class="w-commerce-commercecarterrorstate error-state">
                      <div class="w-cart-error-msg"
                        data-w-cart-quantity-error="Product is not available in this quantity."
                        data-w-cart-general-error="Something went wrong when adding this item to the cart."
                        data-w-cart-checkout-error="Checkout is disabled on this site."
                        data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue."
                        data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">
                        Product is not available in this quantity.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="nav-button-wrapper"><a data-wf--button-01--variant="small-button" href="contact.html"
                class="button-01 w-variant-70ac284e-b5b2-abb1-c5f0-2628355655c6 w-inline-block"><img
                  src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c085f9b5bb33e11ed0a7d5_Mac.svg"
                  loading="lazy" alt="" class="button-icon">
                <div class="button-01-text-wrap">
                  <div class="button-01-text-group">
                    <div class="button-text text-black">Book a Demo</div>
                    <div class="button-text">Book a Demo</div>
                  </div>
                </div>
              </a></div>
            <div class="menu-button w-nav-button">
              <div data-is-ix2-target="1" class="hamburger-menu" data-w-id="b7daf1d6-6c2e-529f-fc53-121288ad5b3a"
                data-animation-type="lottie"
                data-src="https://cdn.prod.website-files.com/68a2151a000cb3b5c6f9da7f/68b20daf7a52aa026bdd184b_Menu%2002.json"
                data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="0"
                data-duration="1.5" data-ix2-initial-state="0"></div>
            </div>
          </div>
          <div class="navbar-blur"></div>
        </div>
      </div>
    </section>
    <section id="hero" class="hero">
      <div class="container">
        <div class="hero-wrap">
          <div class="hero-heading-wrap left">
            <div data-w-id="08b477ae-e23d-146a-84e9-0d4ff618a712"
              style="-webkit-transform:translate3d(0, 35px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 35px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 35px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 35px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0;filter:blur(5px)"
              class="hero-label-wrap">
              <div class="hero-label-left">
                <div class="hero-label-text-wrap">
                  <div class="tag-text">New Feature</div>
                </div>
              </div>
              <div class="hero-label-right">
                <div class="tag-text hero-label-text">Trade faster with advanced order types →</div>
              </div>
            </div>
            <div class="hero-text-wrap">
              <div class="hero-heading-wrap">
                <h1 class="hero-heading">Simplify Your Trading Journey with an All-in-One, Powerful Dashboard</h1>
              </div>
              <div class="hero-subtitle-wrap">
                <div class="paragraph-01 text-grey-02">Monitor markets, place orders, and manage assets — all in one
                  powerful dashboard.</div>
              </div>
            </div>
            <div class="hero-button-wrap left"><a data-wf--button-01--variant="small-button" href="contact.html"
                class="button-01 w-variant-70ac284e-b5b2-abb1-c5f0-2628355655c6 w-inline-block"><img
                  src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c085f9b5bb33e11ed0a7d5_Mac.svg"
                  loading="lazy" alt="" class="button-icon">
                <div class="button-01-text-wrap">
                  <div class="button-01-text-group">
                    <div class="button-text text-black">Start Trading</div>
                    <div class="button-text">Start Trading</div>
                  </div>
                </div>
              </a></div>
          </div>
        </div>
      </div>
      <div data-w-id="f3afb07e-aabb-c8a1-dcc9-757ea170a0bb"
        style="-webkit-transform:translate3d(0, 35px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 35px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 35px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 35px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0;filter:blur(5px)"
        class="hero-dashboard-wrap"><img
          src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/692e90a1ba342d093201afa7_Hero%2520Dashboard%2520.webp"
          loading="lazy" sizes="(max-width: 2880px) 100vw, 2880px"
          srcset="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/692e90a1ba342d093201afa7_Hero%20Dashboard%20-p-500.webp 500w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/692e90a1ba342d093201afa7_Hero%20Dashboard%20-p-800.webp 800w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/692e90a1ba342d093201afa7_Hero%20Dashboard%20-p-1080.webp 1080w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/692e90a1ba342d093201afa7_Hero%20Dashboard%20-p-1600.webp 1600w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/692e90a1ba342d093201afa7_Hero%20Dashboard%20-p-2000.webp 2000w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/692e90a1ba342d093201afa7_Hero%20Dashboard%20-p-2600.webp 2600w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/692e90a1ba342d093201afa7_Hero%20Dashboard%20.webp 2880w"
          alt="" class="hero-dashboard"></div>
      <div class="hero-dashboard-cover"></div>
    </section>
    <section id="brands" class="brands">
      <div class="container">
        <div data-w-id="7c4c3676-3a2c-31fd-6b07-1e7fbf773904" class="brands-wrap">
          <div class="brands-marquee">
            <div class="brands-list"><img
                src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c047a48a2d798fcf4bff4d_Logo%20(2).svg"
                loading="lazy" alt="" class="brand"><img
                src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c047a312bb025599419b92_Logo%20(3).svg"
                loading="lazy" alt="" class="brand"><img
                src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c047a4e877a023e2526505_Logo%20(4).svg"
                loading="lazy" alt="" class="brand"><img
                src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c047a4a541b9e1f2da7a62_Logo%20(5).svg"
                loading="lazy" alt="" class="brand"><img
                src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c047a460d5aaac746ba1a3_Logo%20(6).svg"
                loading="lazy" alt="" class="brand"><img
                src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c047a4d78eb7e5e3efa267_Logo%20(1).svg"
                loading="lazy" alt="" class="brand"></div>
            <div class="brands-list"><img
                src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c047a48a2d798fcf4bff4d_Logo%20(2).svg"
                loading="lazy" alt="" class="brand"><img
                src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c047a312bb025599419b92_Logo%20(3).svg"
                loading="lazy" alt="" class="brand"><img
                src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c047a4e877a023e2526505_Logo%20(4).svg"
                loading="lazy" alt="" class="brand"><img
                src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c047a4a541b9e1f2da7a62_Logo%20(5).svg"
                loading="lazy" alt="" class="brand"><img
                src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c047a460d5aaac746ba1a3_Logo%20(6).svg"
                loading="lazy" alt="" class="brand"><img
                src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c047a4d78eb7e5e3efa267_Logo%20(1).svg"
                loading="lazy" alt="" class="brand"></div>
            <div class="brands-shadow"></div>
            <div class="brands-shadow right"></div>
          </div>
        </div>
      </div>
    </section>
    <section id="features" class="features-02">
      <div class="container">
        <div class="features-02-wrap">
          <div class="section-header-wrap">
            <div class="section-header-content">
              <div class="section-badge-wrap">
                <div class="badge">
                  <div class="badge-dot"></div>
                  <div class="tag-text">Key Features</div>
                </div>
              </div>
              <div class="section-header-text-wrap">
                <div class="heading-wrap">
                  <h2 class="heading-center">Complete Features for Smart Traders</h2>
                </div>
                <div class="subtitle-wrap short-medium">
                  <div class="paragraph-01 subtitle">Every detail is designed to simplify your trading journey, from
                    lightning-fasttransactions to effortless asset management.</div>
                </div>
              </div>
            </div>
          </div>
          <div class="features-02-main-wrap">
            <div class="features-02-top-wrap">
              <div class="features-02-card">
                <div class="features-02-text-wrap">
                  <div class="text-style-h3">Crypto Payment Gateway</div>
                  <div class="paragraph-01 text-light-grey">Send and receive crypto payments instantly with a simple QR
                    scan.</div>
                </div>
                <div class="features-02-image-wrap"><img
                    src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c43774014762e065bb3e9b_Features%2520Card%252001.webp"
                    loading="lazy" sizes="(max-width: 1168px) 100vw, 1168px"
                    srcset="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c43774014762e065bb3e9b_Features%20Card%2001-p-500.webp 500w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c43774014762e065bb3e9b_Features%20Card%2001-p-800.webp 800w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c43774014762e065bb3e9b_Features%20Card%2001-p-1080.webp 1080w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c43774014762e065bb3e9b_Features%20Card%2001.webp 1168w"
                    alt="Features Image" class="features-02-image"></div>
              </div>
              <div class="features-02-card">
                <div class="features-02-text-wrap">
                  <div class="text-style-h3">Self-Custody Wallet</div>
                  <div class="paragraph-01 text-light-grey">Experience true financial freedom with self-custody
                    security.</div>
                </div>
                <div class="features-02-image-wrap">
                  <div data-w-id="0bafc5ef-ebef-0266-9be9-75bcaafef10f" data-is-ix2-target="1"
                    class="features-02-lottie" data-animation-type="lottie"
                    data-src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c437d3c11fbbc98ab4192d_data.json"
                    data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="0"
                    data-duration="6.016666666666667"></div>
                </div>
              </div>
            </div>
            <div class="features-02-bottom-wrap">
              <div class="features-02-card">
                <div class="features-02-text-wrap">
                  <div class="text-style-h3">One Wallet for Every Coin</div>
                  <div class="paragraph-01 text-light-grey">Seamlessly switch between coins while staying fully in
                    control.</div>
                </div>
                <div class="features-02-lottie-wrap">
                  <div data-w-id="0bafc5ef-ebef-0266-9be9-75bcaafef118" data-is-ix2-target="1"
                    class="features-02-lottie _02" data-animation-type="lottie"
                    data-src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c439d80221891a9d535f68_data.json"
                    data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="0"
                    data-duration="6.016666666666667"></div>
                </div>
              </div>
              <div class="features-02-card">
                <div class="features-02-text-wrap">
                  <div class="text-style-h3">Global Market Access</div>
                  <div class="paragraph-01 text-light-grey">Trade seamlessly across major financial hubs worldwide.
                  </div>
                </div>
                <div class="features-02-image-wrap"><img
                    src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c437747138253372130eed_Features%2520Card%252002.webp"
                    loading="lazy" sizes="(max-width: 767px) 100vw, 768px"
                    srcset="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c437747138253372130eed_Features%20Card%2002-p-500.webp 500w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c437747138253372130eed_Features%20Card%2002.webp 768w"
                    alt="Features Image" class="features-02-image"></div>
              </div>
              <div data-w-id="0bafc5ef-ebef-0266-9be9-75bcaafef121" class="features-02-card _02">
                <div class="features-02-card-inner">
                  <div class="features-02-card-shadow"></div>
                  <div class="features-02-card-content">
                    <div class="features-02-text-wrap center">
                      <div class="text-style-h3 text-center">AI Market Insights at a Glance for Traders</div>
                    </div>
                    <div class="features-02-image-wrap"><img
                        src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c43775bb362a8ad7ae7415_Features%2520Card%252003.webp"
                        loading="lazy" sizes="(max-width: 767px) 100vw, 768px"
                        srcset="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c43775bb362a8ad7ae7415_Features%20Card%2003-p-500.webp 500w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c43775bb362a8ad7ae7415_Features%20Card%2003.webp 768w"
                        alt="Features Image" class="features-02-image _05"></div>
                  </div>
                </div>
                <div
                  style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)"
                  class="light-outline">
                  <div class="light-border-inner cta-line">
                    <div class="light-color-01"></div>
                    <div class="light-color-02 cta-color"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><img
        src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c43781b8d92283ec42af2b_Shadow%252002.webp"
        loading="lazy" sizes="(max-width: 1160px) 100vw, 1160px"
        srcset="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c43781b8d92283ec42af2b_Shadow%2002-p-500.webp 500w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c43781b8d92283ec42af2b_Shadow%2002-p-800.webp 800w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c43781b8d92283ec42af2b_Shadow%2002-p-1080.webp 1080w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c43781b8d92283ec42af2b_Shadow%2002.webp 1160w"
        alt="Features Shadow" class="features-02-left-texture"><img
        src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c442732e93c6b2b6557969_Shadow%252002.webp"
        loading="lazy" sizes="(max-width: 1162px) 100vw, 1162px"
        srcset="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c442732e93c6b2b6557969_Shadow%2002-p-500.webp 500w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c442732e93c6b2b6557969_Shadow%2002-p-800.webp 800w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c442732e93c6b2b6557969_Shadow%2002-p-1080.webp 1080w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c442732e93c6b2b6557969_Shadow%2002.webp 1162w"
        alt="Features Shadow" class="features-02-right-texture">
    </section>
    <section id="about" class="why-us">
      <div class="container">
        <div class="why-us-wrap">
          <div class="section-header-wrap flex">
            <div class="section-header-left">
              <div class="section-badge-wrap left">
                <div class="badge">
                  <div class="badge-dot"></div>
                  <div class="tag-text">Why Choose Us</div>
                </div>
              </div>
              <div class="heading-wrap">
                <h2 class="heading-center left">Your Edge in Smarter Trading</h2>
              </div>
            </div>
            <div class="section-header-right">
              <div class="subtitle-wrap left">
                <div class="paragraph-01 subtitle left">Engineered to deliver unmatched speed, crystal-clear insights,
                  and ironclad security—empowering every trader to stay ahead of the market with confidence and ease.
                </div>
              </div>
            </div>
          </div>
          <div class="why-us-main-wrap">
            <div class="why-us-card">
              <div class="why-us-image-wrap">
                <div data-w-id="891600e7-33b8-5a9a-6f8b-1b59071e43e4" data-is-ix2-target="1" class="why-us-lottie"
                  data-animation-type="lottie"
                  data-src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c42998a91d0f79d44664fd_data.json"
                  data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="0"
                  data-duration="1.6"></div>
              </div>
              <div class="why-us-text-wrap">
                <h3 class="why-us-title">AI-Powered Insights</h3>
                <div class="paragraph-02 text-light-grey">AI insights for smarter, confident trades.</div>
              </div>
            </div>
            <div class="why-us-card">
              <div class="why-us-image-wrap"><img
                  src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c06f09e743861e1f6a47fa_Features%2520Image%252002.webp"
                  loading="lazy" sizes="(max-width: 528px) 100vw, 528px"
                  srcset="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c06f09e743861e1f6a47fa_Features%20Image%2002-p-500.webp 500w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c06f09e743861e1f6a47fa_Features%20Image%2002.webp 528w"
                  alt="Features Image" class="why-us-image"></div>
              <div class="why-us-text-wrap">
                <h3 class="why-us-title">Secure Asset Protection</h3>
                <div class="paragraph-02 text-light-grey">Protect your assets with top-tier security.</div>
              </div>
            </div>
            <div class="why-us-card">
              <div class="why-us-image-wrap">
                <div data-w-id="dcb36e34-e201-7adf-819c-7be975d391fe" data-is-ix2-target="1" class="why-us-lottie"
                  data-animation-type="lottie"
                  data-src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c4298b812faf35c635aa70_data.json"
                  data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="0"
                  data-duration="3"></div>
              </div>
              <div class="why-us-text-wrap">
                <h3 class="why-us-title">Multi-Asset Support</h3>
                <div class="paragraph-02 text-light-grey">Trade multiple coins securely with ease.</div>
              </div>
            </div>
            <div class="why-us-card">
              <div class="why-us-image-wrap"><img
                  src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c06f096563c20e85528451_Features%2520Image%252004.webp"
                  loading="lazy" sizes="(max-width: 528px) 100vw, 528px"
                  srcset="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c06f096563c20e85528451_Features%20Image%2004-p-500.webp 500w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c06f096563c20e85528451_Features%20Image%2004.webp 528w"
                  alt="Features Image" class="why-us-image"></div>
              <div class="why-us-text-wrap">
                <h3 class="why-us-title">One-Click Order Execution</h3>
                <div class="paragraph-02 text-light-grey">Trade instantly, catch every move.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="shadow-wrap _02"></div>
    </section>
    <section id="use-case" class="use-case">
      <div class="container">
        <div class="use-case-wrap">
          <div class="use-case-header-wrap">
            <div class="section-header-wrap">
              <div class="section-header-content">
                <div class="section-badge-wrap left">
                  <div class="badge">
                    <div class="badge-dot"></div>
                    <div class="tag-text">Use Cases</div>
                  </div>
                </div>
                <div class="section-header-text-wrap">
                  <div class="heading-wrap">
                    <h2 class="heading-center left">Real-World Use Cases</h2>
                  </div>
                  <div class="subtitle-wrap left">
                    <div class="paragraph-01 subtitle left">Practical scenarios that elevate your trading.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="use-case-tab-wrap">
            <div data-current="Tab 1" data-easing="ease" data-duration-in="0" data-duration-out="0"
              class="use-case-tabs w-tabs">
              <div class="use-case-tabs-menu w-tab-menu"><a data-w-tab="Tab 1"
                  class="use-case-tab-link w-inline-block w-tab-link w--current">
                  <div class="use-case-tab-link-content">
                    <div class="tag-text number">01</div>
                    <div class="use-case-tab-text-wrap">
                      <h3 class="use-case-tab-title">Swing Trading</h3>
                      <div class="paragraph-01 use-case-tab-subtitle">Leverage in-depth technical analysis and market
                        trends to maximize gains over a span of days to weeks.</div>
                    </div>
                  </div>
                </a><a data-w-tab="Tab 2" class="use-case-tab-link w-inline-block w-tab-link">
                  <div class="use-case-tab-link-content">
                    <div class="tag-text number">02</div>
                    <div class="use-case-tab-text-wrap">
                      <h3 class="use-case-tab-title">Day Trading</h3>
                      <div class="paragraph-01 use-case-tab-subtitle">Execute rapid trades with real-time data to
                        capitalize on intraday price fluctuations.</div>
                    </div>
                  </div>
                </a><a data-w-tab="Tab 3" class="use-case-tab-link w-inline-block w-tab-link">
                  <div class="use-case-tab-link-content">
                    <div class="tag-text number">03</div>
                    <div class="use-case-tab-text-wrap">
                      <h3 class="use-case-tab-title">Long-Term Investment</h3>
                      <div class="paragraph-01 use-case-tab-subtitle">Build and manage a sustainable portfolio with
                        comprehensive fundamental analysis for long-term growth.</div>
                    </div>
                  </div>
                </a></div>
              <div data-w-id="bbe5e75d-c577-bce9-2ccd-1e3690b07811"
                style="-webkit-transform:translate3d(0, 35px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 35px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 35px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 35px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0;filter:blur(5px)"
                class="use-case-tabs-content w-tab-content">
                <div data-w-tab="Tab 1" class="use-case-tab-pane w-tab-pane w--tab-active">
                  <div class="use-case-tabs-content-wrap">
                    <div class="use-case-image-wrap"><img
                        src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/692e9145e4356d0cff1bf0a8_Usecase%2520Dashboard.webp"
                        loading="lazy" sizes="100vw"
                        srcset="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/692e9145e4356d0cff1bf0a8_Usecase%20Dashboard-p-500.webp 500w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/692e9145e4356d0cff1bf0a8_Usecase%20Dashboard-p-800.webp 800w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/692e9145e4356d0cff1bf0a8_Usecase%20Dashboard-p-1080.webp 1080w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/692e9145e4356d0cff1bf0a8_Usecase%20Dashboard-p-1600.webp 1600w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/692e9145e4356d0cff1bf0a8_Usecase%20Dashboard.webp 1764w"
                        alt="" class="use-case-dashboard"></div>
                  </div>
                </div>
                <div data-w-tab="Tab 2" class="use-case-tab-pane w-tab-pane">
                  <div class="use-case-tabs-content-wrap">
                    <div class="use-case-image-wrap"><img
                        src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/692e932308118395a8473f25_Usecase%2520Dashboard%2520Three.webp"
                        loading="lazy" sizes="100vw"
                        srcset="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/692e932308118395a8473f25_Usecase%20Dashboard%20Three-p-500.webp 500w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/692e932308118395a8473f25_Usecase%20Dashboard%20Three-p-800.webp 800w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/692e932308118395a8473f25_Usecase%20Dashboard%20Three-p-1080.webp 1080w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/692e932308118395a8473f25_Usecase%20Dashboard%20Three-p-1600.webp 1600w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/692e932308118395a8473f25_Usecase%20Dashboard%20Three.webp 1764w"
                        alt="" class="use-case-dashboard"></div>
                  </div>
                </div>
                <div data-w-tab="Tab 3" class="use-case-tab-pane w-tab-pane">
                  <div class="use-case-tabs-content-wrap">
                    <div class="use-case-image-wrap"><img
                        src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c05cd1f9191aaf21338f53_Dashboard%252003.webp"
                        loading="lazy" sizes="100vw"
                        srcset="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c05cd1f9191aaf21338f53_Dashboard%2003-p-500.webp 500w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c05cd1f9191aaf21338f53_Dashboard%2003-p-800.webp 800w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c05cd1f9191aaf21338f53_Dashboard%2003-p-1080.webp 1080w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c05cd1f9191aaf21338f53_Dashboard%2003-p-1600.webp 1600w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c05cd1f9191aaf21338f53_Dashboard%2003-p-2000.webp 2000w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c05cd1f9191aaf21338f53_Dashboard%2003.webp 2054w"
                        alt="Dashboard" class="use-case-dashboard"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="use-case-shadow"></div>
    </section>
    <section id="trading" class="trading">
      <div class="container">
        <div class="trading-wrap">
          <div class="section-header-wrap">
            <div class="section-header-content">
              <div data-w-id="5785fb41-bec0-0791-b8b6-6f0084a85dba" class="section-badge-wrap">
                <div class="badge">
                  <div class="badge-dot"></div>
                  <div class="tag-text">Seamless Trading</div>
                </div>
              </div>
              <div class="section-header-text-wrap">
                <div class="heading-wrap">
                  <h2 class="heading-center">Smarter Trading, Simplified</h2>
                </div>
                <div class="subtitle-wrap large">
                  <div class="paragraph-01 subtitle">Place orders with ease, monitor charts, and track performance—all
                    in one seamless view.</div>
                </div>
              </div>
            </div>
          </div>
          <div class="trading-main-wrap">
            <div class="trading-image-wrap"><img
                src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c42e4a940ddca0673e3af1_Trading%2520Image%252001.webp"
                loading="lazy" sizes="100vw"
                srcset="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c42e4a940ddca0673e3af1_Trading%20Image%2001-p-500.webp 500w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c42e4a940ddca0673e3af1_Trading%20Image%2001.webp 566w"
                alt="Trading Image" class="trading-image"></div>
            <div class="trading-lottie-wrap">
              <div data-w-id="162a3c4b-354c-9642-611b-917c14f9f252" data-is-ix2-target="1" class="trading-lottie"
                data-animation-type="lottie"
                data-src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c42ea340d5d5df9f60bfe9_data.json"
                data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="0"
                data-duration="8.016666666666667"></div>
              <div class="trading-lottie-shadow"></div>
            </div>
            <div class="trading-image-wrap"><img
                src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c42e4ba1285cfa4c732bc4_Trading%2520Image%252002.webp"
                loading="lazy" sizes="100vw"
                srcset="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c42e4ba1285cfa4c732bc4_Trading%20Image%2002-p-500.webp 500w, https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c42e4ba1285cfa4c732bc4_Trading%20Image%2002.webp 566w"
                alt="Trading Image" class="trading-image"></div>
          </div>
        </div>
      </div>
    </section>
    <section id="compare" class="compare-section">
      <div class="container">
        <div class="section-header-content is-compare">
          <div class="section-badge-wrap">
            <div class="badge">
              <div class="badge-dot"></div>
              <div class="tag-text">Compare</div>
            </div>
          </div>
          <div class="section-header-text-wrap">
            <div class="heading-wrap">
              <h2 class="heading-center">Xentro vs. Others compare flexibility</h2>
            </div>
          </div>
        </div>
        <div data-w-id="72e1be4f-71e6-9ad5-1736-2bb7dc7730c4" class="compare-table-wrap desktop-only">
          <div class="compare-table">
            <div class="compare-column is-header">
              <div class="th"></div>
              <div class="t-cell-1st">
                <p class="paragraph-01">Why We're Here</p>
              </div>
              <div class="t-cell-1st">
                <p class="paragraph-01">What We’re All About</p>
              </div>
              <div class="t-cell-1st">
                <p class="paragraph-01">How We Communicate</p>
              </div>
              <div class="t-cell-1st">
                <p class="paragraph-01">Working Together</p>
              </div>
              <div class="t-cell-1st">
                <p class="paragraph-01">Cool Automation Tools</p>
              </div>
              <div class="t-cell-1st">
                <p class="paragraph-01">Real-Life Examples</p>
              </div>
              <div class="t-cell-1st">
                <p class="paragraph-01">Integrations with Other Apps</p>
              </div>
            </div>
            <div class="compare-column">
              <div class="th"><img
                  src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c084e14031767baafd5153_Logo.svg"
                  loading="lazy" alt="" class="image">
                <p class="paragraph-01">Xentro</p>
              </div>
              <div class="t-cell">
                <p class="paragraph-01">Messaging and automation for trading firms.</p>
              </div>
              <div class="t-cell">
                <p class="paragraph-01">Client communication, automation, and CRM</p>
              </div>
              <div class="t-cell">
                <p class="paragraph-01">Supports Instagram, SMS, Email, and Web chat.</p>
              </div>
              <div class="t-cell">
                <p class="paragraph-01">Includes multi-agent inboxes and internal notes.</p>
              </div>
              <div class="t-cell">
                <p class="paragraph-01">Includes auto-replies, API access.</p>
              </div>
              <div class="t-cell">
                <p class="paragraph-01">Ideal for managing trading clients and support.</p>
              </div>
              <div class="t-cell">
                <p class="paragraph-01">Connect via Instagram, Facebook, SMS.</p>
              </div>
            </div>
            <div class="compare-column">
              <div class="th">
                <p class="text-style-h3">Others</p>
              </div>
              <div class="t-cell">
                <p class="paragraph-01">Trading platform with signal delivery and charts.</p>
              </div>
              <div class="t-cell">
                <p class="paragraph-01">Provides market analysis and trading signals.</p>
              </div>
              <div class="t-cell">
                <p class="paragraph-01">Primarily for internal or one-way communication.</p>
              </div>
              <div class="t-cell">
                <p class="paragraph-01">Limited team collaboration features</p>
              </div>
              <div class="t-cell">
                <p class="paragraph-01">Signal scheduling, some automation for alerts</p>
              </div>
              <div class="t-cell">
                <p class="paragraph-01">Best suited for signal broadcasting and charting.</p>
              </div>
              <div class="t-cell">
                <p class="paragraph-01">Works with brokers (MT4/MT5).</p>
              </div>
            </div>
          </div>
          <div
            style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)"
            class="light-outline">
            <div class="light-border-inner cta-line">
              <div class="light-color-01"></div>
              <div class="light-color-02 cta-color"></div>
            </div>
          </div>
        </div>
        <div class="compare-table-wrapper">
          <div data-w-id="249800a8-c1a5-0b92-818a-ffcda632e4e7" class="compare-table-wrap">
            <div class="compare-table">
              <div class="compare-column is-header">
                <div class="th"></div>
                <div class="t-cell-1st">
                  <p class="paragraph-01">Why We're Here</p>
                </div>
                <div class="t-cell-1st">
                  <p class="paragraph-01">What We’re All About</p>
                </div>
                <div class="t-cell-1st">
                  <p class="paragraph-01">How We Communicate</p>
                </div>
                <div class="t-cell-1st">
                  <p class="paragraph-01">Working Together</p>
                </div>
                <div class="t-cell-1st">
                  <p class="paragraph-01">Cool Automation Tools</p>
                </div>
                <div class="t-cell-1st">
                  <p class="paragraph-01">Real-Life Examples</p>
                </div>
                <div class="t-cell-1st">
                  <p class="paragraph-01">Integrations with Other Apps</p>
                </div>
              </div>
              <div class="compare-column">
                <div class="th"><img
                    src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c084e14031767baafd5153_Logo.svg"
                    loading="lazy" alt="" class="image">
                  <p class="paragraph-01">Trego.co</p>
                </div>
                <div class="t-cell">
                  <p class="paragraph-01">Messaging and automation for trading firms.</p>
                </div>
                <div class="t-cell">
                  <p class="paragraph-01">Client communication, automation, and CRM</p>
                </div>
                <div class="t-cell">
                  <p class="paragraph-01">Supports Instagram, SMS, Email, and Web chat.</p>
                </div>
                <div class="t-cell">
                  <p class="paragraph-01">Includes multi-agent inboxes and internal notes.</p>
                </div>
                <div class="t-cell">
                  <p class="paragraph-01">Includes auto-replies, API access.</p>
                </div>
                <div class="t-cell">
                  <p class="paragraph-01">Ideal for managing trading clients and support.</p>
                </div>
                <div class="t-cell">
                  <p class="paragraph-01">Connect via Instagram, Facebook, SMS.</p>
                </div>
              </div>
            </div>
            <div
              style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)"
              class="light-outline">
              <div class="light-border-inner cta-line">
                <div class="light-color-01"></div>
                <div class="light-color-02 cta-color"></div>
              </div>
            </div>
          </div>
          <div data-w-id="39de914d-a4fa-ae80-1bd0-7824c027450e" class="compare-table-wrap">
            <div class="compare-table">
              <div class="compare-column is-header">
                <div class="th"></div>
                <div class="t-cell-1st">
                  <p class="paragraph-01">Why We're Here</p>
                </div>
                <div class="t-cell-1st">
                  <p class="paragraph-01">What We’re All About</p>
                </div>
                <div class="t-cell-1st">
                  <p class="paragraph-01">How We Communicate</p>
                </div>
                <div class="t-cell-1st">
                  <p class="paragraph-01">Working Together</p>
                </div>
                <div class="t-cell-1st">
                  <p class="paragraph-01">Cool Automation Tools</p>
                </div>
                <div class="t-cell-1st">
                  <p class="paragraph-01">Real-Life Examples</p>
                </div>
                <div class="t-cell-1st">
                  <p class="paragraph-01">Integrations with Other Apps</p>
                </div>
              </div>
              <div class="compare-column">
                <div class="th">
                  <p class="text-style-h3">Others</p>
                </div>
                <div class="t-cell">
                  <p class="paragraph-01">Trading platform with signal delivery and charts.</p>
                </div>
                <div class="t-cell">
                  <p class="paragraph-01">Provides market analysis and trading signals.</p>
                </div>
                <div class="t-cell">
                  <p class="paragraph-01">Primarily for internal or one-way communication.</p>
                </div>
                <div class="t-cell">
                  <p class="paragraph-01">Limited team collaboration features</p>
                </div>
                <div class="t-cell">
                  <p class="paragraph-01">Signal scheduling, some automation for alerts</p>
                </div>
                <div class="t-cell">
                  <p class="paragraph-01">Best suited for signal broadcasting and charting.</p>
                </div>
                <div class="t-cell">
                  <p class="paragraph-01">Works with brokers (MT4/MT5).</p>
                </div>
              </div>
            </div>
            <div
              style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)"
              class="light-outline">
              <div class="light-border-inner cta-line">
                <div class="light-color-01"></div>
                <div class="light-color-02 cta-color"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="integrations" class="integrate-section">
      <div class="container">
        <div class="section-header-content">
          <div class="section-badge-wrap">
            <div class="badge">
              <div class="badge-dot"></div>
              <div class="tag-text">Integrations</div>
            </div>
          </div>
          <div class="section-header-text-wrap">
            <div class="heading-wrap">
              <h2 class="heading-center">Partner with Us to Innovate</h2>
            </div>
            <div class="subtitle-wrap large">
              <div class="paragraph-01 subtitle">Generate beautiful and editable web designs</div>
            </div>
          </div>
        </div>
        <div data-w-id="5e39294d-6fd3-313c-8126-4d8a88dfb8a4"
          style="-webkit-transform:translate3d(0, 35px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 35px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 35px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 35px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0;filter:blur(5px)"
          class="integrate-content-block">
          <div class="integrate-center-wrap">
            <div class="integrate-circle-wrap">
              <div class="integrate-circle">
                <div class="integrate-circle-02">
                  <div class="integrate-circle-03"><img loading="lazy"
                      src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/6905e03d455b59b009172a68_Vector.svg"
                      alt="" class="integrate-circle-icon">
                    <div class="integrate-icon-bg"></div>
                  </div>
                </div>
              </div>
              <div class="integrate-circle-top-shape"></div>
            </div>
          </div>
          <div class="integrate-main-wrap">
            <div class="integrate-inner-wrap">
              <div class="integrate-logo-row-wrap">
                <div class="integrate-logo-row"><img loading="lazy"
                    src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/6905d9e8d7836af5c2996e42_Integrate%2520Logo%252001.svg"
                    alt="" class="integrate-logo"><img loading="lazy"
                    src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/6905da4cab489862bdaf35b0_Integrate%2520Logo%252002.svg"
                    alt="" class="integrate-logo"><img loading="lazy"
                    src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/6905da4cfb516e25161c22b5_Integrate%2520Logo%252003.svg"
                    alt="" class="integrate-logo"><img loading="lazy"
                    src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/6905da4c54e5966aea2f7fe8_Integrate%2520Logo%252004.svg"
                    alt="" class="integrate-logo"><img loading="lazy"
                    src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/6905da4d13480ea504279543_Integrate%2520Logo%252005.svg"
                    alt="" class="integrate-logo"><img loading="lazy"
                    src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/6905da4d73c122d715705fb1_Integrate%2520Logo%252006.svg"
                    alt="" class="integrate-logo"></div>
                <div class="integrate-logo-row"><img loading="lazy"
                    src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/6905d9e8d7836af5c2996e42_Integrate%20Logo%2001.svg"
                    alt="" class="integrate-logo"><img loading="lazy"
                    src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/6905da4cab489862bdaf35b0_Integrate%20Logo%2002.svg"
                    alt="" class="integrate-logo"><img loading="lazy"
                    src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/6905da4cfb516e25161c22b5_Integrate%20Logo%2003.svg"
                    alt="" class="integrate-logo"><img loading="lazy"
                    src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/6905da4c54e5966aea2f7fe8_Integrate%20Logo%2004.svg"
                    alt="" class="integrate-logo"><img loading="lazy"
                    src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/6905da4d13480ea504279543_Integrate%20Logo%2005.svg"
                    alt="" class="integrate-logo"><img loading="lazy"
                    src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/6905da4d73c122d715705fb1_Integrate%20Logo%2006.svg"
                    alt="" class="integrate-logo"></div>
                <div class="integrate-logo-row"><img loading="lazy"
                    src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/6905d9e8d7836af5c2996e42_Integrate%20Logo%2001.svg"
                    alt="" class="integrate-logo"><img loading="lazy"
                    src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/6905da4cab489862bdaf35b0_Integrate%20Logo%2002.svg"
                    alt="" class="integrate-logo"><img loading="lazy"
                    src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/6905da4cfb516e25161c22b5_Integrate%20Logo%2003.svg"
                    alt="" class="integrate-logo"><img loading="lazy"
                    src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/6905da4c54e5966aea2f7fe8_Integrate%20Logo%2004.svg"
                    alt="" class="integrate-logo"><img loading="lazy"
                    src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/6905da4d13480ea504279543_Integrate%20Logo%2005.svg"
                    alt="" class="integrate-logo"><img loading="lazy"
                    src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/6905da4d73c122d715705fb1_Integrate%20Logo%2006.svg"
                    alt="" class="integrate-logo"></div>
              </div>
              <div class="integrate-shadow-left"></div>
              <div class="integrate-shadow-right"></div>
            </div>
            <div class="integrate-border">
              <div class="integrated-border-inner">
                <div class="light-color-3"></div>
                <div class="light-color-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" class="testimonials">
      <div class="container">
        <div class="testimonials-wrap">
          <div class="section-header-wrap">
            <div class="section-header-content">
              <div class="section-badge-wrap">
                <div class="badge">
                  <div class="badge-dot"></div>
                  <div class="tag-text">Testimonials</div>
                </div>
              </div>
              <div class="section-header-text-wrap">
                <div class="heading-wrap">
                  <h2 class="heading-center">What Our Users Say</h2>
                </div>
                <div class="subtitle-wrap">
                  <div class="paragraph-01 subtitle">Real experiences from real traders, sharing how our platform has
                    transformed their trading journey.</div>
                </div>
              </div>
            </div>
          </div>
          <div data-w-id="2e5121de-8242-ab37-a4f3-b1d1d3057aae" class="testimonials-main-wrap">
            <div class="testimonials-column">
              <div class="testimonial-card">
                <div class="testimonial-author-details"><img
                    src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c1c1af4cec9649b6872f40_Avatar%25201.webp"
                    loading="lazy" alt="" class="testimonial-author-image">
                  <div class="testimonial-author-info">
                    <h4 class="author-name">Floyd Miles</h4>
                    <div class="paragraph-02 text-grey-02">Quantum</div>
                  </div>
                </div>
                <div class="paragraph-02 text-light-grey">"This platform makes trading so much easier. The interface is
                  clean and intuitive, I can focus on my strategies without distractions. It’s the kind of simplicity
                  every trader needs, and it keeps me coming back every day."</div>
              </div>
              <div class="testimonial-card">
                <div class="testimonial-author-details"><img
                    src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c1c1af7ed46fbcb3d78708_Avatar%25202.webp"
                    loading="lazy" alt="" class="testimonial-author-image">
                  <div class="testimonial-author-info">
                    <h4 class="author-name">Ronald Richards</h4>
                    <div class="paragraph-02 text-grey-02">Anantaraya Z</div>
                  </div>
                </div>
                <div class="paragraph-02 text-light-grey">"Being able to sync my trades across desktop and mobile helps
                  me stay on top of the market anytime, anywhere."</div>
              </div>
              <div class="testimonial-card">
                <div class="testimonial-author-details"><img
                    src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c1c1af9a471b2472539730_Avatar%25203.webp"
                    loading="lazy" alt="" class="testimonial-author-image">
                  <div class="testimonial-author-info">
                    <h4 class="author-name">Jenny Wilson</h4>
                    <div class="paragraph-02 text-grey-02">Summit Exchange</div>
                  </div>
                </div>
                <div class="paragraph-02 text-light-grey">"Fast transactions, transparent fees, and a smooth experience
                  overall. This has become my go-to trading platform."</div>
              </div>
              <div class="testimonial-card">
                <div class="testimonial-author-details"><img
                    src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c1c1aeaee4cc679ec2307e_Avatar%25204.webp"
                    loading="lazy" alt="" class="testimonial-author-image">
                  <div class="testimonial-author-info">
                    <h4 class="author-name">Sophia Turner</h4>
                    <div class="paragraph-02 text-grey-02">Equity Innovations</div>
                  </div>
                </div>
                <div class="paragraph-02 text-light-grey">"The advanced charting features are a game changer for me.
                  They help visualize trends perfectly!"</div>
              </div>
            </div>
            <div class="testimonials-column _02">
              <div class="testimonial-card">
                <div class="testimonial-author-details"><img
                    src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c1c1aef4da7d0f6b310d9d_Avatar%25205.webp"
                    loading="lazy" alt="" class="testimonial-author-image">
                  <div class="testimonial-author-info">
                    <h4 class="author-name">Marvin McKinney</h4>
                    <div class="paragraph-02 text-grey-02">Nova Trade</div>
                  </div>
                </div>
                <div class="paragraph-02 text-light-grey">"As someone who has traded on multiple platforms over the
                  years, I can honestly say this one stands out. The speed of execution, combined with the advanced
                  analytics, gives me an edge in volatile markets. On top of that, the customer support team actually
                  listens and helps resolve issues fast. It feels like they truly care about their users, which is rare
                  in the trading space."</div>
              </div>
              <div class="testimonial-card">
                <div class="testimonial-author-details"><img
                    src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c1c1ae3ffbe92c62535b0d_Avatar%25206.webp"
                    loading="lazy" alt="" class="testimonial-author-image">
                  <div class="testimonial-author-info">
                    <h4 class="author-name">Darrell Steward</h4>
                    <div class="paragraph-02 text-grey-02">Zenith.co</div>
                  </div>
                </div>
                <div class="paragraph-02 text-light-grey">"The 24/7 customer support is outstanding. I got help within
                  minutes, even at midnight."</div>
              </div>
              <div class="testimonial-card">
                <div class="testimonial-author-details"><img
                    src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c1c1ad06beb6d9a5522f80_Avatar%25207.webp"
                    loading="lazy" alt="" class="testimonial-author-image">
                  <div class="testimonial-author-info">
                    <h4 class="author-name">James Carter</h4>
                    <div class="paragraph-02 text-grey-02">Tech Innovators</div>
                  </div>
                </div>
                <div class="paragraph-02 text-light-grey">"I appreciate the user-friendly interface and responsive
                  customer support. It makes trading a breeze."</div>
              </div>
              <div class="testimonial-card">
                <div class="testimonial-author-details"><img
                    src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c1c1ad58878316a5fcf261_Avatar%25208.webp"
                    loading="lazy" alt="" class="testimonial-author-image">
                  <div class="testimonial-author-info">
                    <h4 class="author-name">Darlene Robertson</h4>
                    <div class="paragraph-02 text-grey-02">Evergain Finance</div>
                  </div>
                </div>
                <div class="paragraph-02 text-light-grey">"The platform is very reliable and easy to navigate. I like
                  how the features are organized, and the support team always responds quickly. It makes trading feel
                  less stressful and more enjoyable."</div>
              </div>
            </div>
            <div class="testimonials-column _03">
              <div class="testimonial-card">
                <div class="testimonial-author-details"><img
                    src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c1c1adba361ce60d1cb6be_Avatar%25209.webp"
                    loading="lazy" alt="" class="testimonial-author-image">
                  <div class="testimonial-author-info">
                    <h4 class="author-name">Laura Green</h4>
                    <div class="paragraph-02 text-grey-02">Future Traders</div>
                  </div>
                </div>
                <div class="paragraph-02 text-light-grey">"The platform's educational resources have greatly enhanced my
                  understanding of market dynamics."</div>
              </div>
              <div class="testimonial-card">
                <div class="testimonial-author-details"><img
                    src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c1c1ad8e3b00e9c417519e_Avatar%252010.webp"
                    loading="lazy" alt="" class="testimonial-author-image">
                  <div class="testimonial-author-info">
                    <h4 class="author-name">Emily Parker</h4>
                    <div class="paragraph-02 text-grey-02">Market Analysts Inc.</div>
                  </div>
                </div>
                <div class="paragraph-02 text-light-grey">"The analytical tools provided are top-notch and have greatly
                  improved my trading strategies."</div>
              </div>
              <div class="testimonial-card">
                <div class="testimonial-author-details"><img
                    src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c1c1ad190ae75944ff4cff_Avatar%252011.webp"
                    loading="lazy" alt="" class="testimonial-author-image">
                  <div class="testimonial-author-info">
                    <h4 class="author-name">Alexandra Brown</h4>
                    <div class="paragraph-02 text-grey-02">Market Insights Co.</div>
                  </div>
                </div>
                <div class="paragraph-02 text-light-grey">"The community forums are incredibly helpful for sharing
                  strategies and learning from others."</div>
              </div>
              <div class="testimonial-card">
                <div class="testimonial-author-details"><img
                    src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c1c1adc6ba7b7c299defc1_Avatar%252012.webp"
                    loading="lazy" alt="" class="testimonial-author-image">
                  <div class="testimonial-author-info">
                    <h4 class="author-name">Robert Smith</h4>
                    <div class="paragraph-02 text-grey-02">Wealth Advisors LLC</div>
                  </div>
                </div>
                <div class="paragraph-02 text-light-grey">"The detailed insights and market forecasts really assist in
                  making informed decisions. Highly recommended!"</div>
              </div>
            </div>
            <div class="testimonials-column _04">
              <div class="testimonial-card">
                <div class="testimonial-author-details"><img
                    src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c1c1acc7fda00345db73b5_Avatar%252013.webp"
                    loading="lazy" alt="" class="testimonial-author-image">
                  <div class="testimonial-author-info">
                    <h4 class="author-name">Andi Pratama</h4>
                    <div class="paragraph-02 text-grey-02">Bluepeak</div>
                  </div>
                </div>
                <div class="paragraph-02 text-light-grey">"What I like most is how smooth everything feels. The data
                  loads fast, trades are executed instantly, and I never worry about hidden costs. It gives me peace of
                  mind every time I log in."</div>
              </div>
              <div class="testimonial-card">
                <div class="testimonial-author-details"><img
                    src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c1c1ac1a004bdd90c1a869_Avatar%252014.webp"
                    loading="lazy" alt="" class="testimonial-author-image">
                  <div class="testimonial-author-info">
                    <h4 class="author-name">Bessie Cooper</h4>
                    <div class="paragraph-02 text-grey-02">Certex Financials</div>
                  </div>
                </div>
                <div class="paragraph-02 text-light-grey">"I started using this platform a few months ago, and it’s been
                  a game-changer for me. The advanced analytics give me clear insights into market trends, and trades
                  execute without delay. What I appreciate most is the transparency—no hidden fees or confusing terms.
                  It feels like a platform built to genuinely support traders at every level."</div>
              </div>
              <div class="testimonial-card">
                <div class="testimonial-author-details"><img
                    src="assets/cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c1c1ac5d7b9fc9713b2cb9_Avatar%252015.webp"
                    loading="lazy" alt="" class="testimonial-author-image">
                  <div class="testimonial-author-info">
                    <h4 class="author-name">Daniel White</h4>
                    <div class="paragraph-02 text-grey-02">Smart Trade Solutions</div>
                  </div>
                </div>
                <div class="paragraph-02 text-light-grey">"The automated trading options have saved me significant time
                  and increased my profit margins."</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="testimonials-shadow"></div>
    </section>
    <section id="faq" data-wf--faq--variant="base-02" class="faq w-variant-20b86e86-8efe-ecd4-409b-836a5502163f">
      <div class="container">
        <div class="faq-wrap">
          <div class="section-header-wrap">
            <div class="section-header-content">
              <div class="section-badge-wrap">
                <div class="badge">
                  <div class="badge-dot"></div>
                  <div class="tag-text">FAQ</div>
                </div>
              </div>
              <div class="section-header-text-wrap">
                <div class="heading-wrap">
                  <h2 class="heading-center">Frequently Asked Questions</h2>
                </div>
                <div class="subtitle-wrap">
                  <div class="paragraph-01 subtitle">Find answers to the most common queries to help you get the most
                    out of our platform.</div>
                </div>
              </div>
            </div>
          </div>
          <div class="faq-main-wrap">
            <div data-current="Tab 1" data-easing="ease" data-duration-in="300" data-duration-out="100"
              class="faq-tabs w-tabs">
              <div class="faq-list w-tab-menu"><a data-w-tab="Tab 1"
                  class="faq-item _01 w-inline-block w-tab-link w--current">
                  <div class="faq-item-content">
                    <div class="faq-question-wrap">
                      <h4 class="faq-question">How do I create an account?</h4><img loading="lazy"
                        src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68bdecbf10b25bba1ff8f484_Faq%20Arrow.svg"
                        alt="" class="faq-arrow">
                    </div>
                    <div class="faq-answer-wrap">
                      <div class="faq-answer-content">
                        <div class="paragraph-02 text-grey-02">Simply click on the 'Sign Up' button, fill in your basic
                          information, and follow the on-screen instructions.</div>
                      </div>
                    </div>
                  </div>
                </a><a data-w-tab="Tab 2" class="faq-item w-inline-block w-tab-link">
                  <div class="faq-item-content">
                    <div class="faq-question-wrap">
                      <h4 class="faq-question">What documents are needed for verification?</h4><img loading="lazy"
                        src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68bdecbf10b25bba1ff8f484_Faq%20Arrow.svg"
                        alt="" class="faq-arrow">
                    </div>
                    <div class="faq-answer-wrap">
                      <div class="faq-answer-content">
                        <div class="paragraph-02 text-grey-02">A valid government-issued photo ID such as a passport,
                          driver's license, or national ID card.</div>
                      </div>
                    </div>
                  </div>
                </a><a data-w-tab="Tab 3" class="faq-item w-inline-block w-tab-link">
                  <div class="faq-item-content">
                    <div class="faq-question-wrap">
                      <h4 class="faq-question">Is there a fee for transactions?</h4><img loading="lazy"
                        src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68bdecbf10b25bba1ff8f484_Faq%20Arrow.svg"
                        alt="" class="faq-arrow">
                    </div>
                    <div class="faq-answer-wrap">
                      <div class="faq-answer-content">
                        <div class="paragraph-02 text-grey-02">Yes, most platforms charge fees for transactions, but
                          they vary. Common fees include deposit fees, withdrawal fees, and trading fees (often a small
                          percentage of the trade value).</div>
                      </div>
                    </div>
                  </div>
                </a><a data-w-tab="Tab 4" class="faq-item w-inline-block w-tab-link">
                  <div class="faq-item-content">
                    <div class="faq-question-wrap">
                      <h4 class="faq-question">Can I use the platform on mobile devices?</h4><img loading="lazy"
                        src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68bdecbf10b25bba1ff8f484_Faq%20Arrow.svg"
                        alt="" class="faq-arrow">
                    </div>
                    <div class="faq-answer-wrap">
                      <div class="faq-answer-content">
                        <div class="paragraph-02 text-grey-02">Absolutely! Most modern platforms are accessible on
                          mobile devices. This is usually through a dedicated mobile app available for iOS and Android,
                          or via a mobile-responsive website that works well on your phone's browser. </div>
                      </div>
                    </div>
                  </div>
                </a><a data-w-tab="Tab 5" class="faq-item w-inline-block w-tab-link">
                  <div class="faq-item-content">
                    <div class="faq-question-wrap">
                      <h4 class="faq-question">How can I reset my password?</h4><img loading="lazy"
                        src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68bdecbf10b25bba1ff8f484_Faq%20Arrow.svg"
                        alt="" class="faq-arrow">
                    </div>
                    <div class="faq-answer-wrap">
                      <div class="faq-answer-content">
                        <div class="paragraph-02 text-grey-02">1. Go to the login page and click the "Forgot Password?"
                          or "Reset Password" link.<br>2. Enter the email address associated with your account.<br>3.
                          You'll receive an email with a link or a code to create a new password. Be sure to check your
                          spam or junk folder if you don't see it.</div>
                      </div>
                    </div>
                  </div>
                </a><a data-w-tab="Tab 6" class="faq-item w-inline-block w-tab-link">
                  <div class="faq-item-content">
                    <div class="faq-question-wrap">
                      <h4 class="faq-question">Is customer support available 24/7?</h4><img loading="lazy"
                        src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68bdecbf10b25bba1ff8f484_Faq%20Arrow.svg"
                        alt="" class="faq-arrow">
                    </div>
                    <div class="faq-answer-wrap">
                      <div class="faq-answer-content">
                        <div class="paragraph-02 text-grey-02">Reputable platforms use several security measures to keep
                          your funds safe.</div>
                      </div>
                    </div>
                  </div>
                </a><a data-w-tab="Tab 7" class="faq-item w-inline-block w-tab-link">
                  <div class="faq-item-content">
                    <div class="faq-question-wrap">
                      <h4 class="faq-question">Are my funds safe on the platform?</h4><img loading="lazy"
                        src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68bdecbf10b25bba1ff8f484_Faq%20Arrow.svg"
                        alt="" class="faq-arrow">
                    </div>
                    <div class="faq-answer-wrap">
                      <div class="faq-answer-content">
                        <div class="paragraph-02 text-grey-02">This capability depends on the platform's features. While
                          basic platforms may only allow you to execute one trade at a time, more advanced trading
                          platforms often provide tools and order types (like "One-Cancels-the-Other" or OCO orders)
                          that allow you to place multiple orders for different assets simultaneously.</div>
                      </div>
                    </div>
                  </div>
                </a><a data-w-tab="Tab 8" class="faq-item w-inline-block w-tab-link">
                  <div class="faq-item-content">
                    <div class="faq-question-wrap">
                      <h4 class="faq-question">Can I trade multiple assets at once?</h4><img loading="lazy"
                        src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68bdecbf10b25bba1ff8f484_Faq%20Arrow.svg"
                        alt="" class="faq-arrow">
                    </div>
                    <div class="faq-answer-wrap">
                      <div class="faq-answer-content">
                        <div class="paragraph-02 text-grey-02">Yes, on many platforms, you can trade multiple assets at
                          once, but this capability depends on the features offered by the specific trading platform you
                          are using.</div>
                      </div>
                    </div>
                  </div>
                </a></div>
              <div class="faq-hide w-tab-content">
                <div data-w-tab="Tab 1" class="w-tab-pane w--tab-active"></div>
                <div data-w-tab="Tab 2" class="w-tab-pane"></div>
                <div data-w-tab="Tab 3" class="w-tab-pane"></div>
                <div data-w-tab="Tab 4" class="w-tab-pane"></div>
                <div data-w-tab="Tab 5" class="w-tab-pane"></div>
                <div data-w-tab="Tab 6" class="w-tab-pane"></div>
                <div data-w-tab="Tab 7" class="w-tab-pane"></div>
                <div data-w-tab="Tab 8" class="w-tab-pane"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="shadow-wrap"></div>
    </section>
    <section id="pricing" class="pricing-v2">
      <div class="container">
        <div class="pricing-v2-wrap">
          <div class="section-header-wrap">
            <div class="section-header-content">
              <div class="section-badge-wrap">
                <div class="badge">
                  <div class="badge-dot"></div>
                  <div class="tag-text">Pricing Plan</div>
                </div>
              </div>
              <div class="section-header-text-wrap">
                <div class="heading-wrap">
                  <h2 class="heading-center">Choose Your Plan</h2>
                </div>
                <div class="subtitle-wrap">
                  <div class="paragraph-01 subtitle">Flexible pricing to fit your needs—pick the plan that works best
                    for you.</div>
                </div>
              </div>
            </div>
          </div>
          <div class="pricing-v2-main-wrap">
            <div class="pricing-list-wrap">
              <div class="w-dyn-list">
                <div role="list" class="w-dyn-items">
                  <div role="listitem" class="w-dyn-item">
                    <div data-w-id="94ae3416-39fa-831c-2815-206964b1998f"
                      style="-webkit-transform:translate3d(0, 35px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 35px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 35px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 35px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0;filter:blur(5px)"
                      class="pricing-card">
                      <div class="pricing-card-content">
                        <div class="pricing-info-wrap">
                          <div class="pricing-title-wrap">
                            <div class="paragraph-01 pricing-title">Starter</div>
                          </div>
                          <div class="pricing-subtitle-wrap">
                            <div class="paragraph-02 text-light-grey">Begin your trading journey with confidence.</div>
                          </div>
                        </div>
                        <div class="price-wrap">
                          <div class="currency-text">$</div>
                          <div class="price">4.99</div>
                          <div class="duration">/mo</div>
                        </div>
                        <div class="pricing-button-wrap"><a href="product/starter.html"
                            class="button-03 large w-inline-block">
                            <div class="button-03-inner large">
                              <div class="button-03-text-wrap">
                                <div class="button-03-text-group">
                                  <div class="button-text">Get Started</div>
                                  <div class="button-text">Get Started</div>
                                </div>
                              </div>
                              <div class="button-03-radial-shadow large"></div>
                            </div>
                            <div class="integrate-border">
                              <div class="light-border-inner">
                                <div class="light-color-02"></div>
                                <div class="light-color-01"></div>
                              </div>
                            </div>
                          </a></div>
                        <div class="pricing-features-wrap">
                          <div class="paragraph-02">Includes :</div>
                          <div class="pricing-features-list">
                            <div class="pricing-features-item"><img loading="lazy"
                                src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68bde0ac8a46b1980eb40ee0_Check.svg"
                                alt="" class="pricing-features-icon">
                              <div class="paragraph-02 text-light-grey">Access to trading dashboard</div>
                            </div>
                            <div class="pricing-features-item"><img loading="lazy"
                                src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68bde0ac8a46b1980eb40ee0_Check.svg"
                                alt="" class="pricing-features-icon">
                              <div class="paragraph-02 text-light-grey">Real-time market data</div>
                            </div>
                            <div class="pricing-features-item"><img loading="lazy"
                                src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68bde0ac8a46b1980eb40ee0_Check.svg"
                                alt="" class="pricing-features-icon">
                              <div class="paragraph-02 text-light-grey">Community support</div>
                            </div>
                            <div class="pricing-features-item"><img loading="lazy"
                                src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68bde0ac8a46b1980eb40ee0_Check.svg"
                                alt="" class="pricing-features-icon">
                              <div class="paragraph-02 text-light-grey">Basic learning resources</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="pricing-card-cover"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-dyn-list">
                <div role="list" class="w-dyn-items">
                  <div role="listitem" class="w-dyn-item">
                    <div data-w-id="94ae3416-39fa-831c-2815-206964b199c1"
                      style="-webkit-transform:translate3d(0, 35px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 35px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 35px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 35px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0;filter:blur(5px)"
                      class="pricing-card _02">
                      <div class="pricing-card-content">
                        <div class="pricing-info-wrap">
                          <div class="pricing-title-wrap">
                            <div class="paragraph-01 pricing-title">Basic</div>
                            <div class="plan-badge">
                              <div class="plan-badge-text">RECOMMENDED</div>
                            </div>
                          </div>
                          <div class="pricing-subtitle-wrap">
                            <div class="paragraph-02 text-light-grey">Perfect for beginners starting their trading
                              journey</div>
                          </div>
                        </div>
                        <div class="price-wrap">
                          <div class="currency-text">$</div>
                          <div class="price">9.99</div>
                          <div class="duration">/mo</div>
                        </div>
                        <div class="pricing-button-wrap"><a href="product/basic.html"
                            class="button-03 large w-inline-block">
                            <div class="button-03-inner large">
                              <div class="button-03-text-wrap">
                                <div class="button-03-text-group">
                                  <div class="button-text">Get Started</div>
                                  <div class="button-text">Get Started</div>
                                </div>
                              </div>
                              <div class="button-03-radial-shadow large"></div>
                            </div>
                            <div class="integrate-border">
                              <div class="light-border-inner">
                                <div class="light-color-02"></div>
                                <div class="light-color-01"></div>
                              </div>
                            </div>
                          </a></div>
                        <div class="pricing-features-wrap">
                          <div class="paragraph-02">Includes :</div>
                          <div class="pricing-features-list">
                            <div class="pricing-features-item"><img loading="lazy"
                                src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68bde0ac8a46b1980eb40ee0_Check.svg"
                                alt="" class="pricing-features-icon">
                              <div class="paragraph-02 text-light-grey">Access to essential tools</div>
                            </div>
                            <div class="pricing-features-item"><img loading="lazy"
                                src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68bde0ac8a46b1980eb40ee0_Check.svg"
                                alt="" class="pricing-features-icon">
                              <div class="paragraph-02 text-light-grey">Limited support</div>
                            </div>
                            <div class="pricing-features-item"><img loading="lazy"
                                src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68bde0ac8a46b1980eb40ee0_Check.svg"
                                alt="" class="pricing-features-icon">
                              <div class="paragraph-02 text-light-grey">Basic analytics</div>
                            </div>
                            <div class="pricing-features-item"><img loading="lazy"
                                src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68bde0ac8a46b1980eb40ee0_Check.svg"
                                alt="" class="pricing-features-icon">
                              <div class="paragraph-02 text-light-grey">Secure transactions</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="pricing-card-cover"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-dyn-list">
                <div role="list" class="w-dyn-items">
                  <div role="listitem" class="w-dyn-item">
                    <div data-w-id="94ae3416-39fa-831c-2815-206964b199f6"
                      style="-webkit-transform:translate3d(0, 35px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 35px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 35px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 35px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0;filter:blur(5px)"
                      class="pricing-card _03">
                      <div class="pricing-card-content">
                        <div class="pricing-info-wrap">
                          <div class="pricing-title-wrap">
                            <div class="paragraph-01 pricing-title">Pro</div>
                          </div>
                          <div class="pricing-subtitle-wrap">
                            <div class="paragraph-02 text-light-grey">Advanced features to maximize results.</div>
                          </div>
                        </div>
                        <div class="price-wrap">
                          <div class="currency-text">$</div>
                          <div class="price">29.99</div>
                          <div class="duration">/mo</div>
                        </div>
                        <div class="pricing-button-wrap"><a href="product/pro.html"
                            class="button-03 large w-inline-block">
                            <div class="button-03-inner large">
                              <div class="button-03-text-wrap">
                                <div class="button-03-text-group">
                                  <div class="button-text">Get Started</div>
                                  <div class="button-text">Get Started</div>
                                </div>
                              </div>
                              <div class="button-03-radial-shadow large"></div>
                            </div>
                            <div class="integrate-border">
                              <div class="light-border-inner">
                                <div class="light-color-02"></div>
                                <div class="light-color-01"></div>
                              </div>
                            </div>
                          </a></div>
                        <div class="pricing-features-wrap">
                          <div class="paragraph-02">Includes :</div>
                          <div class="pricing-features-list">
                            <div class="pricing-features-item"><img loading="lazy"
                                src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68bde0ac8a46b1980eb40ee0_Check.svg"
                                alt="" class="pricing-features-icon">
                              <div class="paragraph-02 text-light-grey">All Starter &amp; Basic features</div>
                            </div>
                            <div class="pricing-features-item"><img loading="lazy"
                                src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68bde0ac8a46b1980eb40ee0_Check.svg"
                                alt="" class="pricing-features-icon">
                              <div class="paragraph-02 text-light-grey">Advanced analytics</div>
                            </div>
                            <div class="pricing-features-item"><img loading="lazy"
                                src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68bde0ac8a46b1980eb40ee0_Check.svg"
                                alt="" class="pricing-features-icon">
                              <div class="paragraph-02 text-light-grey">Priority support</div>
                            </div>
                            <div class="pricing-features-item"><img loading="lazy"
                                src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68bde0ac8a46b1980eb40ee0_Check.svg"
                                alt="" class="pricing-features-icon">
                              <div class="paragraph-02 text-light-grey">Multi-device access</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="pricing-card-cover"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact" class="cta">
      <div class="w-layout-blockcontainer container w-container">
        <div data-w-id="5276c6b9-29d4-aa6b-1e5c-b8a02f7098a1" class="cta-wrap">
          <div class="cta-main-wrap">
            <div class="cta-content-wrap">
              <div data-w-id="5276c6b9-29d4-aa6b-1e5c-b8a02f7098a4" class="cta-logo-wrap"><img
                  src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/692e95006eeb4707e8b41c8a_Xentro%20CTA%20Logo.svg"
                  loading="lazy" alt="" class="cta-logo"></div>
              <div class="cta-text-wrap">
                <div data-w-id="5276c6b9-29d4-aa6b-1e5c-b8a02f7098a7" class="cta-heading-wrap">
                  <h1 class="cta-heading">Trade Smarter, Grow Faster</h1>
                </div>
                <div data-w-id="5276c6b9-29d4-aa6b-1e5c-b8a02f7098aa" class="cta-subtitle-wrap">
                  <div class="paragraph-02 cta-subtitle">All-in-one platform with low fees, real-time insights, and
                    secure trading—built for every trader.</div>
                </div>
              </div>
              <div data-w-id="5276c6b9-29d4-aa6b-1e5c-b8a02f7098ad" class="cta-button-wrap"><a
                  data-wf--button-03--variant="large-button" href="contact.html"
                  class="button-03 w-variant-1d958806-13a9-8f74-7ca9-7c9195253ea3 w-inline-block">
                  <div class="button-03-inner w-variant-1d958806-13a9-8f74-7ca9-7c9195253ea3"><img
                      src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/68c085f980a4c3f7b99151df_Windows.svg"
                      loading="lazy" alt="" class="button-03-icon">
                    <div class="button-03-text-wrap">
                      <div class="button-03-text-group">
                        <div class="button-text">Start Trading Now</div>
                        <div class="button-text">Start Trading Now</div>
                      </div>
                    </div>
                    <div class="button-03-radial-shadow"></div>
                  </div>
                  <div class="integrate-border">
                    <div class="light-border-inner">
                      <div class="light-color-02"></div>
                      <div class="light-color-01"></div>
                    </div>
                  </div>
                </a></div>
            </div>
          </div>
          <div class="light-outline">
            <div class="light-border-inner cta-line">
              <div class="light-color-01"></div>
              <div class="light-color-02 cta-color"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="footer">
      <div class="w-layout-blockcontainer container w-container">
        <div class="footer-wrap">
          <div class="footer-main-wrap">
            <div class="footer-left">
              <div data-w-id="375cf146-eddd-7e01-a46a-f5e638b3bfae"><a href="index.html" aria-current="page"
                  class="footer-brand w-inline-block w--current"><img
                    src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/692e8fea88874a81e28b09ce_Xentro%20Home%20Logo.svg"
                    loading="lazy" alt="" class="footer-logo"></a>
                <div class="footer-subtitle-wrap">
                  <div class="paragraph-01 text-grey-02">Trego.co empowers traders with simple, secure, and reliable
                    tools to trade smarter every day.</div>
                </div>
              </div>
              <div data-w-id="79252d73-d5b6-96ec-641c-e29eb9fbdbc7" class="newsletter-wrap">
                <div class="newsletter-text-wrap">
                  <div class="paragraph-01">Subscribe Newsletter</div>
                  <div class="paragraph-02 text-grey-02">Get the latest market insights and trading tips — straight to
                    your inbox.</div>
                </div>
                <div class="newsletter-form-wrap">
                  <div class="newsletter-form-block w-form">
                    <form id="wf-form-Newsletter-Form" name="wf-form-Newsletter-Form" data-name="Newsletter Form"
                      method="get" data-wf-page-id="68b9a3dd68643585de10439f"
                      data-wf-element-id="79252d73-d5b6-96ec-641c-e29eb9fbdbcf"
                      data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e">
                      <div class="newsletter-form-group"><input class="newsletter-input-filed w-input" maxlength="256"
                          name="email" data-name="Email" placeholder="Type your email" type="email" id="email"
                          required=""><input type="submit" data-wait=""
                          class="form-submit-button newsletter-button w-button" value="Subscribe"></div>
                    </form>
                    <div class="success-message w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div class="error-message w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer-right">
              <div data-w-id="79252d73-d5b6-96ec-641c-e29eb9fbdbda" class="footer-social-wrap"><a
                  href="https://www.instagram.com/" target="_blank" class="footer-social-link w-inline-block">
                  <div class="paragraph-01 text-grey-02">Instagram →</div>
                  <div class="footer-social-link-underline"></div>
                </a><a href="https://www.facebook.com/" target="_blank" class="footer-social-link w-inline-block">
                  <div class="paragraph-01 text-grey-02">Facebook →</div>
                  <div class="footer-social-link-underline"></div>
                </a><a href="https://www.linkedin.com/" target="_blank" class="footer-social-link w-inline-block">
                  <div class="paragraph-01 text-grey-02">LinkedIn →</div>
                  <div class="footer-social-link-underline"></div>
                </a></div>
              <div class="footer-menu-wrap">
                <div class="footer-column">
                  <div class="paragraph-01">Quick Links</div>
                  <div class="footer-menu-list"><a href="index.html" aria-current="page"
                      class="paragraph-02 footer-menu w--current">Home</a><a href="about.html"
                      class="paragraph-02 footer-menu">About</a><a href="features.html"
                      class="paragraph-02 footer-menu">Features</a><a href="pricing.html"
                      class="paragraph-02 footer-menu">Pricing</a><a href="blog.html"
                      class="paragraph-02 footer-menu">Blog</a><a href="contact.html"
                      class="paragraph-02 footer-menu">Contact</a></div>
                </div>
                <div class="footer-column">
                  <div class="paragraph-01">Inner Pages</div>
                  <div class="footer-menu-list"><a href="career.html" class="paragraph-02 footer-menu">Career</a><a
                      href="https://trego-trading.webflow.io/blog/design-clarity-starts-with-empathy"
                      class="paragraph-02 footer-menu">Blog Details</a><a
                      href="https://trego-trading.webflow.io/product/starter" class="paragraph-02 footer-menu">Pricing
                      Details</a><a href="integration.html" class="paragraph-02 footer-menu">Integration</a><a
                      href="https://trego-trading.webflow.io/integration/logsync"
                      class="paragraph-02 footer-menu">Integration Details</a></div>
                </div>
                <div class="footer-column">
                  <div class="paragraph-01">Quick Links</div>
                  <div class="footer-menu-list"><a href="404.html" class="paragraph-02 footer-menu">404</a><a
                      href="401.html" class="paragraph-02 footer-menu">Password</a><a href="utility-pages/license.html"
                      class="paragraph-02 footer-menu">Licenses</a><a href="utility-pages/changelog.html"
                      class="paragraph-02 footer-menu">Changelog</a><a href="utility-pages/style-guide.html"
                      class="paragraph-02 footer-menu">Style Guide</a></div>
                </div>
              </div>
            </div>
          </div>
          <div data-w-id="79252d73-d5b6-96ec-641c-e29eb9fbdc0e" class="copyright-wrap">
            <div class="paragraph-02 copyright-text">© 2025 - All rights reserved, Developed by <a
                href="https://webflow.com/templates/designers/finlay-studio" target="_blank"
                class="copyright-link">Finlay Studio</a> - Powered by <a href="https://www.webflow.com" target="_blank"
                class="copyright-link">Webflow</a></div>
          </div>
        </div>
      </div>
    </section>
  </div>
  `;

  return (
    <>
      <main dangerouslySetInnerHTML={{ __html: bodyHtml }} />

      <Script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=68b9a3dc68643585de10435f"
        strategy="afterInteractive"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossOrigin="anonymous"
      />
      <Script
        src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/js/webflow.schunk.300bb1e9d1d59bcb.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.prod.website-files.com/68b9a3dc68643585de10435f/js/webflow.1f84f7b5.1df7882c6f47fbf2.js"
        strategy="afterInteractive"
      />
      <Script id="smooth-scroll" strategy="afterInteractive">
        {`
          (function() {
            const sectionMap = {
              "index.html": "hero",
              "about.html": "about",
              "features.html": "features",
              "pricing.html": "pricing",
              "blog.html": "testimonials",
              "contact.html": "contact"
            };

            function scrollToId(id) {
              const el = document.getElementById(id);
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }

            document.querySelectorAll('a[href]').forEach((anchor) => {
              const href = anchor.getAttribute('href') || '';
              if (href.startsWith('#')) {
                const targetId = href.slice(1);
                anchor.addEventListener('click', (e) => {
                  if (document.getElementById(targetId)) {
                    e.preventDefault();
                    scrollToId(targetId);
                  }
                });
              } else if (!href.startsWith('http') && sectionMap[href]) {
                anchor.addEventListener('click', (e) => {
                  e.preventDefault();
                  scrollToId(sectionMap[href]);
                });
              }
            });
          })();
        `}
      </Script>
    </>
  );
}
