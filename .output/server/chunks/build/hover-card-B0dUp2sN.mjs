import { a as _sfc_main$2$1, _ as __nuxt_component_5, c as cn } from './server.mjs';
import { _ as __nuxt_component_3 } from './nuxt-link-DXkcJ9KT.mjs';
import { _ as _sfc_main$5, a as _sfc_main$1$1, b as _sfc_main$4, c as _sfc_main$4$1 } from './CardTitle-C5Xy3z8Z.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, defineComponent, unref, renderSlot, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { useForwardPropsEmits, HoverCardRoot, HoverCardTrigger, useForwardProps, HoverCardPortal, HoverCardContent } from 'radix-vue';
import { _ as _sfc_main$2$2, b as _sfc_main$6, a as _sfc_main$1$2 } from './index-B6VfKlGU.mjs';
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "HoverCard",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    openDelay: {},
    closeDelay: {}
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(HoverCardRoot), mergeProps(unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/hover-card/HoverCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HoverCardContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    side: {},
    sideOffset: { default: 4 },
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
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
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(HoverCardPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(HoverCardContent), mergeProps(unref(forwardedProps), {
              class: unref(cn)(
                "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(HoverCardContent), mergeProps(unref(forwardedProps), {
                class: unref(cn)(
                  "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16, ["class"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/hover-card/HoverCardContent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HoverCardTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(HoverCardTrigger), mergeProps(props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/hover-card/HoverCardTrigger.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Button = _sfc_main$2$1;
  const _component_NuxtLink = __nuxt_component_3;
  const _component_Card = _sfc_main$5;
  const _component_CardHeader = _sfc_main$1$1;
  const _component_CardTitle = _sfc_main$4;
  const _component_CardContent = _sfc_main$4$1;
  const _component_HoverCard = _sfc_main$3;
  const _component_HoverCardTrigger = _sfc_main$1;
  const _component_HoverCardContent = _sfc_main$2;
  const _component_Avatar = _sfc_main$2$2;
  const _component_AvatarImage = _sfc_main$6;
  const _component_AvatarFallback = _sfc_main$1$2;
  const _component_Icon = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}><div class="grid gap-2"><div><h2 class="text-2xl font-bold tracking-tight"> Hover Card </h2><p class="text-muted-foreground"> For sighted users to preview content available behind a link. </p></div><div class="flex gap-2">`);
  _push(ssrRenderComponent(_component_Button, {
    size: "xs",
    variant: "outline",
    class: "text-xs",
    "as-child": ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "https://www.shadcn-vue.com/docs/components/hover-card",
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
            to: "https://www.shadcn-vue.com/docs/components/hover-card",
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
          to: "https://www.radix-vue.com/components/hover-card",
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
            to: "https://www.radix-vue.com/components/hover-card",
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
              _push3(ssrRenderComponent(_component_HoverCard, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_HoverCardTrigger, { "as-child": "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_Button, { variant: "link" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` @vuejs `);
                              } else {
                                return [
                                  createTextVNode(" @vuejs ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_Button, { variant: "link" }, {
                              default: withCtx(() => [
                                createTextVNode(" @vuejs ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_HoverCardContent, { class: "w-80" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="flex justify-between space-x-4"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_Avatar, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_AvatarImage, { src: "https://github.com/vuejs.png" }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_AvatarFallback, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`VC`);
                                    } else {
                                      return [
                                        createTextVNode("VC")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_AvatarImage, { src: "https://github.com/vuejs.png" }),
                                  createVNode(_component_AvatarFallback, null, {
                                    default: withCtx(() => [
                                      createTextVNode("VC")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<div class="space-y-1"${_scopeId4}><h4 class="text-sm font-semibold"${_scopeId4}> @vuejs </h4><p class="text-sm"${_scopeId4}> Progressive JavaScript framework for building modern web interfaces. </p><div class="flex items-center pt-2"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_Icon, {
                            name: "radix-icons:calendar",
                            class: "mr-2 h-4 w-4 opacity-70"
                          }, null, _parent5, _scopeId4));
                          _push5(`<span class="text-xs text-muted-foreground"${_scopeId4}> Joined January 2014 </span></div></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex justify-between space-x-4" }, [
                              createVNode(_component_Avatar, null, {
                                default: withCtx(() => [
                                  createVNode(_component_AvatarImage, { src: "https://github.com/vuejs.png" }),
                                  createVNode(_component_AvatarFallback, null, {
                                    default: withCtx(() => [
                                      createTextVNode("VC")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("h4", { class: "text-sm font-semibold" }, " @vuejs "),
                                createVNode("p", { class: "text-sm" }, " Progressive JavaScript framework for building modern web interfaces. "),
                                createVNode("div", { class: "flex items-center pt-2" }, [
                                  createVNode(_component_Icon, {
                                    name: "radix-icons:calendar",
                                    class: "mr-2 h-4 w-4 opacity-70"
                                  }),
                                  createVNode("span", { class: "text-xs text-muted-foreground" }, " Joined January 2014 ")
                                ])
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_HoverCardTrigger, { "as-child": "" }, {
                        default: withCtx(() => [
                          createVNode(_component_Button, { variant: "link" }, {
                            default: withCtx(() => [
                              createTextVNode(" @vuejs ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_HoverCardContent, { class: "w-80" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex justify-between space-x-4" }, [
                            createVNode(_component_Avatar, null, {
                              default: withCtx(() => [
                                createVNode(_component_AvatarImage, { src: "https://github.com/vuejs.png" }),
                                createVNode(_component_AvatarFallback, null, {
                                  default: withCtx(() => [
                                    createTextVNode("VC")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "space-y-1" }, [
                              createVNode("h4", { class: "text-sm font-semibold" }, " @vuejs "),
                              createVNode("p", { class: "text-sm" }, " Progressive JavaScript framework for building modern web interfaces. "),
                              createVNode("div", { class: "flex items-center pt-2" }, [
                                createVNode(_component_Icon, {
                                  name: "radix-icons:calendar",
                                  class: "mr-2 h-4 w-4 opacity-70"
                                }),
                                createVNode("span", { class: "text-xs text-muted-foreground" }, " Joined January 2014 ")
                              ])
                            ])
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
                  createVNode(_component_HoverCard, null, {
                    default: withCtx(() => [
                      createVNode(_component_HoverCardTrigger, { "as-child": "" }, {
                        default: withCtx(() => [
                          createVNode(_component_Button, { variant: "link" }, {
                            default: withCtx(() => [
                              createTextVNode(" @vuejs ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_HoverCardContent, { class: "w-80" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex justify-between space-x-4" }, [
                            createVNode(_component_Avatar, null, {
                              default: withCtx(() => [
                                createVNode(_component_AvatarImage, { src: "https://github.com/vuejs.png" }),
                                createVNode(_component_AvatarFallback, null, {
                                  default: withCtx(() => [
                                    createTextVNode("VC")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "space-y-1" }, [
                              createVNode("h4", { class: "text-sm font-semibold" }, " @vuejs "),
                              createVNode("p", { class: "text-sm" }, " Progressive JavaScript framework for building modern web interfaces. "),
                              createVNode("div", { class: "flex items-center pt-2" }, [
                                createVNode(_component_Icon, {
                                  name: "radix-icons:calendar",
                                  class: "mr-2 h-4 w-4 opacity-70"
                                }),
                                createVNode("span", { class: "text-xs text-muted-foreground" }, " Joined January 2014 ")
                              ])
                            ])
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
                createVNode(_component_HoverCard, null, {
                  default: withCtx(() => [
                    createVNode(_component_HoverCardTrigger, { "as-child": "" }, {
                      default: withCtx(() => [
                        createVNode(_component_Button, { variant: "link" }, {
                          default: withCtx(() => [
                            createTextVNode(" @vuejs ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_HoverCardContent, { class: "w-80" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex justify-between space-x-4" }, [
                          createVNode(_component_Avatar, null, {
                            default: withCtx(() => [
                              createVNode(_component_AvatarImage, { src: "https://github.com/vuejs.png" }),
                              createVNode(_component_AvatarFallback, null, {
                                default: withCtx(() => [
                                  createTextVNode("VC")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode("h4", { class: "text-sm font-semibold" }, " @vuejs "),
                            createVNode("p", { class: "text-sm" }, " Progressive JavaScript framework for building modern web interfaces. "),
                            createVNode("div", { class: "flex items-center pt-2" }, [
                              createVNode(_component_Icon, {
                                name: "radix-icons:calendar",
                                class: "mr-2 h-4 w-4 opacity-70"
                              }),
                              createVNode("span", { class: "text-xs text-muted-foreground" }, " Joined January 2014 ")
                            ])
                          ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components/hover-card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hoverCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { hoverCard as default };
//# sourceMappingURL=hover-card-B0dUp2sN.mjs.map
