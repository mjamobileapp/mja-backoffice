import { a as _sfc_main$2$1, c as cn, _ as __nuxt_component_5 } from './server.mjs';
import { _ as __nuxt_component_3 } from './nuxt-link-DXkcJ9KT.mjs';
import { _ as _sfc_main$5$1, a as _sfc_main$1$1, b as _sfc_main$9, c as _sfc_main$4$1 } from './CardTitle-C5Xy3z8Z.mjs';
import { cva } from 'class-variance-authority';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, unref, computed, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { useForwardPropsEmits, NavigationMenuRoot, useForwardProps, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, NavigationMenuViewport } from 'radix-vue';
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

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuViewport",
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
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute left-0 top-full flex justify-center" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(NavigationMenuViewport), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "origin-top-center relative mt-1.5 h-[--radix-navigation-menu-viewport-height] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[--radix-navigation-menu-viewport-width]",
          props.class
        )
      }), null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenuViewport.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenu",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    defaultValue: {},
    dir: {},
    orientation: {},
    delayDuration: {},
    skipDelayDuration: {},
    disableClickTrigger: { type: Boolean },
    disableHoverTrigger: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuRoot), mergeProps(unref(forwarded), {
        class: unref(cn)("relative z-10 flex max-w-max flex-1 items-center justify-center", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(_sfc_main$8, null, null, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              createVNode(_sfc_main$8)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenu.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuContent), mergeProps(unref(forwarded), {
        class: unref(cn)(
          "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
          props.class
        )
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenuContent.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuItem",
  __ssrInlineRender: true,
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuItem), mergeProps(props, _attrs), {
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenuItem.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuLink",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuLink), mergeProps(unref(forwarded), _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenuLink.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuList",
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
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuList), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "group flex flex-1 list-none items-center justify-center gap-x-1",
          props.class
        )
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenuList.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuTrigger",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
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
      const _component_Icon = __nuxt_component_5;
      _push(ssrRenderComponent(unref(NavigationMenuTrigger), mergeProps(unref(forwardedProps), {
        class: unref(cn)(unref(navigationMenuTriggerStyle)(), "group", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "i-radix-icons-chevron-down",
              class: "relative top-px ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              createVNode(_component_Icon, {
                name: "i-radix-icons-chevron-down",
                class: "relative top-px ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
                "aria-hidden": "true"
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenuTrigger.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoItem",
  __ssrInlineRender: true,
  props: {
    title: {},
    href: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavigationMenuLink = _sfc_main$4;
      _push(`<li${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NavigationMenuLink, { "as-child": "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<a${ssrRenderAttr("href", __props.href)} class="${ssrRenderClass(("cn" in _ctx ? _ctx.cn : unref(cn))(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              (_a = _ctx.$attrs.class) != null ? _a : ""
            ))}"${_scopeId}><div class="text-sm font-medium leading-none"${_scopeId}>${ssrInterpolate(__props.title)}</div><p class="line-clamp-2 text-sm text-muted-foreground leading-snug"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</p></a>`);
          } else {
            return [
              createVNode("a", {
                href: __props.href,
                class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                  (_b = _ctx.$attrs.class) != null ? _b : ""
                )
              }, [
                createVNode("div", { class: "text-sm font-medium leading-none" }, toDisplayString(__props.title), 1),
                createVNode("p", { class: "line-clamp-2 text-sm text-muted-foreground leading-snug" }, [
                  renderSlot(_ctx.$slots, "default")
                ])
              ], 10, ["href"])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</li>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation-menu/DemoItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "navigation-menu",
  __ssrInlineRender: true,
  setup(__props) {
    const components = [
      {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description: "A modal dialog that interrupts the user with important content and expects a response."
      },
      {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description: "For sighted users to preview content available behind a link."
      },
      {
        title: "Progress",
        href: "/docs/primitives/progress",
        description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
      },
      {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content."
      },
      {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description: "A set of layered sections of content\u2014known as tab panels\u2014that are displayed one at a time."
      },
      {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$2$1;
      const _component_NuxtLink = __nuxt_component_3;
      const _component_Card = _sfc_main$5$1;
      const _component_CardHeader = _sfc_main$1$1;
      const _component_CardTitle = _sfc_main$9;
      const _component_CardContent = _sfc_main$4$1;
      const _component_NavigationMenu = _sfc_main$7;
      const _component_NavigationMenuList = _sfc_main$3;
      const _component_NavigationMenuItem = _sfc_main$5;
      const _component_NavigationMenuTrigger = _sfc_main$2;
      const _component_NavigationMenuContent = _sfc_main$6;
      const _component_NavigationMenuLink = _sfc_main$4;
      const _component_NavigationMenuDemoItem = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}><div class="grid gap-2"><div><h2 class="text-2xl font-bold tracking-tight"> Navigation Menu </h2><p class="text-muted-foreground"> A collection of links for navigating websites. </p></div><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_Button, {
        size: "xs",
        variant: "outline",
        class: "text-xs",
        "as-child": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "https://www.shadcn-vue.com/docs/components/navigation-menu",
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
                to: "https://www.shadcn-vue.com/docs/components/navigation-menu",
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
              to: "https://www.radix-vue.com/components/navigation-menu",
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
                to: "https://www.radix-vue.com/components/navigation-menu",
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
      _push(`</div></div><div class="grid gap-4">`);
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
                  _push3(ssrRenderComponent(_component_NavigationMenu, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NavigationMenuList, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_NavigationMenuItem, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_NavigationMenuTrigger, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Getting started`);
                                        } else {
                                          return [
                                            createTextVNode("Getting started")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_NavigationMenuContent, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<ul class="grid gap-3 p-6 lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)] lg:w-[500px] md:w-[400px]"${_scopeId6}><li class="row-span-3"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_NavigationMenuLink, { "as-child": "" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_NuxtLink, {
                                                  class: "h-full w-full flex flex-col select-none justify-end rounded-md from-muted/50 to-muted bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md",
                                                  to: "/"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<img src="https://www.radix-vue.com/logo.svg" class="h-6 w-6" alt="radix-logo"${_scopeId8}><div class="mb-2 mt-4 text-lg font-medium"${_scopeId8}> shadcn/ui </div><p class="text-sm text-muted-foreground leading-tight"${_scopeId8}> Beautifully designed components built with Radix UI and Tailwind CSS. </p>`);
                                                    } else {
                                                      return [
                                                        createVNode("img", {
                                                          src: "https://www.radix-vue.com/logo.svg",
                                                          class: "h-6 w-6",
                                                          alt: "radix-logo"
                                                        }),
                                                        createVNode("div", { class: "mb-2 mt-4 text-lg font-medium" }, " shadcn/ui "),
                                                        createVNode("p", { class: "text-sm text-muted-foreground leading-tight" }, " Beautifully designed components built with Radix UI and Tailwind CSS. ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_NuxtLink, {
                                                    class: "h-full w-full flex flex-col select-none justify-end rounded-md from-muted/50 to-muted bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md",
                                                    to: "/"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("img", {
                                                        src: "https://www.radix-vue.com/logo.svg",
                                                        class: "h-6 w-6",
                                                        alt: "radix-logo"
                                                      }),
                                                      createVNode("div", { class: "mb-2 mt-4 text-lg font-medium" }, " shadcn/ui "),
                                                      createVNode("p", { class: "text-sm text-muted-foreground leading-tight" }, " Beautifully designed components built with Radix UI and Tailwind CSS. ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</li>`);
                                          _push7(ssrRenderComponent(_component_NavigationMenuDemoItem, {
                                            href: "/docs",
                                            title: "Introduction"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Re-usable components built using Radix UI and Tailwind CSS. `);
                                              } else {
                                                return [
                                                  createTextVNode(" Re-usable components built using Radix UI and Tailwind CSS. ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_NavigationMenuDemoItem, {
                                            href: "/docs/installation",
                                            title: "Installation"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` How to install dependencies and structure your app. `);
                                              } else {
                                                return [
                                                  createTextVNode(" How to install dependencies and structure your app. ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_NavigationMenuDemoItem, {
                                            href: "/docs/primitives/typography",
                                            title: "Typography"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Styles for headings, paragraphs, lists...etc `);
                                              } else {
                                                return [
                                                  createTextVNode(" Styles for headings, paragraphs, lists...etc ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</ul>`);
                                        } else {
                                          return [
                                            createVNode("ul", { class: "grid gap-3 p-6 lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)] lg:w-[500px] md:w-[400px]" }, [
                                              createVNode("li", { class: "row-span-3" }, [
                                                createVNode(_component_NavigationMenuLink, { "as-child": "" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_NuxtLink, {
                                                      class: "h-full w-full flex flex-col select-none justify-end rounded-md from-muted/50 to-muted bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md",
                                                      to: "/"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("img", {
                                                          src: "https://www.radix-vue.com/logo.svg",
                                                          class: "h-6 w-6",
                                                          alt: "radix-logo"
                                                        }),
                                                        createVNode("div", { class: "mb-2 mt-4 text-lg font-medium" }, " shadcn/ui "),
                                                        createVNode("p", { class: "text-sm text-muted-foreground leading-tight" }, " Beautifully designed components built with Radix UI and Tailwind CSS. ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              createVNode(_component_NavigationMenuDemoItem, {
                                                href: "/docs",
                                                title: "Introduction"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Re-usable components built using Radix UI and Tailwind CSS. ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_NavigationMenuDemoItem, {
                                                href: "/docs/installation",
                                                title: "Installation"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" How to install dependencies and structure your app. ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_NavigationMenuDemoItem, {
                                                href: "/docs/primitives/typography",
                                                title: "Typography"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Styles for headings, paragraphs, lists...etc ")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_NavigationMenuTrigger, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Getting started")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_NavigationMenuContent, null, {
                                        default: withCtx(() => [
                                          createVNode("ul", { class: "grid gap-3 p-6 lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)] lg:w-[500px] md:w-[400px]" }, [
                                            createVNode("li", { class: "row-span-3" }, [
                                              createVNode(_component_NavigationMenuLink, { "as-child": "" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_NuxtLink, {
                                                    class: "h-full w-full flex flex-col select-none justify-end rounded-md from-muted/50 to-muted bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md",
                                                    to: "/"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("img", {
                                                        src: "https://www.radix-vue.com/logo.svg",
                                                        class: "h-6 w-6",
                                                        alt: "radix-logo"
                                                      }),
                                                      createVNode("div", { class: "mb-2 mt-4 text-lg font-medium" }, " shadcn/ui "),
                                                      createVNode("p", { class: "text-sm text-muted-foreground leading-tight" }, " Beautifully designed components built with Radix UI and Tailwind CSS. ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            createVNode(_component_NavigationMenuDemoItem, {
                                              href: "/docs",
                                              title: "Introduction"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Re-usable components built using Radix UI and Tailwind CSS. ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_NavigationMenuDemoItem, {
                                              href: "/docs/installation",
                                              title: "Installation"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" How to install dependencies and structure your app. ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_NavigationMenuDemoItem, {
                                              href: "/docs/primitives/typography",
                                              title: "Typography"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Styles for headings, paragraphs, lists...etc ")
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_NavigationMenuItem, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_NavigationMenuTrigger, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Components`);
                                        } else {
                                          return [
                                            createTextVNode("Components")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_NavigationMenuContent, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<ul class="grid w-[400px] gap-3 p-4 md:grid-cols-2 lg:w-[600px] md:w-[500px]"${_scopeId6}><!--[-->`);
                                          ssrRenderList(components, (component) => {
                                            _push7(ssrRenderComponent(_component_NavigationMenuDemoItem, {
                                              key: component.title,
                                              title: component.title,
                                              href: component.href
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(component.description)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(component.description), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]--></ul>`);
                                        } else {
                                          return [
                                            createVNode("ul", { class: "grid w-[400px] gap-3 p-4 md:grid-cols-2 lg:w-[600px] md:w-[500px]" }, [
                                              (openBlock(), createBlock(Fragment, null, renderList(components, (component) => {
                                                return createVNode(_component_NavigationMenuDemoItem, {
                                                  key: component.title,
                                                  title: component.title,
                                                  href: component.href
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(component.description), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["title", "href"]);
                                              }), 64))
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_NavigationMenuTrigger, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Components")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_NavigationMenuContent, null, {
                                        default: withCtx(() => [
                                          createVNode("ul", { class: "grid w-[400px] gap-3 p-4 md:grid-cols-2 lg:w-[600px] md:w-[500px]" }, [
                                            (openBlock(), createBlock(Fragment, null, renderList(components, (component) => {
                                              return createVNode(_component_NavigationMenuDemoItem, {
                                                key: component.title,
                                                title: component.title,
                                                href: component.href
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(component.description), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["title", "href"]);
                                            }), 64))
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_NavigationMenuItem, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_NavigationMenuLink, {
                                      href: "/docs",
                                      class: unref(navigationMenuTriggerStyle)()
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Documentation `);
                                        } else {
                                          return [
                                            createTextVNode(" Documentation ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_NavigationMenuLink, {
                                        href: "/docs",
                                        class: unref(navigationMenuTriggerStyle)()
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Documentation ")
                                        ]),
                                        _: 1
                                      }, 8, ["class"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_NavigationMenuItem, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_NavigationMenuTrigger, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Getting started")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_NavigationMenuContent, null, {
                                      default: withCtx(() => [
                                        createVNode("ul", { class: "grid gap-3 p-6 lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)] lg:w-[500px] md:w-[400px]" }, [
                                          createVNode("li", { class: "row-span-3" }, [
                                            createVNode(_component_NavigationMenuLink, { "as-child": "" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_NuxtLink, {
                                                  class: "h-full w-full flex flex-col select-none justify-end rounded-md from-muted/50 to-muted bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md",
                                                  to: "/"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("img", {
                                                      src: "https://www.radix-vue.com/logo.svg",
                                                      class: "h-6 w-6",
                                                      alt: "radix-logo"
                                                    }),
                                                    createVNode("div", { class: "mb-2 mt-4 text-lg font-medium" }, " shadcn/ui "),
                                                    createVNode("p", { class: "text-sm text-muted-foreground leading-tight" }, " Beautifully designed components built with Radix UI and Tailwind CSS. ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          createVNode(_component_NavigationMenuDemoItem, {
                                            href: "/docs",
                                            title: "Introduction"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Re-usable components built using Radix UI and Tailwind CSS. ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_NavigationMenuDemoItem, {
                                            href: "/docs/installation",
                                            title: "Installation"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" How to install dependencies and structure your app. ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_NavigationMenuDemoItem, {
                                            href: "/docs/primitives/typography",
                                            title: "Typography"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Styles for headings, paragraphs, lists...etc ")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_NavigationMenuItem, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_NavigationMenuTrigger, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Components")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_NavigationMenuContent, null, {
                                      default: withCtx(() => [
                                        createVNode("ul", { class: "grid w-[400px] gap-3 p-4 md:grid-cols-2 lg:w-[600px] md:w-[500px]" }, [
                                          (openBlock(), createBlock(Fragment, null, renderList(components, (component) => {
                                            return createVNode(_component_NavigationMenuDemoItem, {
                                              key: component.title,
                                              title: component.title,
                                              href: component.href
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(component.description), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["title", "href"]);
                                          }), 64))
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_NavigationMenuItem, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_NavigationMenuLink, {
                                      href: "/docs",
                                      class: unref(navigationMenuTriggerStyle)()
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Documentation ")
                                      ]),
                                      _: 1
                                    }, 8, ["class"])
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
                          createVNode(_component_NavigationMenuList, null, {
                            default: withCtx(() => [
                              createVNode(_component_NavigationMenuItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_NavigationMenuTrigger, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Getting started")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_NavigationMenuContent, null, {
                                    default: withCtx(() => [
                                      createVNode("ul", { class: "grid gap-3 p-6 lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)] lg:w-[500px] md:w-[400px]" }, [
                                        createVNode("li", { class: "row-span-3" }, [
                                          createVNode(_component_NavigationMenuLink, { "as-child": "" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_NuxtLink, {
                                                class: "h-full w-full flex flex-col select-none justify-end rounded-md from-muted/50 to-muted bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md",
                                                to: "/"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("img", {
                                                    src: "https://www.radix-vue.com/logo.svg",
                                                    class: "h-6 w-6",
                                                    alt: "radix-logo"
                                                  }),
                                                  createVNode("div", { class: "mb-2 mt-4 text-lg font-medium" }, " shadcn/ui "),
                                                  createVNode("p", { class: "text-sm text-muted-foreground leading-tight" }, " Beautifully designed components built with Radix UI and Tailwind CSS. ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        createVNode(_component_NavigationMenuDemoItem, {
                                          href: "/docs",
                                          title: "Introduction"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Re-usable components built using Radix UI and Tailwind CSS. ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_NavigationMenuDemoItem, {
                                          href: "/docs/installation",
                                          title: "Installation"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" How to install dependencies and structure your app. ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_NavigationMenuDemoItem, {
                                          href: "/docs/primitives/typography",
                                          title: "Typography"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Styles for headings, paragraphs, lists...etc ")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_NavigationMenuItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_NavigationMenuTrigger, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Components")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_NavigationMenuContent, null, {
                                    default: withCtx(() => [
                                      createVNode("ul", { class: "grid w-[400px] gap-3 p-4 md:grid-cols-2 lg:w-[600px] md:w-[500px]" }, [
                                        (openBlock(), createBlock(Fragment, null, renderList(components, (component) => {
                                          return createVNode(_component_NavigationMenuDemoItem, {
                                            key: component.title,
                                            title: component.title,
                                            href: component.href
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(component.description), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["title", "href"]);
                                        }), 64))
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_NavigationMenuItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_NavigationMenuLink, {
                                    href: "/docs",
                                    class: unref(navigationMenuTriggerStyle)()
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Documentation ")
                                    ]),
                                    _: 1
                                  }, 8, ["class"])
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
                      createVNode(_component_NavigationMenu, null, {
                        default: withCtx(() => [
                          createVNode(_component_NavigationMenuList, null, {
                            default: withCtx(() => [
                              createVNode(_component_NavigationMenuItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_NavigationMenuTrigger, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Getting started")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_NavigationMenuContent, null, {
                                    default: withCtx(() => [
                                      createVNode("ul", { class: "grid gap-3 p-6 lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)] lg:w-[500px] md:w-[400px]" }, [
                                        createVNode("li", { class: "row-span-3" }, [
                                          createVNode(_component_NavigationMenuLink, { "as-child": "" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_NuxtLink, {
                                                class: "h-full w-full flex flex-col select-none justify-end rounded-md from-muted/50 to-muted bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md",
                                                to: "/"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("img", {
                                                    src: "https://www.radix-vue.com/logo.svg",
                                                    class: "h-6 w-6",
                                                    alt: "radix-logo"
                                                  }),
                                                  createVNode("div", { class: "mb-2 mt-4 text-lg font-medium" }, " shadcn/ui "),
                                                  createVNode("p", { class: "text-sm text-muted-foreground leading-tight" }, " Beautifully designed components built with Radix UI and Tailwind CSS. ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        createVNode(_component_NavigationMenuDemoItem, {
                                          href: "/docs",
                                          title: "Introduction"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Re-usable components built using Radix UI and Tailwind CSS. ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_NavigationMenuDemoItem, {
                                          href: "/docs/installation",
                                          title: "Installation"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" How to install dependencies and structure your app. ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_NavigationMenuDemoItem, {
                                          href: "/docs/primitives/typography",
                                          title: "Typography"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Styles for headings, paragraphs, lists...etc ")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_NavigationMenuItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_NavigationMenuTrigger, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Components")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_NavigationMenuContent, null, {
                                    default: withCtx(() => [
                                      createVNode("ul", { class: "grid w-[400px] gap-3 p-4 md:grid-cols-2 lg:w-[600px] md:w-[500px]" }, [
                                        (openBlock(), createBlock(Fragment, null, renderList(components, (component) => {
                                          return createVNode(_component_NavigationMenuDemoItem, {
                                            key: component.title,
                                            title: component.title,
                                            href: component.href
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(component.description), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["title", "href"]);
                                        }), 64))
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_NavigationMenuItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_NavigationMenuLink, {
                                    href: "/docs",
                                    class: unref(navigationMenuTriggerStyle)()
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Documentation ")
                                    ]),
                                    _: 1
                                  }, 8, ["class"])
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
                    createVNode(_component_NavigationMenu, null, {
                      default: withCtx(() => [
                        createVNode(_component_NavigationMenuList, null, {
                          default: withCtx(() => [
                            createVNode(_component_NavigationMenuItem, null, {
                              default: withCtx(() => [
                                createVNode(_component_NavigationMenuTrigger, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Getting started")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_NavigationMenuContent, null, {
                                  default: withCtx(() => [
                                    createVNode("ul", { class: "grid gap-3 p-6 lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)] lg:w-[500px] md:w-[400px]" }, [
                                      createVNode("li", { class: "row-span-3" }, [
                                        createVNode(_component_NavigationMenuLink, { "as-child": "" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_NuxtLink, {
                                              class: "h-full w-full flex flex-col select-none justify-end rounded-md from-muted/50 to-muted bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md",
                                              to: "/"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("img", {
                                                  src: "https://www.radix-vue.com/logo.svg",
                                                  class: "h-6 w-6",
                                                  alt: "radix-logo"
                                                }),
                                                createVNode("div", { class: "mb-2 mt-4 text-lg font-medium" }, " shadcn/ui "),
                                                createVNode("p", { class: "text-sm text-muted-foreground leading-tight" }, " Beautifully designed components built with Radix UI and Tailwind CSS. ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode(_component_NavigationMenuDemoItem, {
                                        href: "/docs",
                                        title: "Introduction"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Re-usable components built using Radix UI and Tailwind CSS. ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_NavigationMenuDemoItem, {
                                        href: "/docs/installation",
                                        title: "Installation"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" How to install dependencies and structure your app. ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_NavigationMenuDemoItem, {
                                        href: "/docs/primitives/typography",
                                        title: "Typography"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Styles for headings, paragraphs, lists...etc ")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_NavigationMenuItem, null, {
                              default: withCtx(() => [
                                createVNode(_component_NavigationMenuTrigger, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Components")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_NavigationMenuContent, null, {
                                  default: withCtx(() => [
                                    createVNode("ul", { class: "grid w-[400px] gap-3 p-4 md:grid-cols-2 lg:w-[600px] md:w-[500px]" }, [
                                      (openBlock(), createBlock(Fragment, null, renderList(components, (component) => {
                                        return createVNode(_component_NavigationMenuDemoItem, {
                                          key: component.title,
                                          title: component.title,
                                          href: component.href
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(component.description), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["title", "href"]);
                                      }), 64))
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_NavigationMenuItem, null, {
                              default: withCtx(() => [
                                createVNode(_component_NavigationMenuLink, {
                                  href: "/docs",
                                  class: unref(navigationMenuTriggerStyle)()
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Documentation ")
                                  ]),
                                  _: 1
                                }, 8, ["class"])
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components/navigation-menu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=navigation-menu-C07NvdMr.mjs.map
