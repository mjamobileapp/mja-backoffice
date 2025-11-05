import { a as _sfc_main$2 } from './server.mjs';
import { _ as __nuxt_component_3 } from './nuxt-link-DXkcJ9KT.mjs';
import { _ as _sfc_main$5, a as _sfc_main$1, b as _sfc_main$3, c as _sfc_main$4 } from './CardTitle-C5Xy3z8Z.mjs';
import { _ as _sfc_main$7, a as _sfc_main$3$1, b as _sfc_main$5$1, c as _sfc_main$4$1, d as _sfc_main$1$1, e as _sfc_main$2$1, f as _sfc_main$6$1, g as _sfc_main$8 } from './BreadcrumbCustom-DihTwpyW.mjs';
import { _ as _sfc_main$d, a as _sfc_main$6, b as _sfc_main$b, c as _sfc_main$9 } from './DropdownMenuTrigger-7ca149wI.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { Slash, ChevronDown } from 'lucide-vue-next';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "breadcrumb",
  __ssrInlineRender: true,
  setup(__props) {
    const breadcrumbLinks = ref([
      {
        title: "Home",
        href: "/"
      },
      {
        title: "Components",
        href: "#"
      },
      {
        title: "Breadcrumb",
        href: "/components/breadcrumb"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_3;
      const _component_Card = _sfc_main$5;
      const _component_CardHeader = _sfc_main$1;
      const _component_CardTitle = _sfc_main$3;
      const _component_CardContent = _sfc_main$4;
      const _component_Breadcrumb = _sfc_main$7;
      const _component_BreadcrumbList = _sfc_main$3$1;
      const _component_BreadcrumbItem = _sfc_main$5$1;
      const _component_BreadcrumbLink = _sfc_main$4$1;
      const _component_BreadcrumbSeparator = _sfc_main$1$1;
      const _component_BreadcrumbPage = _sfc_main$2$1;
      const _component_DropdownMenu = _sfc_main$d;
      const _component_DropdownMenuTrigger = _sfc_main$6;
      const _component_DropdownMenuContent = _sfc_main$b;
      const _component_DropdownMenuItem = _sfc_main$9;
      const _component_BreadcrumbEllipsis = _sfc_main$6$1;
      const _component_BaseBreadcrumbCustom = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}><div class="grid gap-2"><div><h2 class="text-2xl font-bold tracking-tight"> Breadcrumb </h2><p class="text-muted-foreground"> Displays the path to the current resource using a hierarchy of links. </p></div><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_Button, {
        size: "xs",
        variant: "outline",
        class: "text-xs",
        "as-child": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "https://www.shadcn-vue.com/docs/components/breadcrumb",
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
                to: "https://www.shadcn-vue.com/docs/components/breadcrumb",
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
                  _push3(`<div class="h-100px w-full flex items-center justify-center gap-4 overflow-hidden sm:h-200px"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Breadcrumb, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BreadcrumbList, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_BreadcrumbItem, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_BreadcrumbLink, { href: "/" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Home `);
                                        } else {
                                          return [
                                            createTextVNode(" Home ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_BreadcrumbLink, { href: "/" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Home ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_BreadcrumbSeparator, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_BreadcrumbItem, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_BreadcrumbLink, { href: "/components" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Components `);
                                        } else {
                                          return [
                                            createTextVNode(" Components ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_BreadcrumbLink, { href: "/components" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Components ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_BreadcrumbSeparator, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_BreadcrumbItem, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_BreadcrumbPage, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Breadcrumb`);
                                        } else {
                                          return [
                                            createTextVNode("Breadcrumb")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_BreadcrumbPage, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Breadcrumb")
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
                                createVNode(_component_BreadcrumbItem, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_BreadcrumbLink, { href: "/" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Home ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BreadcrumbSeparator),
                                createVNode(_component_BreadcrumbItem, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_BreadcrumbLink, { href: "/components" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Components ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BreadcrumbSeparator),
                                createVNode(_component_BreadcrumbItem, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_BreadcrumbPage, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Breadcrumb")
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
                          createVNode(_component_BreadcrumbList, null, {
                            default: withCtx(() => [
                              createVNode(_component_BreadcrumbItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BreadcrumbLink, { href: "/" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Home ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BreadcrumbSeparator),
                              createVNode(_component_BreadcrumbItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BreadcrumbLink, { href: "/components" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Components ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BreadcrumbSeparator),
                              createVNode(_component_BreadcrumbItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BreadcrumbPage, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Breadcrumb")
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
                    createVNode("div", { class: "h-100px w-full flex items-center justify-center gap-4 overflow-hidden sm:h-200px" }, [
                      createVNode(_component_Breadcrumb, null, {
                        default: withCtx(() => [
                          createVNode(_component_BreadcrumbList, null, {
                            default: withCtx(() => [
                              createVNode(_component_BreadcrumbItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BreadcrumbLink, { href: "/" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Home ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BreadcrumbSeparator),
                              createVNode(_component_BreadcrumbItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BreadcrumbLink, { href: "/components" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Components ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BreadcrumbSeparator),
                              createVNode(_component_BreadcrumbItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BreadcrumbPage, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Breadcrumb")
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
                  createVNode("div", { class: "h-100px w-full flex items-center justify-center gap-4 overflow-hidden sm:h-200px" }, [
                    createVNode(_component_Breadcrumb, null, {
                      default: withCtx(() => [
                        createVNode(_component_BreadcrumbList, null, {
                          default: withCtx(() => [
                            createVNode(_component_BreadcrumbItem, null, {
                              default: withCtx(() => [
                                createVNode(_component_BreadcrumbLink, { href: "/" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Home ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BreadcrumbSeparator),
                            createVNode(_component_BreadcrumbItem, null, {
                              default: withCtx(() => [
                                createVNode(_component_BreadcrumbLink, { href: "/components" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Components ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BreadcrumbSeparator),
                            createVNode(_component_BreadcrumbItem, null, {
                              default: withCtx(() => [
                                createVNode(_component_BreadcrumbPage, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Breadcrumb")
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
                        _push4(`Custom Separator`);
                      } else {
                        return [
                          createTextVNode("Custom Separator")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Custom Separator")
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
                  _push3(ssrRenderComponent(_component_Breadcrumb, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BreadcrumbList, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_BreadcrumbItem, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_BreadcrumbLink, { href: "/" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Home `);
                                        } else {
                                          return [
                                            createTextVNode(" Home ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_BreadcrumbLink, { href: "/" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Home ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_BreadcrumbSeparator, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(Slash), null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(Slash))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_BreadcrumbItem, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_BreadcrumbLink, { href: "/components" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Components `);
                                        } else {
                                          return [
                                            createTextVNode(" Components ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_BreadcrumbLink, { href: "/components" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Components ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_BreadcrumbSeparator, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(Slash), null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(Slash))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_BreadcrumbItem, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_BreadcrumbPage, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Breadcrumb`);
                                        } else {
                                          return [
                                            createTextVNode("Breadcrumb")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_BreadcrumbPage, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Breadcrumb")
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
                                createVNode(_component_BreadcrumbItem, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_BreadcrumbLink, { href: "/" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Home ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BreadcrumbSeparator, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(Slash))
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BreadcrumbItem, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_BreadcrumbLink, { href: "/components" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Components ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BreadcrumbSeparator, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(Slash))
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BreadcrumbItem, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_BreadcrumbPage, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Breadcrumb")
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
                          createVNode(_component_BreadcrumbList, null, {
                            default: withCtx(() => [
                              createVNode(_component_BreadcrumbItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BreadcrumbLink, { href: "/" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Home ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BreadcrumbSeparator, null, {
                                default: withCtx(() => [
                                  createVNode(unref(Slash))
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BreadcrumbItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BreadcrumbLink, { href: "/components" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Components ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BreadcrumbSeparator, null, {
                                default: withCtx(() => [
                                  createVNode(unref(Slash))
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BreadcrumbItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BreadcrumbPage, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Breadcrumb")
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
                    createVNode("div", { class: "h-100px w-full flex items-center justify-center gap-4 overflow-hidden sm:h-200px" }, [
                      createVNode(_component_Breadcrumb, null, {
                        default: withCtx(() => [
                          createVNode(_component_BreadcrumbList, null, {
                            default: withCtx(() => [
                              createVNode(_component_BreadcrumbItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BreadcrumbLink, { href: "/" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Home ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BreadcrumbSeparator, null, {
                                default: withCtx(() => [
                                  createVNode(unref(Slash))
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BreadcrumbItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BreadcrumbLink, { href: "/components" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Components ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BreadcrumbSeparator, null, {
                                default: withCtx(() => [
                                  createVNode(unref(Slash))
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BreadcrumbItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BreadcrumbPage, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Breadcrumb")
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
                      createTextVNode("Custom Separator")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "h-100px w-full flex items-center justify-center gap-4 overflow-hidden sm:h-200px" }, [
                    createVNode(_component_Breadcrumb, null, {
                      default: withCtx(() => [
                        createVNode(_component_BreadcrumbList, null, {
                          default: withCtx(() => [
                            createVNode(_component_BreadcrumbItem, null, {
                              default: withCtx(() => [
                                createVNode(_component_BreadcrumbLink, { href: "/" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Home ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BreadcrumbSeparator, null, {
                              default: withCtx(() => [
                                createVNode(unref(Slash))
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BreadcrumbItem, null, {
                              default: withCtx(() => [
                                createVNode(_component_BreadcrumbLink, { href: "/components" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Components ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BreadcrumbSeparator, null, {
                              default: withCtx(() => [
                                createVNode(unref(Slash))
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BreadcrumbItem, null, {
                              default: withCtx(() => [
                                createVNode(_component_BreadcrumbPage, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Breadcrumb")
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
                        _push4(`Dropdown`);
                      } else {
                        return [
                          createTextVNode("Dropdown")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Dropdown")
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
                  _push3(ssrRenderComponent(_component_Breadcrumb, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BreadcrumbList, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_BreadcrumbItem, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_BreadcrumbLink, { href: "/" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Home `);
                                        } else {
                                          return [
                                            createTextVNode(" Home ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_BreadcrumbLink, { href: "/" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Home ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_BreadcrumbSeparator, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(Slash), null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(Slash))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_BreadcrumbItem, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_DropdownMenu, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_DropdownMenuTrigger, { class: "flex items-center gap-1" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Components `);
                                                _push8(ssrRenderComponent(unref(ChevronDown), { class: "h-4 w-4" }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createTextVNode(" Components "),
                                                  createVNode(unref(ChevronDown), { class: "h-4 w-4" })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_DropdownMenuContent, { align: "start" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_DropdownMenuItem, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Documentation`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Documentation")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_DropdownMenuItem, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Themes`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Themes")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_DropdownMenuItem, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`GitHub`);
                                                    } else {
                                                      return [
                                                        createTextVNode("GitHub")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_DropdownMenuItem, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Documentation")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_DropdownMenuItem, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Themes")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_DropdownMenuItem, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("GitHub")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_DropdownMenuTrigger, { class: "flex items-center gap-1" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Components "),
                                                createVNode(unref(ChevronDown), { class: "h-4 w-4" })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_DropdownMenuContent, { align: "start" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_DropdownMenuItem, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Documentation")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_DropdownMenuItem, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Themes")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_DropdownMenuItem, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("GitHub")
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_DropdownMenu, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_DropdownMenuTrigger, { class: "flex items-center gap-1" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Components "),
                                              createVNode(unref(ChevronDown), { class: "h-4 w-4" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_DropdownMenuContent, { align: "start" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_DropdownMenuItem, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Documentation")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_DropdownMenuItem, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Themes")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_DropdownMenuItem, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("GitHub")
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_BreadcrumbSeparator, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(Slash), null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(Slash))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_BreadcrumbItem, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_BreadcrumbPage, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Breadcrumb`);
                                        } else {
                                          return [
                                            createTextVNode("Breadcrumb")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_BreadcrumbPage, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Breadcrumb")
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
                                createVNode(_component_BreadcrumbItem, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_BreadcrumbLink, { href: "/" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Home ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BreadcrumbSeparator, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(Slash))
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BreadcrumbItem, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_DropdownMenu, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_DropdownMenuTrigger, { class: "flex items-center gap-1" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Components "),
                                            createVNode(unref(ChevronDown), { class: "h-4 w-4" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_DropdownMenuContent, { align: "start" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_DropdownMenuItem, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Documentation")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_DropdownMenuItem, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Themes")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_DropdownMenuItem, null, {
                                              default: withCtx(() => [
                                                createTextVNode("GitHub")
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
                                }),
                                createVNode(_component_BreadcrumbSeparator, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(Slash))
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BreadcrumbItem, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_BreadcrumbPage, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Breadcrumb")
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
                          createVNode(_component_BreadcrumbList, null, {
                            default: withCtx(() => [
                              createVNode(_component_BreadcrumbItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BreadcrumbLink, { href: "/" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Home ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BreadcrumbSeparator, null, {
                                default: withCtx(() => [
                                  createVNode(unref(Slash))
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BreadcrumbItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_DropdownMenu, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_DropdownMenuTrigger, { class: "flex items-center gap-1" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Components "),
                                          createVNode(unref(ChevronDown), { class: "h-4 w-4" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_DropdownMenuContent, { align: "start" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_DropdownMenuItem, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Documentation")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_DropdownMenuItem, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Themes")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_DropdownMenuItem, null, {
                                            default: withCtx(() => [
                                              createTextVNode("GitHub")
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
                              }),
                              createVNode(_component_BreadcrumbSeparator, null, {
                                default: withCtx(() => [
                                  createVNode(unref(Slash))
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BreadcrumbItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BreadcrumbPage, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Breadcrumb")
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
                    createVNode("div", { class: "h-100px w-full flex items-center justify-center gap-4 overflow-hidden sm:h-200px" }, [
                      createVNode(_component_Breadcrumb, null, {
                        default: withCtx(() => [
                          createVNode(_component_BreadcrumbList, null, {
                            default: withCtx(() => [
                              createVNode(_component_BreadcrumbItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BreadcrumbLink, { href: "/" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Home ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BreadcrumbSeparator, null, {
                                default: withCtx(() => [
                                  createVNode(unref(Slash))
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BreadcrumbItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_DropdownMenu, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_DropdownMenuTrigger, { class: "flex items-center gap-1" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Components "),
                                          createVNode(unref(ChevronDown), { class: "h-4 w-4" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_DropdownMenuContent, { align: "start" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_DropdownMenuItem, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Documentation")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_DropdownMenuItem, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Themes")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_DropdownMenuItem, null, {
                                            default: withCtx(() => [
                                              createTextVNode("GitHub")
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
                              }),
                              createVNode(_component_BreadcrumbSeparator, null, {
                                default: withCtx(() => [
                                  createVNode(unref(Slash))
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BreadcrumbItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BreadcrumbPage, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Breadcrumb")
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
                      createTextVNode("Dropdown")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "h-100px w-full flex items-center justify-center gap-4 overflow-hidden sm:h-200px" }, [
                    createVNode(_component_Breadcrumb, null, {
                      default: withCtx(() => [
                        createVNode(_component_BreadcrumbList, null, {
                          default: withCtx(() => [
                            createVNode(_component_BreadcrumbItem, null, {
                              default: withCtx(() => [
                                createVNode(_component_BreadcrumbLink, { href: "/" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Home ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BreadcrumbSeparator, null, {
                              default: withCtx(() => [
                                createVNode(unref(Slash))
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BreadcrumbItem, null, {
                              default: withCtx(() => [
                                createVNode(_component_DropdownMenu, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_DropdownMenuTrigger, { class: "flex items-center gap-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Components "),
                                        createVNode(unref(ChevronDown), { class: "h-4 w-4" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_DropdownMenuContent, { align: "start" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_DropdownMenuItem, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Documentation")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_DropdownMenuItem, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Themes")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_DropdownMenuItem, null, {
                                          default: withCtx(() => [
                                            createTextVNode("GitHub")
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
                            }),
                            createVNode(_component_BreadcrumbSeparator, null, {
                              default: withCtx(() => [
                                createVNode(unref(Slash))
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BreadcrumbItem, null, {
                              default: withCtx(() => [
                                createVNode(_component_BreadcrumbPage, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Breadcrumb")
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
                        _push4(`Collapsed`);
                      } else {
                        return [
                          createTextVNode("Collapsed")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Collapsed")
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
                  _push3(ssrRenderComponent(_component_Breadcrumb, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BreadcrumbList, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_BreadcrumbItem, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_BreadcrumbLink, { "as-child": "" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<a href="/"${_scopeId6}> Home </a>`);
                                        } else {
                                          return [
                                            createVNode("a", { href: "/" }, " Home ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_BreadcrumbLink, { "as-child": "" }, {
                                        default: withCtx(() => [
                                          createVNode("a", { href: "/" }, " Home ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_BreadcrumbSeparator, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_BreadcrumbItem, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_BreadcrumbEllipsis, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_BreadcrumbEllipsis)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_BreadcrumbSeparator, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_BreadcrumbItem, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_BreadcrumbLink, { "as-child": "" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_NuxtLink, { to: "/components" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Components `);
                                              } else {
                                                return [
                                                  createTextVNode(" Components ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_NuxtLink, { to: "/components" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Components ")
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
                                      createVNode(_component_BreadcrumbLink, { "as-child": "" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_NuxtLink, { to: "/components" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Components ")
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
                              _push5(ssrRenderComponent(_component_BreadcrumbSeparator, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_BreadcrumbItem, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_BreadcrumbPage, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Breadcrumb`);
                                        } else {
                                          return [
                                            createTextVNode("Breadcrumb")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_BreadcrumbPage, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Breadcrumb")
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
                                createVNode(_component_BreadcrumbItem, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_BreadcrumbLink, { "as-child": "" }, {
                                      default: withCtx(() => [
                                        createVNode("a", { href: "/" }, " Home ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BreadcrumbSeparator),
                                createVNode(_component_BreadcrumbItem, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_BreadcrumbEllipsis)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BreadcrumbSeparator),
                                createVNode(_component_BreadcrumbItem, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_BreadcrumbLink, { "as-child": "" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_NuxtLink, { to: "/components" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Components ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BreadcrumbSeparator),
                                createVNode(_component_BreadcrumbItem, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_BreadcrumbPage, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Breadcrumb")
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
                          createVNode(_component_BreadcrumbList, null, {
                            default: withCtx(() => [
                              createVNode(_component_BreadcrumbItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BreadcrumbLink, { "as-child": "" }, {
                                    default: withCtx(() => [
                                      createVNode("a", { href: "/" }, " Home ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BreadcrumbSeparator),
                              createVNode(_component_BreadcrumbItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BreadcrumbEllipsis)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BreadcrumbSeparator),
                              createVNode(_component_BreadcrumbItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BreadcrumbLink, { "as-child": "" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_NuxtLink, { to: "/components" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Components ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BreadcrumbSeparator),
                              createVNode(_component_BreadcrumbItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BreadcrumbPage, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Breadcrumb")
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
                    createVNode("div", { class: "h-100px w-full flex items-center justify-center gap-4 overflow-hidden sm:h-200px" }, [
                      createVNode(_component_Breadcrumb, null, {
                        default: withCtx(() => [
                          createVNode(_component_BreadcrumbList, null, {
                            default: withCtx(() => [
                              createVNode(_component_BreadcrumbItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BreadcrumbLink, { "as-child": "" }, {
                                    default: withCtx(() => [
                                      createVNode("a", { href: "/" }, " Home ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BreadcrumbSeparator),
                              createVNode(_component_BreadcrumbItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BreadcrumbEllipsis)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BreadcrumbSeparator),
                              createVNode(_component_BreadcrumbItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BreadcrumbLink, { "as-child": "" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_NuxtLink, { to: "/components" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Components ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BreadcrumbSeparator),
                              createVNode(_component_BreadcrumbItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BreadcrumbPage, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Breadcrumb")
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
                      createTextVNode("Collapsed")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "h-100px w-full flex items-center justify-center gap-4 overflow-hidden sm:h-200px" }, [
                    createVNode(_component_Breadcrumb, null, {
                      default: withCtx(() => [
                        createVNode(_component_BreadcrumbList, null, {
                          default: withCtx(() => [
                            createVNode(_component_BreadcrumbItem, null, {
                              default: withCtx(() => [
                                createVNode(_component_BreadcrumbLink, { "as-child": "" }, {
                                  default: withCtx(() => [
                                    createVNode("a", { href: "/" }, " Home ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BreadcrumbSeparator),
                            createVNode(_component_BreadcrumbItem, null, {
                              default: withCtx(() => [
                                createVNode(_component_BreadcrumbEllipsis)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BreadcrumbSeparator),
                            createVNode(_component_BreadcrumbItem, null, {
                              default: withCtx(() => [
                                createVNode(_component_BreadcrumbLink, { "as-child": "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_NuxtLink, { to: "/components" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Components ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BreadcrumbSeparator),
                            createVNode(_component_BreadcrumbItem, null, {
                              default: withCtx(() => [
                                createVNode(_component_BreadcrumbPage, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Breadcrumb")
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
                        _push4(`Breadcrumb Custom`);
                      } else {
                        return [
                          createTextVNode("Breadcrumb Custom")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Breadcrumb Custom")
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
                  _push3(ssrRenderComponent(_component_BaseBreadcrumbCustom, { links: unref(breadcrumbLinks) }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "h-100px w-full flex items-center justify-center gap-4 overflow-hidden sm:h-200px" }, [
                      createVNode(_component_BaseBreadcrumbCustom, { links: unref(breadcrumbLinks) }, null, 8, ["links"])
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
                      createTextVNode("Breadcrumb Custom")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "h-100px w-full flex items-center justify-center gap-4 overflow-hidden sm:h-200px" }, [
                    createVNode(_component_BaseBreadcrumbCustom, { links: unref(breadcrumbLinks) }, null, 8, ["links"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components/breadcrumb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=breadcrumb-CrcvXDD4.mjs.map
