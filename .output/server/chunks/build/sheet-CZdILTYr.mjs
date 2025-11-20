import { a as _sfc_main$2 } from './server.mjs';
import { _ as __nuxt_component_3 } from './nuxt-link-DXkcJ9KT.mjs';
import { _ as _sfc_main$5, a as _sfc_main$1, b as _sfc_main$3, c as _sfc_main$4 } from './CardTitle-C5Xy3z8Z.mjs';
import { _ as _sfc_main$7, a as _sfc_main$6, b as _sfc_main$5$1, c as _sfc_main$2$1, d as _sfc_main$1$1, e as _sfc_main$4$1, f as _sfc_main$3$1, g as _sfc_main$6$1 } from './index-DWTRBWyR.mjs';
import { _ as _sfc_main$8 } from './Label-BBvFeqSn.mjs';
import { _ as _sfc_main$9 } from './Input-CDkjoebz.mjs';
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
import './DialogTrigger-BW6jyQ7n.mjs';
import 'lucide-vue-next';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Button = _sfc_main$2;
  const _component_NuxtLink = __nuxt_component_3;
  const _component_Card = _sfc_main$5;
  const _component_CardHeader = _sfc_main$1;
  const _component_CardTitle = _sfc_main$3;
  const _component_CardContent = _sfc_main$4;
  const _component_Sheet = _sfc_main$7;
  const _component_SheetTrigger = _sfc_main$6;
  const _component_SheetContent = _sfc_main$5$1;
  const _component_SheetHeader = _sfc_main$2$1;
  const _component_SheetTitle = _sfc_main$1$1;
  const _component_SheetDescription = _sfc_main$4$1;
  const _component_Label = _sfc_main$8;
  const _component_Input = _sfc_main$9;
  const _component_SheetFooter = _sfc_main$3$1;
  const _component_SheetClose = _sfc_main$6$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}><div class="grid gap-2"><div><h2 class="text-2xl font-bold tracking-tight"> Sheet </h2><p class="text-muted-foreground"> Extends the Dialog component to display content that complements the main content of the screen. </p></div><div class="flex gap-2">`);
  _push(ssrRenderComponent(_component_Button, {
    size: "xs",
    variant: "outline",
    class: "text-xs",
    "as-child": ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "https://www.shadcn-vue.com/docs/components/sheet",
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
            to: "https://www.shadcn-vue.com/docs/components/sheet",
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
          to: "https://www.radix-vue.com/components/sheet",
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
            to: "https://www.radix-vue.com/components/sheet",
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
  _push(`</div></div><div class="grid gap-4 md:grid-cols-2">`);
  _push(ssrRenderComponent(_component_Card, { class: "w-full" }, {
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
              _push3(`<div class="min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Sheet, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_SheetTrigger, { "as-child": "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_Button, { variant: "outline" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Open `);
                              } else {
                                return [
                                  createTextVNode(" Open ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_Button, { variant: "outline" }, {
                              default: withCtx(() => [
                                createTextVNode(" Open ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_SheetContent, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_SheetHeader, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_SheetTitle, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Edit profile`);
                                    } else {
                                      return [
                                        createTextVNode("Edit profile")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_SheetDescription, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Make changes to your profile here. Click save when you&#39;re done. `);
                                    } else {
                                      return [
                                        createTextVNode(" Make changes to your profile here. Click save when you're done. ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_SheetTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Edit profile")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_SheetDescription, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" Make changes to your profile here. Click save when you're done. ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<div class="grid gap-4 py-4"${_scopeId4}><div class="grid grid-cols-4 items-center gap-4"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_Label, {
                            for: "name",
                            class: "text-right"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Name `);
                              } else {
                                return [
                                  createTextVNode(" Name ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_Input, {
                            id: "name",
                            value: "Pedro Duarte",
                            class: "col-span-3"
                          }, null, _parent5, _scopeId4));
                          _push5(`</div><div class="grid grid-cols-4 items-center gap-4"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_Label, {
                            for: "username",
                            class: "text-right"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Username `);
                              } else {
                                return [
                                  createTextVNode(" Username ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_Input, {
                            id: "username",
                            value: "@peduarte",
                            class: "col-span-3"
                          }, null, _parent5, _scopeId4));
                          _push5(`</div></div>`);
                          _push5(ssrRenderComponent(_component_SheetFooter, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_SheetClose, { "as-child": "" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_Button, { type: "submit" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(` Save changes `);
                                          } else {
                                            return [
                                              createTextVNode(" Save changes ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_Button, { type: "submit" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Save changes ")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_SheetClose, { "as-child": "" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Button, { type: "submit" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Save changes ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_SheetHeader, null, {
                              default: withCtx(() => [
                                createVNode(_component_SheetTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Edit profile")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_SheetDescription, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Make changes to your profile here. Click save when you're done. ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "grid gap-4 py-4" }, [
                              createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                                createVNode(_component_Label, {
                                  for: "name",
                                  class: "text-right"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Name ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Input, {
                                  id: "name",
                                  value: "Pedro Duarte",
                                  class: "col-span-3"
                                })
                              ]),
                              createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                                createVNode(_component_Label, {
                                  for: "username",
                                  class: "text-right"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Username ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Input, {
                                  id: "username",
                                  value: "@peduarte",
                                  class: "col-span-3"
                                })
                              ])
                            ]),
                            createVNode(_component_SheetFooter, null, {
                              default: withCtx(() => [
                                createVNode(_component_SheetClose, { "as-child": "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Button, { type: "submit" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Save changes ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_SheetTrigger, { "as-child": "" }, {
                        default: withCtx(() => [
                          createVNode(_component_Button, { variant: "outline" }, {
                            default: withCtx(() => [
                              createTextVNode(" Open ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SheetContent, null, {
                        default: withCtx(() => [
                          createVNode(_component_SheetHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_SheetTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Edit profile")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SheetDescription, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Make changes to your profile here. Click save when you're done. ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "grid gap-4 py-4" }, [
                            createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                              createVNode(_component_Label, {
                                for: "name",
                                class: "text-right"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Name ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Input, {
                                id: "name",
                                value: "Pedro Duarte",
                                class: "col-span-3"
                              })
                            ]),
                            createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                              createVNode(_component_Label, {
                                for: "username",
                                class: "text-right"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Username ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Input, {
                                id: "username",
                                value: "@peduarte",
                                class: "col-span-3"
                              })
                            ])
                          ]),
                          createVNode(_component_SheetFooter, null, {
                            default: withCtx(() => [
                              createVNode(_component_SheetClose, { "as-child": "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_Button, { type: "submit" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Save changes ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
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
                createVNode("div", { class: "min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px" }, [
                  createVNode(_component_Sheet, null, {
                    default: withCtx(() => [
                      createVNode(_component_SheetTrigger, { "as-child": "" }, {
                        default: withCtx(() => [
                          createVNode(_component_Button, { variant: "outline" }, {
                            default: withCtx(() => [
                              createTextVNode(" Open ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SheetContent, null, {
                        default: withCtx(() => [
                          createVNode(_component_SheetHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_SheetTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Edit profile")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SheetDescription, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Make changes to your profile here. Click save when you're done. ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "grid gap-4 py-4" }, [
                            createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                              createVNode(_component_Label, {
                                for: "name",
                                class: "text-right"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Name ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Input, {
                                id: "name",
                                value: "Pedro Duarte",
                                class: "col-span-3"
                              })
                            ]),
                            createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                              createVNode(_component_Label, {
                                for: "username",
                                class: "text-right"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Username ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Input, {
                                id: "username",
                                value: "@peduarte",
                                class: "col-span-3"
                              })
                            ])
                          ]),
                          createVNode(_component_SheetFooter, null, {
                            default: withCtx(() => [
                              createVNode(_component_SheetClose, { "as-child": "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_Button, { type: "submit" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Save changes ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
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
              createVNode("div", { class: "min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px" }, [
                createVNode(_component_Sheet, null, {
                  default: withCtx(() => [
                    createVNode(_component_SheetTrigger, { "as-child": "" }, {
                      default: withCtx(() => [
                        createVNode(_component_Button, { variant: "outline" }, {
                          default: withCtx(() => [
                            createTextVNode(" Open ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_SheetContent, null, {
                      default: withCtx(() => [
                        createVNode(_component_SheetHeader, null, {
                          default: withCtx(() => [
                            createVNode(_component_SheetTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Edit profile")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SheetDescription, null, {
                              default: withCtx(() => [
                                createTextVNode(" Make changes to your profile here. Click save when you're done. ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "grid gap-4 py-4" }, [
                          createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                            createVNode(_component_Label, {
                              for: "name",
                              class: "text-right"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Name ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Input, {
                              id: "name",
                              value: "Pedro Duarte",
                              class: "col-span-3"
                            })
                          ]),
                          createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                            createVNode(_component_Label, {
                              for: "username",
                              class: "text-right"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Username ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Input, {
                              id: "username",
                              value: "@peduarte",
                              class: "col-span-3"
                            })
                          ])
                        ]),
                        createVNode(_component_SheetFooter, null, {
                          default: withCtx(() => [
                            createVNode(_component_SheetClose, { "as-child": "" }, {
                              default: withCtx(() => [
                                createVNode(_component_Button, { type: "submit" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Save changes ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components/sheet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sheet = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { sheet as default };
//# sourceMappingURL=sheet-CZdILTYr.mjs.map
