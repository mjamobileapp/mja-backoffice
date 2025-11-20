import { a as _sfc_main$2 } from './server.mjs';
import { _ as __nuxt_component_3 } from './nuxt-link-DXkcJ9KT.mjs';
import { _ as _sfc_main$5, a as _sfc_main$1, b as _sfc_main$3, c as _sfc_main$4 } from './CardTitle-C5Xy3z8Z.mjs';
import { _ as _sfc_main$d, a as _sfc_main$6, b as _sfc_main$b, k as _sfc_main$8, d as _sfc_main$5$1, m as _sfc_main$a, c as _sfc_main$9, j as _sfc_main$4$1, l as _sfc_main$c } from './DropdownMenuTrigger-7ca149wI.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import 'lucide-vue-next';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dropdown-menu",
  __ssrInlineRender: true,
  setup(__props) {
    const showStatusBar = ref(true);
    const showActivityBar = ref(false);
    const showPanel = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_3;
      const _component_Card = _sfc_main$5;
      const _component_CardHeader = _sfc_main$1;
      const _component_CardTitle = _sfc_main$3;
      const _component_CardContent = _sfc_main$4;
      const _component_DropdownMenu = _sfc_main$d;
      const _component_DropdownMenuTrigger = _sfc_main$6;
      const _component_DropdownMenuContent = _sfc_main$b;
      const _component_DropdownMenuLabel = _sfc_main$8;
      const _component_DropdownMenuSeparator = _sfc_main$5$1;
      const _component_DropdownMenuGroup = _sfc_main$a;
      const _component_DropdownMenuItem = _sfc_main$9;
      const _component_DropdownMenuShortcut = _sfc_main$4$1;
      const _component_DropdownMenuCheckboxItem = _sfc_main$c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}><div class="grid gap-2"><div><h2 class="text-2xl font-bold tracking-tight"> Dropdown Menu </h2><p class="text-muted-foreground"> Displays a menu to the user \u2014 such as a set of actions or functions \u2014 triggered by a button. </p></div><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_Button, {
        size: "xs",
        variant: "outline",
        class: "text-xs",
        "as-child": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "https://www.shadcn-vue.com/docs/components/dropdown-menu",
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
                to: "https://www.shadcn-vue.com/docs/components/dropdown-menu",
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
              to: "https://www.radix-vue.com/components/dropdown-menu",
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
                to: "https://www.radix-vue.com/components/dropdown-menu",
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
                  _push3(ssrRenderComponent(_component_DropdownMenu, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DropdownMenuTrigger, { "as-child": "" }, {
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
                        _push4(ssrRenderComponent(_component_DropdownMenuContent, { class: "w-56" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_DropdownMenuLabel, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`My Account`);
                                  } else {
                                    return [
                                      createTextVNode("My Account")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_DropdownMenuSeparator, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_DropdownMenuGroup, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_DropdownMenuItem, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<span${_scopeId6}>Profile</span>`);
                                          _push7(ssrRenderComponent(_component_DropdownMenuShortcut, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`\u21E7\u2318P`);
                                              } else {
                                                return [
                                                  createTextVNode("\u21E7\u2318P")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode("span", null, "Profile"),
                                            createVNode(_component_DropdownMenuShortcut, null, {
                                              default: withCtx(() => [
                                                createTextVNode("\u21E7\u2318P")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_DropdownMenuItem, { disabled: "" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<span${_scopeId6}>Billing</span>`);
                                          _push7(ssrRenderComponent(_component_DropdownMenuShortcut, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`\u2318B`);
                                              } else {
                                                return [
                                                  createTextVNode("\u2318B")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode("span", null, "Billing"),
                                            createVNode(_component_DropdownMenuShortcut, null, {
                                              default: withCtx(() => [
                                                createTextVNode("\u2318B")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_DropdownMenuItem, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<span${_scopeId6}>Settings</span>`);
                                          _push7(ssrRenderComponent(_component_DropdownMenuShortcut, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`\u2318S`);
                                              } else {
                                                return [
                                                  createTextVNode("\u2318S")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode("span", null, "Settings"),
                                            createVNode(_component_DropdownMenuShortcut, null, {
                                              default: withCtx(() => [
                                                createTextVNode("\u2318S")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_DropdownMenuItem, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<span${_scopeId6}>Keyboard shortcuts</span>`);
                                          _push7(ssrRenderComponent(_component_DropdownMenuShortcut, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`\u2318K`);
                                              } else {
                                                return [
                                                  createTextVNode("\u2318K")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode("span", null, "Keyboard shortcuts"),
                                            createVNode(_component_DropdownMenuShortcut, null, {
                                              default: withCtx(() => [
                                                createTextVNode("\u2318K")
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
                                      createVNode(_component_DropdownMenuItem, null, {
                                        default: withCtx(() => [
                                          createVNode("span", null, "Profile"),
                                          createVNode(_component_DropdownMenuShortcut, null, {
                                            default: withCtx(() => [
                                              createTextVNode("\u21E7\u2318P")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_DropdownMenuItem, { disabled: "" }, {
                                        default: withCtx(() => [
                                          createVNode("span", null, "Billing"),
                                          createVNode(_component_DropdownMenuShortcut, null, {
                                            default: withCtx(() => [
                                              createTextVNode("\u2318B")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_DropdownMenuItem, null, {
                                        default: withCtx(() => [
                                          createVNode("span", null, "Settings"),
                                          createVNode(_component_DropdownMenuShortcut, null, {
                                            default: withCtx(() => [
                                              createTextVNode("\u2318S")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_DropdownMenuItem, null, {
                                        default: withCtx(() => [
                                          createVNode("span", null, "Keyboard shortcuts"),
                                          createVNode(_component_DropdownMenuShortcut, null, {
                                            default: withCtx(() => [
                                              createTextVNode("\u2318K")
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
                              _push5(ssrRenderComponent(_component_DropdownMenuSeparator, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_DropdownMenuItem, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span${_scopeId5}>Log out</span>`);
                                    _push6(ssrRenderComponent(_component_DropdownMenuShortcut, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u21E7\u2318Q`);
                                        } else {
                                          return [
                                            createTextVNode("\u21E7\u2318Q")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("span", null, "Log out"),
                                      createVNode(_component_DropdownMenuShortcut, null, {
                                        default: withCtx(() => [
                                          createTextVNode("\u21E7\u2318Q")
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
                                createVNode(_component_DropdownMenuLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("My Account")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_DropdownMenuSeparator),
                                createVNode(_component_DropdownMenuGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_DropdownMenuItem, null, {
                                      default: withCtx(() => [
                                        createVNode("span", null, "Profile"),
                                        createVNode(_component_DropdownMenuShortcut, null, {
                                          default: withCtx(() => [
                                            createTextVNode("\u21E7\u2318P")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_DropdownMenuItem, { disabled: "" }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, "Billing"),
                                        createVNode(_component_DropdownMenuShortcut, null, {
                                          default: withCtx(() => [
                                            createTextVNode("\u2318B")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_DropdownMenuItem, null, {
                                      default: withCtx(() => [
                                        createVNode("span", null, "Settings"),
                                        createVNode(_component_DropdownMenuShortcut, null, {
                                          default: withCtx(() => [
                                            createTextVNode("\u2318S")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_DropdownMenuItem, null, {
                                      default: withCtx(() => [
                                        createVNode("span", null, "Keyboard shortcuts"),
                                        createVNode(_component_DropdownMenuShortcut, null, {
                                          default: withCtx(() => [
                                            createTextVNode("\u2318K")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_DropdownMenuSeparator),
                                createVNode(_component_DropdownMenuItem, null, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "Log out"),
                                    createVNode(_component_DropdownMenuShortcut, null, {
                                      default: withCtx(() => [
                                        createTextVNode("\u21E7\u2318Q")
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
                          createVNode(_component_DropdownMenuTrigger, { "as-child": "" }, {
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
                          createVNode(_component_DropdownMenuContent, { class: "w-56" }, {
                            default: withCtx(() => [
                              createVNode(_component_DropdownMenuLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("My Account")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_DropdownMenuSeparator),
                              createVNode(_component_DropdownMenuGroup, null, {
                                default: withCtx(() => [
                                  createVNode(_component_DropdownMenuItem, null, {
                                    default: withCtx(() => [
                                      createVNode("span", null, "Profile"),
                                      createVNode(_component_DropdownMenuShortcut, null, {
                                        default: withCtx(() => [
                                          createTextVNode("\u21E7\u2318P")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_DropdownMenuItem, { disabled: "" }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, "Billing"),
                                      createVNode(_component_DropdownMenuShortcut, null, {
                                        default: withCtx(() => [
                                          createTextVNode("\u2318B")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_DropdownMenuItem, null, {
                                    default: withCtx(() => [
                                      createVNode("span", null, "Settings"),
                                      createVNode(_component_DropdownMenuShortcut, null, {
                                        default: withCtx(() => [
                                          createTextVNode("\u2318S")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_DropdownMenuItem, null, {
                                    default: withCtx(() => [
                                      createVNode("span", null, "Keyboard shortcuts"),
                                      createVNode(_component_DropdownMenuShortcut, null, {
                                        default: withCtx(() => [
                                          createTextVNode("\u2318K")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_DropdownMenuSeparator),
                              createVNode(_component_DropdownMenuItem, null, {
                                default: withCtx(() => [
                                  createVNode("span", null, "Log out"),
                                  createVNode(_component_DropdownMenuShortcut, null, {
                                    default: withCtx(() => [
                                      createTextVNode("\u21E7\u2318Q")
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
                      createVNode(_component_DropdownMenu, null, {
                        default: withCtx(() => [
                          createVNode(_component_DropdownMenuTrigger, { "as-child": "" }, {
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
                          createVNode(_component_DropdownMenuContent, { class: "w-56" }, {
                            default: withCtx(() => [
                              createVNode(_component_DropdownMenuLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("My Account")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_DropdownMenuSeparator),
                              createVNode(_component_DropdownMenuGroup, null, {
                                default: withCtx(() => [
                                  createVNode(_component_DropdownMenuItem, null, {
                                    default: withCtx(() => [
                                      createVNode("span", null, "Profile"),
                                      createVNode(_component_DropdownMenuShortcut, null, {
                                        default: withCtx(() => [
                                          createTextVNode("\u21E7\u2318P")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_DropdownMenuItem, { disabled: "" }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, "Billing"),
                                      createVNode(_component_DropdownMenuShortcut, null, {
                                        default: withCtx(() => [
                                          createTextVNode("\u2318B")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_DropdownMenuItem, null, {
                                    default: withCtx(() => [
                                      createVNode("span", null, "Settings"),
                                      createVNode(_component_DropdownMenuShortcut, null, {
                                        default: withCtx(() => [
                                          createTextVNode("\u2318S")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_DropdownMenuItem, null, {
                                    default: withCtx(() => [
                                      createVNode("span", null, "Keyboard shortcuts"),
                                      createVNode(_component_DropdownMenuShortcut, null, {
                                        default: withCtx(() => [
                                          createTextVNode("\u2318K")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_DropdownMenuSeparator),
                              createVNode(_component_DropdownMenuItem, null, {
                                default: withCtx(() => [
                                  createVNode("span", null, "Log out"),
                                  createVNode(_component_DropdownMenuShortcut, null, {
                                    default: withCtx(() => [
                                      createTextVNode("\u21E7\u2318Q")
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
                    createVNode(_component_DropdownMenu, null, {
                      default: withCtx(() => [
                        createVNode(_component_DropdownMenuTrigger, { "as-child": "" }, {
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
                        createVNode(_component_DropdownMenuContent, { class: "w-56" }, {
                          default: withCtx(() => [
                            createVNode(_component_DropdownMenuLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("My Account")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_DropdownMenuSeparator),
                            createVNode(_component_DropdownMenuGroup, null, {
                              default: withCtx(() => [
                                createVNode(_component_DropdownMenuItem, null, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "Profile"),
                                    createVNode(_component_DropdownMenuShortcut, null, {
                                      default: withCtx(() => [
                                        createTextVNode("\u21E7\u2318P")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_DropdownMenuItem, { disabled: "" }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "Billing"),
                                    createVNode(_component_DropdownMenuShortcut, null, {
                                      default: withCtx(() => [
                                        createTextVNode("\u2318B")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_DropdownMenuItem, null, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "Settings"),
                                    createVNode(_component_DropdownMenuShortcut, null, {
                                      default: withCtx(() => [
                                        createTextVNode("\u2318S")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_DropdownMenuItem, null, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "Keyboard shortcuts"),
                                    createVNode(_component_DropdownMenuShortcut, null, {
                                      default: withCtx(() => [
                                        createTextVNode("\u2318K")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_DropdownMenuSeparator),
                            createVNode(_component_DropdownMenuItem, null, {
                              default: withCtx(() => [
                                createVNode("span", null, "Log out"),
                                createVNode(_component_DropdownMenuShortcut, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u21E7\u2318Q")
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
      _push(ssrRenderComponent(_component_Card, { class: "w-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`With Checkbox`);
                      } else {
                        return [
                          createTextVNode("With Checkbox")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("With Checkbox")
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
                  _push3(ssrRenderComponent(_component_DropdownMenu, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DropdownMenuTrigger, { "as-child": "" }, {
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
                        _push4(ssrRenderComponent(_component_DropdownMenuContent, { class: "w-56" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_DropdownMenuLabel, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Appearance`);
                                  } else {
                                    return [
                                      createTextVNode("Appearance")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_DropdownMenuSeparator, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_DropdownMenuCheckboxItem, {
                                checked: unref(showStatusBar),
                                "onUpdate:checked": ($event) => isRef(showStatusBar) ? showStatusBar.value = $event : null
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Status Bar `);
                                  } else {
                                    return [
                                      createTextVNode(" Status Bar ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_DropdownMenuCheckboxItem, {
                                checked: unref(showActivityBar),
                                "onUpdate:checked": ($event) => isRef(showActivityBar) ? showActivityBar.value = $event : null,
                                disabled: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Activity Bar `);
                                  } else {
                                    return [
                                      createTextVNode(" Activity Bar ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_DropdownMenuCheckboxItem, {
                                checked: unref(showPanel),
                                "onUpdate:checked": ($event) => isRef(showPanel) ? showPanel.value = $event : null
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Panel `);
                                  } else {
                                    return [
                                      createTextVNode(" Panel ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_DropdownMenuLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Appearance")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_DropdownMenuSeparator),
                                createVNode(_component_DropdownMenuCheckboxItem, {
                                  checked: unref(showStatusBar),
                                  "onUpdate:checked": ($event) => isRef(showStatusBar) ? showStatusBar.value = $event : null
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Status Bar ")
                                  ]),
                                  _: 1
                                }, 8, ["checked", "onUpdate:checked"]),
                                createVNode(_component_DropdownMenuCheckboxItem, {
                                  checked: unref(showActivityBar),
                                  "onUpdate:checked": ($event) => isRef(showActivityBar) ? showActivityBar.value = $event : null,
                                  disabled: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Activity Bar ")
                                  ]),
                                  _: 1
                                }, 8, ["checked", "onUpdate:checked"]),
                                createVNode(_component_DropdownMenuCheckboxItem, {
                                  checked: unref(showPanel),
                                  "onUpdate:checked": ($event) => isRef(showPanel) ? showPanel.value = $event : null
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Panel ")
                                  ]),
                                  _: 1
                                }, 8, ["checked", "onUpdate:checked"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DropdownMenuTrigger, { "as-child": "" }, {
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
                          createVNode(_component_DropdownMenuContent, { class: "w-56" }, {
                            default: withCtx(() => [
                              createVNode(_component_DropdownMenuLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Appearance")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_DropdownMenuSeparator),
                              createVNode(_component_DropdownMenuCheckboxItem, {
                                checked: unref(showStatusBar),
                                "onUpdate:checked": ($event) => isRef(showStatusBar) ? showStatusBar.value = $event : null
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Status Bar ")
                                ]),
                                _: 1
                              }, 8, ["checked", "onUpdate:checked"]),
                              createVNode(_component_DropdownMenuCheckboxItem, {
                                checked: unref(showActivityBar),
                                "onUpdate:checked": ($event) => isRef(showActivityBar) ? showActivityBar.value = $event : null,
                                disabled: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Activity Bar ")
                                ]),
                                _: 1
                              }, 8, ["checked", "onUpdate:checked"]),
                              createVNode(_component_DropdownMenuCheckboxItem, {
                                checked: unref(showPanel),
                                "onUpdate:checked": ($event) => isRef(showPanel) ? showPanel.value = $event : null
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Panel ")
                                ]),
                                _: 1
                              }, 8, ["checked", "onUpdate:checked"])
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
                      createVNode(_component_DropdownMenu, null, {
                        default: withCtx(() => [
                          createVNode(_component_DropdownMenuTrigger, { "as-child": "" }, {
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
                          createVNode(_component_DropdownMenuContent, { class: "w-56" }, {
                            default: withCtx(() => [
                              createVNode(_component_DropdownMenuLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Appearance")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_DropdownMenuSeparator),
                              createVNode(_component_DropdownMenuCheckboxItem, {
                                checked: unref(showStatusBar),
                                "onUpdate:checked": ($event) => isRef(showStatusBar) ? showStatusBar.value = $event : null
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Status Bar ")
                                ]),
                                _: 1
                              }, 8, ["checked", "onUpdate:checked"]),
                              createVNode(_component_DropdownMenuCheckboxItem, {
                                checked: unref(showActivityBar),
                                "onUpdate:checked": ($event) => isRef(showActivityBar) ? showActivityBar.value = $event : null,
                                disabled: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Activity Bar ")
                                ]),
                                _: 1
                              }, 8, ["checked", "onUpdate:checked"]),
                              createVNode(_component_DropdownMenuCheckboxItem, {
                                checked: unref(showPanel),
                                "onUpdate:checked": ($event) => isRef(showPanel) ? showPanel.value = $event : null
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Panel ")
                                ]),
                                _: 1
                              }, 8, ["checked", "onUpdate:checked"])
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
                      createTextVNode("With Checkbox")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px" }, [
                    createVNode(_component_DropdownMenu, null, {
                      default: withCtx(() => [
                        createVNode(_component_DropdownMenuTrigger, { "as-child": "" }, {
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
                        createVNode(_component_DropdownMenuContent, { class: "w-56" }, {
                          default: withCtx(() => [
                            createVNode(_component_DropdownMenuLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("Appearance")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_DropdownMenuSeparator),
                            createVNode(_component_DropdownMenuCheckboxItem, {
                              checked: unref(showStatusBar),
                              "onUpdate:checked": ($event) => isRef(showStatusBar) ? showStatusBar.value = $event : null
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Status Bar ")
                              ]),
                              _: 1
                            }, 8, ["checked", "onUpdate:checked"]),
                            createVNode(_component_DropdownMenuCheckboxItem, {
                              checked: unref(showActivityBar),
                              "onUpdate:checked": ($event) => isRef(showActivityBar) ? showActivityBar.value = $event : null,
                              disabled: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Activity Bar ")
                              ]),
                              _: 1
                            }, 8, ["checked", "onUpdate:checked"]),
                            createVNode(_component_DropdownMenuCheckboxItem, {
                              checked: unref(showPanel),
                              "onUpdate:checked": ($event) => isRef(showPanel) ? showPanel.value = $event : null
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Panel ")
                              ]),
                              _: 1
                            }, 8, ["checked", "onUpdate:checked"])
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components/dropdown-menu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dropdown-menu-DruJ0z7Z.mjs.map
