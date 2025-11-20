import { a as _sfc_main$2 } from './server.mjs';
import { _ as __nuxt_component_3 } from './nuxt-link-DXkcJ9KT.mjs';
import { _ as _sfc_main$5, a as _sfc_main$1, b as _sfc_main$3, c as _sfc_main$4 } from './CardTitle-C5Xy3z8Z.mjs';
import { _ as _sfc_main$6, a as _sfc_main$1$1 } from './ResizablePanelGroup-Bn-7-wk4.mjs';
import { SplitterPanel } from 'radix-vue';
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
import '@iconify/utils/lib/css/icon';
import 'vue-sonner';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'lucide-vue-next';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Button = _sfc_main$2;
  const _component_NuxtLink = __nuxt_component_3;
  const _component_Card = _sfc_main$5;
  const _component_CardHeader = _sfc_main$1;
  const _component_CardTitle = _sfc_main$3;
  const _component_CardContent = _sfc_main$4;
  const _component_ResizablePanelGroup = _sfc_main$6;
  const _component_ResizablePanel = SplitterPanel;
  const _component_ResizableHandle = _sfc_main$1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}><div class="grid gap-2"><div><h2 class="text-2xl font-bold tracking-tight"> Resizable </h2><p class="text-muted-foreground"> Accessible resizable panel groups and layouts with keyboard support. </p></div><div class="flex gap-2">`);
  _push(ssrRenderComponent(_component_Button, {
    size: "xs",
    variant: "outline",
    class: "text-xs",
    "as-child": ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "https://www.shadcn-vue.com/docs/components/resizable",
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
            to: "https://www.shadcn-vue.com/docs/components/resizable",
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
          to: "https://www.radix-vue.com/components/resizable",
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
            to: "https://www.radix-vue.com/components/resizable",
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
              _push3(ssrRenderComponent(_component_ResizablePanelGroup, {
                id: "demo-group-1",
                direction: "horizontal",
                class: "max-w-md border rounded-lg"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_ResizablePanel, {
                      id: "demo-panel-1",
                      "default-size": 50
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="h-[200px] flex items-center justify-center p-6"${_scopeId4}><span class="font-semibold"${_scopeId4}>One</span></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "h-[200px] flex items-center justify-center p-6" }, [
                              createVNode("span", { class: "font-semibold" }, "One")
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ResizableHandle, { id: "demo-handle-1" }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ResizablePanel, {
                      id: "demo-panel-2",
                      "default-size": 50
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_ResizablePanelGroup, {
                            id: "demo-group-2",
                            direction: "vertical"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_ResizablePanel, {
                                  id: "demo-panel-3",
                                  "default-size": 25
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<div class="h-full flex items-center justify-center p-6"${_scopeId6}><span class="font-semibold"${_scopeId6}>Two</span></div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "h-full flex items-center justify-center p-6" }, [
                                          createVNode("span", { class: "font-semibold" }, "Two")
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_ResizableHandle, { id: "demo-handle-2" }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_ResizablePanel, {
                                  id: "demo-panel-4",
                                  "default-size": 75
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<div class="h-full flex items-center justify-center p-6"${_scopeId6}><span class="font-semibold"${_scopeId6}>Three</span></div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "h-full flex items-center justify-center p-6" }, [
                                          createVNode("span", { class: "font-semibold" }, "Three")
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_ResizablePanel, {
                                    id: "demo-panel-3",
                                    "default-size": 25
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "h-full flex items-center justify-center p-6" }, [
                                        createVNode("span", { class: "font-semibold" }, "Two")
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_ResizableHandle, { id: "demo-handle-2" }),
                                  createVNode(_component_ResizablePanel, {
                                    id: "demo-panel-4",
                                    "default-size": 75
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "h-full flex items-center justify-center p-6" }, [
                                        createVNode("span", { class: "font-semibold" }, "Three")
                                      ])
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
                            createVNode(_component_ResizablePanelGroup, {
                              id: "demo-group-2",
                              direction: "vertical"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ResizablePanel, {
                                  id: "demo-panel-3",
                                  "default-size": 25
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "h-full flex items-center justify-center p-6" }, [
                                      createVNode("span", { class: "font-semibold" }, "Two")
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ResizableHandle, { id: "demo-handle-2" }),
                                createVNode(_component_ResizablePanel, {
                                  id: "demo-panel-4",
                                  "default-size": 75
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "h-full flex items-center justify-center p-6" }, [
                                      createVNode("span", { class: "font-semibold" }, "Three")
                                    ])
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
                      createVNode(_component_ResizablePanel, {
                        id: "demo-panel-1",
                        "default-size": 50
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "h-[200px] flex items-center justify-center p-6" }, [
                            createVNode("span", { class: "font-semibold" }, "One")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ResizableHandle, { id: "demo-handle-1" }),
                      createVNode(_component_ResizablePanel, {
                        id: "demo-panel-2",
                        "default-size": 50
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ResizablePanelGroup, {
                            id: "demo-group-2",
                            direction: "vertical"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ResizablePanel, {
                                id: "demo-panel-3",
                                "default-size": 25
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "h-full flex items-center justify-center p-6" }, [
                                    createVNode("span", { class: "font-semibold" }, "Two")
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ResizableHandle, { id: "demo-handle-2" }),
                              createVNode(_component_ResizablePanel, {
                                id: "demo-panel-4",
                                "default-size": 75
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "h-full flex items-center justify-center p-6" }, [
                                    createVNode("span", { class: "font-semibold" }, "Three")
                                  ])
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
                  createVNode(_component_ResizablePanelGroup, {
                    id: "demo-group-1",
                    direction: "horizontal",
                    class: "max-w-md border rounded-lg"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ResizablePanel, {
                        id: "demo-panel-1",
                        "default-size": 50
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "h-[200px] flex items-center justify-center p-6" }, [
                            createVNode("span", { class: "font-semibold" }, "One")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ResizableHandle, { id: "demo-handle-1" }),
                      createVNode(_component_ResizablePanel, {
                        id: "demo-panel-2",
                        "default-size": 50
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ResizablePanelGroup, {
                            id: "demo-group-2",
                            direction: "vertical"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_ResizablePanel, {
                                id: "demo-panel-3",
                                "default-size": 25
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "h-full flex items-center justify-center p-6" }, [
                                    createVNode("span", { class: "font-semibold" }, "Two")
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ResizableHandle, { id: "demo-handle-2" }),
                              createVNode(_component_ResizablePanel, {
                                id: "demo-panel-4",
                                "default-size": 75
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "h-full flex items-center justify-center p-6" }, [
                                    createVNode("span", { class: "font-semibold" }, "Three")
                                  ])
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
                createVNode(_component_ResizablePanelGroup, {
                  id: "demo-group-1",
                  direction: "horizontal",
                  class: "max-w-md border rounded-lg"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ResizablePanel, {
                      id: "demo-panel-1",
                      "default-size": 50
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "h-[200px] flex items-center justify-center p-6" }, [
                          createVNode("span", { class: "font-semibold" }, "One")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ResizableHandle, { id: "demo-handle-1" }),
                    createVNode(_component_ResizablePanel, {
                      id: "demo-panel-2",
                      "default-size": 50
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ResizablePanelGroup, {
                          id: "demo-group-2",
                          direction: "vertical"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ResizablePanel, {
                              id: "demo-panel-3",
                              "default-size": 25
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "h-full flex items-center justify-center p-6" }, [
                                  createVNode("span", { class: "font-semibold" }, "Two")
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ResizableHandle, { id: "demo-handle-2" }),
                            createVNode(_component_ResizablePanel, {
                              id: "demo-panel-4",
                              "default-size": 75
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "h-full flex items-center justify-center p-6" }, [
                                  createVNode("span", { class: "font-semibold" }, "Three")
                                ])
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
                    _push4(`Vertical`);
                  } else {
                    return [
                      createTextVNode("Vertical")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_CardTitle, null, {
                  default: withCtx(() => [
                    createTextVNode("Vertical")
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
              _push3(ssrRenderComponent(_component_ResizablePanelGroup, {
                id: "vertical-demo-group-1",
                direction: "vertical",
                class: "max-w-md min-h-[200px] border rounded-lg"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_ResizablePanel, {
                      id: "vertical-demo-panel-1",
                      "default-size": 25
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="h-full flex items-center justify-center p-6"${_scopeId4}><span class="font-semibold"${_scopeId4}>Header</span></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "h-full flex items-center justify-center p-6" }, [
                              createVNode("span", { class: "font-semibold" }, "Header")
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ResizableHandle, { id: "vertical-demo-handle-1" }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ResizablePanel, {
                      id: "vertical-demo-panel-2",
                      "default-size": 75
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="h-full flex items-center justify-center p-6"${_scopeId4}><span class="font-semibold"${_scopeId4}>Content</span></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "h-full flex items-center justify-center p-6" }, [
                              createVNode("span", { class: "font-semibold" }, "Content")
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ResizablePanel, {
                        id: "vertical-demo-panel-1",
                        "default-size": 25
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "h-full flex items-center justify-center p-6" }, [
                            createVNode("span", { class: "font-semibold" }, "Header")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ResizableHandle, { id: "vertical-demo-handle-1" }),
                      createVNode(_component_ResizablePanel, {
                        id: "vertical-demo-panel-2",
                        "default-size": 75
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "h-full flex items-center justify-center p-6" }, [
                            createVNode("span", { class: "font-semibold" }, "Content")
                          ])
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
                  createVNode(_component_ResizablePanelGroup, {
                    id: "vertical-demo-group-1",
                    direction: "vertical",
                    class: "max-w-md min-h-[200px] border rounded-lg"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ResizablePanel, {
                        id: "vertical-demo-panel-1",
                        "default-size": 25
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "h-full flex items-center justify-center p-6" }, [
                            createVNode("span", { class: "font-semibold" }, "Header")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ResizableHandle, { id: "vertical-demo-handle-1" }),
                      createVNode(_component_ResizablePanel, {
                        id: "vertical-demo-panel-2",
                        "default-size": 75
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "h-full flex items-center justify-center p-6" }, [
                            createVNode("span", { class: "font-semibold" }, "Content")
                          ])
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
                  createTextVNode("Vertical")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_CardContent, null, {
            default: withCtx(() => [
              createVNode("div", { class: "min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px" }, [
                createVNode(_component_ResizablePanelGroup, {
                  id: "vertical-demo-group-1",
                  direction: "vertical",
                  class: "max-w-md min-h-[200px] border rounded-lg"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ResizablePanel, {
                      id: "vertical-demo-panel-1",
                      "default-size": 25
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "h-full flex items-center justify-center p-6" }, [
                          createVNode("span", { class: "font-semibold" }, "Header")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ResizableHandle, { id: "vertical-demo-handle-1" }),
                    createVNode(_component_ResizablePanel, {
                      id: "vertical-demo-panel-2",
                      "default-size": 75
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "h-full flex items-center justify-center p-6" }, [
                          createVNode("span", { class: "font-semibold" }, "Content")
                        ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components/resizable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const resizable = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { resizable as default };
//# sourceMappingURL=resizable-Bn20vp7w.mjs.map
