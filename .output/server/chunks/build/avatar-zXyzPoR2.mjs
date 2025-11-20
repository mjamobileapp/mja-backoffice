import { a as _sfc_main$2 } from './server.mjs';
import { _ as __nuxt_component_3 } from './nuxt-link-DXkcJ9KT.mjs';
import { _ as _sfc_main$5, a as _sfc_main$1, b as _sfc_main$3, c as _sfc_main$4 } from './CardTitle-C5Xy3z8Z.mjs';
import { _ as _sfc_main$2$1, b as _sfc_main$6, a as _sfc_main$1$1 } from './index-B6VfKlGU.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'node:module';
import 'vue-router';
import '@iconify/vue';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import 'radix-vue';
import '@iconify/utils/lib/css/icon';
import 'vue-sonner';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Button = _sfc_main$2;
  const _component_NuxtLink = __nuxt_component_3;
  const _component_Card = _sfc_main$5;
  const _component_CardHeader = _sfc_main$1;
  const _component_CardTitle = _sfc_main$3;
  const _component_CardContent = _sfc_main$4;
  const _component_Avatar = _sfc_main$2$1;
  const _component_AvatarImage = _sfc_main$6;
  const _component_AvatarFallback = _sfc_main$1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}><div class="grid gap-2"><div><h2 class="text-2xl font-bold tracking-tight"> Avatar </h2><p class="text-muted-foreground"> An image element with a fallback for representing the user. </p></div><div class="flex gap-2">`);
  _push(ssrRenderComponent(_component_Button, {
    size: "xs",
    variant: "outline",
    class: "text-xs",
    "as-child": ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "https://www.shadcn-vue.com/docs/components/avatar",
          external: "",
          target: "_blank"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span class="i-radix-icons-code mr-2"${_scopeId2}></span> Component Source `);
            } else {
              return [
                createVNode("span", { class: "i-radix-icons-code mr-2" }),
                createTextVNode(" Component Source ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtLink, {
            to: "https://www.shadcn-vue.com/docs/components/avatar",
            external: "",
            target: "_blank"
          }, {
            default: withCtx(() => [
              createVNode("span", { class: "i-radix-icons-code mr-2" }),
              createTextVNode(" Component Source ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, {
    size: "xs",
    variant: "outline",
    class: "text-xs",
    "as-child": ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "https://www.radix-vue.com/components/avatar",
          external: "",
          target: "_blank"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Primitive API Reference `);
            } else {
              return [
                createTextVNode(" Primitive API Reference ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtLink, {
            to: "https://www.radix-vue.com/components/avatar",
            external: "",
            target: "_blank"
          }, {
            default: withCtx(() => [
              createTextVNode(" Primitive API Reference ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="flex flex-col gap-4 md:flex-row">`);
  _push(ssrRenderComponent(_component_Card, { class: "w-full md:w-1/2" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CardHeader, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_CardTitle, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Basic`);
                  } else {
                    return [
                      createTextVNode("Basic")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_CardTitle, null, {
                  default: withCtx(() => [
                    createTextVNode("Basic")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_CardContent, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="h-100px w-full flex items-center justify-center gap-4 overflow-hidden sm:h-200px"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Avatar, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_AvatarImage, {
                      src: "https://github.com/radix-vue.png",
                      alt: "@radix-vue"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_AvatarFallback, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`RV`);
                        } else {
                          return [
                            createTextVNode("RV")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_AvatarImage, {
                        src: "https://github.com/radix-vue.png",
                        alt: "@radix-vue"
                      }),
                      createVNode(_component_AvatarFallback, null, {
                        default: withCtx(() => [
                          createTextVNode("RV")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_Avatar, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_AvatarImage, {
                      src: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
                      alt: "Colm Tuite"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_AvatarFallback, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`CT`);
                        } else {
                          return [
                            createTextVNode("CT")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_AvatarImage, {
                        src: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
                        alt: "Colm Tuite"
                      }),
                      createVNode(_component_AvatarFallback, null, {
                        default: withCtx(() => [
                          createTextVNode("CT")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_Avatar, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_AvatarFallback, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`DP`);
                        } else {
                          return [
                            createTextVNode("DP")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_AvatarFallback, null, {
                        default: withCtx(() => [
                          createTextVNode("DP")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "h-100px w-full flex items-center justify-center gap-4 overflow-hidden sm:h-200px" }, [
                  createVNode(_component_Avatar, null, {
                    default: withCtx(() => [
                      createVNode(_component_AvatarImage, {
                        src: "https://github.com/radix-vue.png",
                        alt: "@radix-vue"
                      }),
                      createVNode(_component_AvatarFallback, null, {
                        default: withCtx(() => [
                          createTextVNode("RV")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Avatar, null, {
                    default: withCtx(() => [
                      createVNode(_component_AvatarImage, {
                        src: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
                        alt: "Colm Tuite"
                      }),
                      createVNode(_component_AvatarFallback, null, {
                        default: withCtx(() => [
                          createTextVNode("CT")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Avatar, null, {
                    default: withCtx(() => [
                      createVNode(_component_AvatarFallback, null, {
                        default: withCtx(() => [
                          createTextVNode("DP")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_CardHeader, null, {
            default: withCtx(() => [
              createVNode(_component_CardTitle, null, {
                default: withCtx(() => [
                  createTextVNode("Basic")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_CardContent, null, {
            default: withCtx(() => [
              createVNode("div", { class: "h-100px w-full flex items-center justify-center gap-4 overflow-hidden sm:h-200px" }, [
                createVNode(_component_Avatar, null, {
                  default: withCtx(() => [
                    createVNode(_component_AvatarImage, {
                      src: "https://github.com/radix-vue.png",
                      alt: "@radix-vue"
                    }),
                    createVNode(_component_AvatarFallback, null, {
                      default: withCtx(() => [
                        createTextVNode("RV")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_Avatar, null, {
                  default: withCtx(() => [
                    createVNode(_component_AvatarImage, {
                      src: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
                      alt: "Colm Tuite"
                    }),
                    createVNode(_component_AvatarFallback, null, {
                      default: withCtx(() => [
                        createTextVNode("CT")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_Avatar, null, {
                  default: withCtx(() => [
                    createVNode(_component_AvatarFallback, null, {
                      default: withCtx(() => [
                        createTextVNode("DP")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components/avatar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const avatar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { avatar as default };
//# sourceMappingURL=avatar-zXyzPoR2.mjs.map
