import { a as _sfc_main$2$1, c as cn, _ as __nuxt_component_5 } from './server.mjs';
import { _ as __nuxt_component_3 } from './nuxt-link-DXkcJ9KT.mjs';
import { _ as _sfc_main$5$1, a as _sfc_main$1$1, b as _sfc_main$6, c as _sfc_main$4$1 } from './CardTitle-C5Xy3z8Z.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, defineComponent, toDisplayString, createBlock, openBlock, Fragment, renderList, computed, unref, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { PaginationRoot, PaginationList, PaginationListItem, PaginationFirst, PaginationPrev, PaginationEllipsis, PaginationNext, PaginationLast } from 'radix-vue';
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

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "PaginationEllipsis",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_5;
      _push(ssrRenderComponent(unref(PaginationEllipsis), mergeProps(delegatedProps.value, {
        class: unref(cn)("w-9 h-9 flex items-center justify-center", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(_component_Icon, { name: "i-radix-icons-dots-horizontal" }, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(_component_Icon, { name: "i-radix-icons-dots-horizontal" })
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/pagination/PaginationEllipsis.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "PaginationFirst",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, default: true },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_5;
      _push(ssrRenderComponent(unref(PaginationFirst), mergeProps(delegatedProps.value, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$2$1), {
              class: unref(cn)("w-9 h-9 p-0", props.class),
              variant: "outline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                    _push3(ssrRenderComponent(_component_Icon, { name: "i-radix-icons-double-arrow-left" }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", {}, () => [
                      createVNode(_component_Icon, { name: "i-radix-icons-double-arrow-left" })
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$2$1), {
                class: unref(cn)("w-9 h-9 p-0", props.class),
                variant: "outline"
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {}, () => [
                    createVNode(_component_Icon, { name: "i-radix-icons-double-arrow-left" })
                  ])
                ]),
                _: 3
              }, 8, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/pagination/PaginationFirst.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PaginationLast",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, default: true },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_5;
      _push(ssrRenderComponent(unref(PaginationLast), mergeProps(delegatedProps.value, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$2$1), {
              class: unref(cn)("w-9 h-9 p-0", props.class),
              variant: "outline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                    _push3(ssrRenderComponent(_component_Icon, { name: "i-radix-icons-double-arrow-right" }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", {}, () => [
                      createVNode(_component_Icon, { name: "i-radix-icons-double-arrow-right" })
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$2$1), {
                class: unref(cn)("w-9 h-9 p-0", props.class),
                variant: "outline"
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {}, () => [
                    createVNode(_component_Icon, { name: "i-radix-icons-double-arrow-right" })
                  ])
                ]),
                _: 3
              }, 8, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/pagination/PaginationLast.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PaginationNext",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, default: true },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_5;
      _push(ssrRenderComponent(unref(PaginationNext), mergeProps(delegatedProps.value, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$2$1), {
              class: unref(cn)("w-9 h-9 p-0", props.class),
              variant: "outline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                    _push3(ssrRenderComponent(_component_Icon, { name: "i-radix-icons-chevron-right" }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", {}, () => [
                      createVNode(_component_Icon, { name: "i-radix-icons-chevron-right" })
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$2$1), {
                class: unref(cn)("w-9 h-9 p-0", props.class),
                variant: "outline"
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {}, () => [
                    createVNode(_component_Icon, { name: "i-radix-icons-chevron-right" })
                  ])
                ]),
                _: 3
              }, 8, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/pagination/PaginationNext.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PaginationPrev",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, default: true },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_5;
      _push(ssrRenderComponent(unref(PaginationPrev), mergeProps(delegatedProps.value, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$2$1), {
              class: unref(cn)("w-9 h-9 p-0", props.class),
              variant: "outline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                    _push3(ssrRenderComponent(_component_Icon, { name: "i-radix-icons-chevron-left" }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", {}, () => [
                      createVNode(_component_Icon, { name: "i-radix-icons-chevron-left" })
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$2$1), {
                class: unref(cn)("w-9 h-9 p-0", props.class),
                variant: "outline"
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {}, () => [
                    createVNode(_component_Icon, { name: "i-radix-icons-chevron-left" })
                  ])
                ]),
                _: 3
              }, 8, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/pagination/PaginationPrev.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Button = _sfc_main$2$1;
  const _component_NuxtLink = __nuxt_component_3;
  const _component_Card = _sfc_main$5$1;
  const _component_CardHeader = _sfc_main$1$1;
  const _component_CardTitle = _sfc_main$6;
  const _component_CardContent = _sfc_main$4$1;
  const _component_Pagination = PaginationRoot;
  const _component_PaginationList = PaginationList;
  const _component_PaginationFirst = _sfc_main$4;
  const _component_PaginationPrev = _sfc_main$1;
  const _component_PaginationListItem = PaginationListItem;
  const _component_PaginationEllipsis = _sfc_main$5;
  const _component_PaginationNext = _sfc_main$2;
  const _component_PaginationLast = _sfc_main$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}><div class="grid gap-2"><div><h2 class="text-2xl font-bold tracking-tight"> Pagination </h2><p class="text-muted-foreground"> Displays data in paged format and provides navigation between pages. </p></div><div class="flex gap-2">`);
  _push(ssrRenderComponent(_component_Button, {
    size: "xs",
    variant: "outline",
    class: "text-xs",
    "as-child": ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "https://www.shadcn-vue.com/docs/components/pagination",
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
            to: "https://www.shadcn-vue.com/docs/components/pagination",
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
          to: "https://www.radix-vue.com/components/pagination",
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
            to: "https://www.radix-vue.com/components/pagination",
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
              _push3(ssrRenderComponent(_component_Pagination, {
                total: 100,
                "sibling-count": 1,
                "show-edges": "",
                "default-page": 2
              }, {
                default: withCtx(({ page }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_PaginationList, { class: "flex items-center gap-1" }, {
                      default: withCtx(({ items }, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_PaginationFirst, null, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_PaginationPrev, null, null, _parent5, _scopeId4));
                          _push5(`<!--[-->`);
                          ssrRenderList(items, (item, index) => {
                            _push5(`<!--[-->`);
                            if (item.type === "page") {
                              _push5(ssrRenderComponent(_component_PaginationListItem, {
                                key: index,
                                value: item.value,
                                "as-child": ""
                              }, {
                                default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Button, {
                                      class: "h-9 w-9 p-0",
                                      variant: item.value === page ? "default" : "outline"
                                    }, {
                                      default: withCtx((_4, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(item.value)}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(item.value), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_Button, {
                                        class: "h-9 w-9 p-0",
                                        variant: item.value === page ? "default" : "outline"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.value), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["variant"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              _push5(ssrRenderComponent(_component_PaginationEllipsis, {
                                key: item.type,
                                index
                              }, null, _parent5, _scopeId4));
                            }
                            _push5(`<!--]-->`);
                          });
                          _push5(`<!--]-->`);
                          _push5(ssrRenderComponent(_component_PaginationNext, null, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_PaginationLast, null, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_PaginationFirst),
                            createVNode(_component_PaginationPrev),
                            (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index) => {
                              return openBlock(), createBlock(Fragment, null, [
                                item.type === "page" ? (openBlock(), createBlock(_component_PaginationListItem, {
                                  key: index,
                                  value: item.value,
                                  "as-child": ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Button, {
                                      class: "h-9 w-9 p-0",
                                      variant: item.value === page ? "default" : "outline"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.value), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["variant"])
                                  ]),
                                  _: 2
                                }, 1032, ["value"])) : (openBlock(), createBlock(_component_PaginationEllipsis, {
                                  key: item.type,
                                  index
                                }, null, 8, ["index"]))
                              ], 64);
                            }), 256)),
                            createVNode(_component_PaginationNext),
                            createVNode(_component_PaginationLast)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_PaginationList, { class: "flex items-center gap-1" }, {
                        default: withCtx(({ items }) => [
                          createVNode(_component_PaginationFirst),
                          createVNode(_component_PaginationPrev),
                          (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index) => {
                            return openBlock(), createBlock(Fragment, null, [
                              item.type === "page" ? (openBlock(), createBlock(_component_PaginationListItem, {
                                key: index,
                                value: item.value,
                                "as-child": ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Button, {
                                    class: "h-9 w-9 p-0",
                                    variant: item.value === page ? "default" : "outline"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.value), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["variant"])
                                ]),
                                _: 2
                              }, 1032, ["value"])) : (openBlock(), createBlock(_component_PaginationEllipsis, {
                                key: item.type,
                                index
                              }, null, 8, ["index"]))
                            ], 64);
                          }), 256)),
                          createVNode(_component_PaginationNext),
                          createVNode(_component_PaginationLast)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px" }, [
                  createVNode(_component_Pagination, {
                    total: 100,
                    "sibling-count": 1,
                    "show-edges": "",
                    "default-page": 2
                  }, {
                    default: withCtx(({ page }) => [
                      createVNode(_component_PaginationList, { class: "flex items-center gap-1" }, {
                        default: withCtx(({ items }) => [
                          createVNode(_component_PaginationFirst),
                          createVNode(_component_PaginationPrev),
                          (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index) => {
                            return openBlock(), createBlock(Fragment, null, [
                              item.type === "page" ? (openBlock(), createBlock(_component_PaginationListItem, {
                                key: index,
                                value: item.value,
                                "as-child": ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Button, {
                                    class: "h-9 w-9 p-0",
                                    variant: item.value === page ? "default" : "outline"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.value), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["variant"])
                                ]),
                                _: 2
                              }, 1032, ["value"])) : (openBlock(), createBlock(_component_PaginationEllipsis, {
                                key: item.type,
                                index
                              }, null, 8, ["index"]))
                            ], 64);
                          }), 256)),
                          createVNode(_component_PaginationNext),
                          createVNode(_component_PaginationLast)
                        ]),
                        _: 2
                      }, 1024)
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
                createVNode(_component_Pagination, {
                  total: 100,
                  "sibling-count": 1,
                  "show-edges": "",
                  "default-page": 2
                }, {
                  default: withCtx(({ page }) => [
                    createVNode(_component_PaginationList, { class: "flex items-center gap-1" }, {
                      default: withCtx(({ items }) => [
                        createVNode(_component_PaginationFirst),
                        createVNode(_component_PaginationPrev),
                        (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index) => {
                          return openBlock(), createBlock(Fragment, null, [
                            item.type === "page" ? (openBlock(), createBlock(_component_PaginationListItem, {
                              key: index,
                              value: item.value,
                              "as-child": ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Button, {
                                  class: "h-9 w-9 p-0",
                                  variant: item.value === page ? "default" : "outline"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.value), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["variant"])
                              ]),
                              _: 2
                            }, 1032, ["value"])) : (openBlock(), createBlock(_component_PaginationEllipsis, {
                              key: item.type,
                              index
                            }, null, 8, ["index"]))
                          ], 64);
                        }), 256)),
                        createVNode(_component_PaginationNext),
                        createVNode(_component_PaginationLast)
                      ]),
                      _: 2
                    }, 1024)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components/pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { pagination as default };
//# sourceMappingURL=pagination-DyRqbehb.mjs.map
