import { a as _sfc_main$2$1, c as cn } from './server.mjs';
import { _ as __nuxt_component_3 } from './nuxt-link-DXkcJ9KT.mjs';
import { _ as _sfc_main$5, a as _sfc_main$1$1, b as _sfc_main$6, c as _sfc_main$4$1 } from './CardTitle-C5Xy3z8Z.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, defineComponent, toDisplayString, createBlock, openBlock, Fragment, renderList, unref, renderSlot, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrRenderClass } from 'vue/server-renderer';
import { useForwardPropsEmits, AccordionRoot, useForwardProps, AccordionItem, AccordionHeader, AccordionTrigger, AccordionContent } from 'radix-vue';
import { ChevronDown } from 'lucide-vue-next';
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

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Accordion",
  __ssrInlineRender: true,
  props: {
    collapsible: { type: Boolean },
    disabled: { type: Boolean },
    dir: {},
    orientation: {},
    asChild: { type: Boolean },
    as: {},
    type: {},
    modelValue: {},
    defaultValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AccordionRoot), mergeProps(unref(forwarded), _attrs), {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/accordion/Accordion.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AccordionContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
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
      _push(ssrRenderComponent(unref(AccordionContent), mergeProps(delegatedProps.value, { class: "overflow-hidden text-sm transition-all data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(unref(cn)("pb-4 pt-0", props.class))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: unref(cn)("pb-4 pt-0", props.class)
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/accordion/AccordionContent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AccordionItem",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    value: {},
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
      _push(ssrRenderComponent(unref(AccordionItem), mergeProps(unref(forwardedProps), {
        class: unref(cn)("border-b", props.class)
      }, _attrs), {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/accordion/AccordionItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AccordionTrigger",
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
      _push(ssrRenderComponent(unref(AccordionHeader), mergeProps({ class: "flex" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(AccordionTrigger), mergeProps(delegatedProps.value, {
              class: unref(cn)(
                "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
                    _push3(ssrRenderComponent(unref(ChevronDown), { class: "h-4 w-4 shrink-0 transition-transform duration-200" }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default"),
                    renderSlot(_ctx.$slots, "icon", {}, () => [
                      createVNode(unref(ChevronDown), { class: "h-4 w-4 shrink-0 transition-transform duration-200" })
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(AccordionTrigger), mergeProps(delegatedProps.value, {
                class: unref(cn)(
                  "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default"),
                  renderSlot(_ctx.$slots, "icon", {}, () => [
                    createVNode(unref(ChevronDown), { class: "h-4 w-4 shrink-0 transition-transform duration-200" })
                  ])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/accordion/AccordionTrigger.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Button = _sfc_main$2$1;
  const _component_NuxtLink = __nuxt_component_3;
  const _component_Card = _sfc_main$5;
  const _component_CardHeader = _sfc_main$1$1;
  const _component_CardTitle = _sfc_main$6;
  const _component_CardContent = _sfc_main$4$1;
  const _component_Accordion = _sfc_main$4;
  const _component_AccordionItem = _sfc_main$2;
  const _component_AccordionTrigger = _sfc_main$1;
  const _component_AccordionContent = _sfc_main$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}><div class="grid gap-2"><div><h2 class="text-2xl font-bold tracking-tight"> Accordion </h2><p class="text-muted-foreground"> A vertically stacked set of interactive headings that each reveal a section of content. </p></div><div class="flex gap-2">`);
  _push(ssrRenderComponent(_component_Button, {
    size: "xs",
    variant: "outline",
    class: "text-xs",
    "as-child": ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "https://www.shadcn-vue.com/docs/components/accordion",
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
            to: "https://www.shadcn-vue.com/docs/components/accordion",
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
          to: "https://www.radix-vue.com/components/accordion",
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
            to: "https://www.radix-vue.com/components/accordion",
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
  _push(ssrRenderComponent(_component_Card, { class: "flex-1" }, {
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
              _push3(ssrRenderComponent(_component_Accordion, {
                type: "single",
                collapsible: ""
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<!--[-->`);
                    ssrRenderList(4, (i) => {
                      _push4(ssrRenderComponent(_component_AccordionItem, {
                        key: i,
                        value: `item-${i}`
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(_component_AccordionTrigger, null, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`Item ${ssrInterpolate(i)}`);
                                } else {
                                  return [
                                    createTextVNode("Item " + toDisplayString(i), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                            _push5(ssrRenderComponent(_component_AccordionContent, null, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at aut cum dolorem mollitia praesentium quis quo! Id officia, veniam. `);
                                } else {
                                  return [
                                    createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at aut cum dolorem mollitia praesentium quis quo! Id officia, veniam. ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode(_component_AccordionTrigger, null, {
                                default: withCtx(() => [
                                  createTextVNode("Item " + toDisplayString(i), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_AccordionContent, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at aut cum dolorem mollitia praesentium quis quo! Id officia, veniam. ")
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    });
                    _push4(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(), createBlock(Fragment, null, renderList(4, (i) => {
                        return createVNode(_component_AccordionItem, {
                          key: i,
                          value: `item-${i}`
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AccordionTrigger, null, {
                              default: withCtx(() => [
                                createTextVNode("Item " + toDisplayString(i), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_AccordionContent, null, {
                              default: withCtx(() => [
                                createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at aut cum dolorem mollitia praesentium quis quo! Id officia, veniam. ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 64))
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Accordion, {
                  type: "single",
                  collapsible: ""
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(Fragment, null, renderList(4, (i) => {
                      return createVNode(_component_AccordionItem, {
                        key: i,
                        value: `item-${i}`
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_AccordionTrigger, null, {
                            default: withCtx(() => [
                              createTextVNode("Item " + toDisplayString(i), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_AccordionContent, null, {
                            default: withCtx(() => [
                              createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at aut cum dolorem mollitia praesentium quis quo! Id officia, veniam. ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 64))
                  ]),
                  _: 1
                })
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
              createVNode(_component_Accordion, {
                type: "single",
                collapsible: ""
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(4, (i) => {
                    return createVNode(_component_AccordionItem, {
                      key: i,
                      value: `item-${i}`
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AccordionTrigger, null, {
                          default: withCtx(() => [
                            createTextVNode("Item " + toDisplayString(i), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_AccordionContent, null, {
                          default: withCtx(() => [
                            createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at aut cum dolorem mollitia praesentium quis quo! Id officia, veniam. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 64))
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
  }, _parent));
  _push(ssrRenderComponent(_component_Card, { class: "flex-1" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CardHeader, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_CardTitle, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Expand Multiple`);
                  } else {
                    return [
                      createTextVNode("Expand Multiple")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_CardTitle, null, {
                  default: withCtx(() => [
                    createTextVNode("Expand Multiple")
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
              _push3(ssrRenderComponent(_component_Accordion, {
                type: "multiple",
                collapsible: ""
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<!--[-->`);
                    ssrRenderList(4, (i) => {
                      _push4(ssrRenderComponent(_component_AccordionItem, {
                        key: i,
                        value: `item-${i}`
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(_component_AccordionTrigger, null, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`Item ${ssrInterpolate(i)}`);
                                } else {
                                  return [
                                    createTextVNode("Item " + toDisplayString(i), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                            _push5(ssrRenderComponent(_component_AccordionContent, null, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at aut cum dolorem mollitia praesentium quis quo! Id officia, veniam. `);
                                } else {
                                  return [
                                    createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at aut cum dolorem mollitia praesentium quis quo! Id officia, veniam. ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode(_component_AccordionTrigger, null, {
                                default: withCtx(() => [
                                  createTextVNode("Item " + toDisplayString(i), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_AccordionContent, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at aut cum dolorem mollitia praesentium quis quo! Id officia, veniam. ")
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    });
                    _push4(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(), createBlock(Fragment, null, renderList(4, (i) => {
                        return createVNode(_component_AccordionItem, {
                          key: i,
                          value: `item-${i}`
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AccordionTrigger, null, {
                              default: withCtx(() => [
                                createTextVNode("Item " + toDisplayString(i), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_AccordionContent, null, {
                              default: withCtx(() => [
                                createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at aut cum dolorem mollitia praesentium quis quo! Id officia, veniam. ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 64))
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Accordion, {
                  type: "multiple",
                  collapsible: ""
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(Fragment, null, renderList(4, (i) => {
                      return createVNode(_component_AccordionItem, {
                        key: i,
                        value: `item-${i}`
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_AccordionTrigger, null, {
                            default: withCtx(() => [
                              createTextVNode("Item " + toDisplayString(i), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_AccordionContent, null, {
                            default: withCtx(() => [
                              createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at aut cum dolorem mollitia praesentium quis quo! Id officia, veniam. ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 64))
                  ]),
                  _: 1
                })
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
                  createTextVNode("Expand Multiple")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_CardContent, null, {
            default: withCtx(() => [
              createVNode(_component_Accordion, {
                type: "multiple",
                collapsible: ""
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(4, (i) => {
                    return createVNode(_component_AccordionItem, {
                      key: i,
                      value: `item-${i}`
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AccordionTrigger, null, {
                          default: withCtx(() => [
                            createTextVNode("Item " + toDisplayString(i), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_AccordionContent, null, {
                          default: withCtx(() => [
                            createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at aut cum dolorem mollitia praesentium quis quo! Id officia, veniam. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 64))
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
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components/accordion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const accordion = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { accordion as default };
//# sourceMappingURL=accordion-DYab5mXZ.mjs.map
