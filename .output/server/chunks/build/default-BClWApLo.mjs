import { cva } from 'class-variance-authority';
import { defineComponent, useSSRContext, mergeProps, unref, withCtx, createVNode, renderSlot, computed, resolveDynamicComponent, createBlock, openBlock, Fragment, createTextVNode, toDisplayString, ref, isRef, createCommentVNode, renderList, watch } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderVNode, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$7$1, b as _sfc_main$5$1 } from './index-DWTRBWyR.mjs';
import { c as cn, u as useMediaQuery, i as useVModel, w as useEventListener, x as useAppConfig, a as _sfc_main$2$2, _ as __nuxt_component_5, y as useCustomize, s as useColorMode, e as useCookie, d as useRuntimeConfig, m as useRoute, z as themes, n as navigateTo } from './server.mjs';
import { createContext, Primitive, TooltipProvider } from 'radix-vue';
import { _ as _sfc_main$w } from './Input-CDkjoebz.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$x, b as _sfc_main$1$1 } from './TooltipTrigger-BcDIeLJj.mjs';
import { _ as _sfc_main$y } from './Skeleton-DaUdtB_N.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _sfc_main$z } from './Separator-Bs1EkIKE.mjs';
import { PanelLeft } from 'lucide-vue-next';
import { _ as _sfc_main$2$3, a as _sfc_main$A, b as _sfc_main$1$2 } from './CollapsibleTrigger-eMDs8FN3.mjs';
import { _ as __nuxt_component_3 } from './nuxt-link-DXkcJ9KT.mjs';
import { _ as _sfc_main$d$1, a as _sfc_main$B, b as _sfc_main$b$1, k as _sfc_main$8$1, d as _sfc_main$5$2, c as _sfc_main$9$1 } from './DropdownMenuTrigger-7ca149wI.mjs';
import { useRouter } from 'vue-router';
import { _ as _sfc_main$8$2, b as _sfc_main$6$1, c as _sfc_main$3$1, d as _sfc_main$1$3, g as _sfc_main$5$3 } from './DialogTrigger-BW6jyQ7n.mjs';
import { _ as _sfc_main$C } from './Label-BBvFeqSn.mjs';
import { g as _sfc_main$D } from './BreadcrumbCustom-DihTwpyW.mjs';
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

const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const [useSidebar, provideSidebarContext] = createContext("Sidebar");
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "Sidebar",
  __ssrInlineRender: true,
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.collapsible === "none") {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: unref(cn)("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", props.class)
        }, _ctx.$attrs, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else if (unref(isMobile)) {
        _push(ssrRenderComponent(_sfc_main$7$1, mergeProps({ open: unref(openMobile) }, _ctx.$attrs, { "onUpdate:open": unref(setOpenMobile) }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$5$1, {
                "data-sidebar": "sidebar",
                "data-mobile": "true",
                side: __props.side,
                class: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
                style: {
                  "--sidebar-width": unref(SIDEBAR_WIDTH_MOBILE)
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="h-full w-full flex flex-col"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "h-full w-full flex flex-col" }, [
                        renderSlot(_ctx.$slots, "default")
                      ])
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$5$1, {
                  "data-sidebar": "sidebar",
                  "data-mobile": "true",
                  side: __props.side,
                  class: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
                  style: {
                    "--sidebar-width": unref(SIDEBAR_WIDTH_MOBILE)
                  }
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "h-full w-full flex flex-col" }, [
                      renderSlot(_ctx.$slots, "default")
                    ])
                  ]),
                  _: 3
                }, 8, ["side", "style"])
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "group peer hidden md:block",
          "data-state": unref(state),
          "data-collapsible": unref(state) === "collapsed" ? __props.collapsible : "",
          "data-variant": __props.variant,
          "data-side": __props.side
        }, _attrs))}><div class="${ssrRenderClass(unref(cn)(
          "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          __props.variant === "floating" || __props.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_1rem)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
        ))}"></div><div${ssrRenderAttrs(mergeProps({
          class: unref(cn)(
            "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
            __props.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            // Adjust the padding for floating and inset variants.
            __props.variant === "floating" || __props.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_1rem_+_2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
            props.class
          )
        }, _ctx.$attrs))}><div data-sidebar="sidebar" class="h-full w-full flex flex-col bg-sidebar group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div></div></div>`);
      }
    };
  }
});
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/Sidebar.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "SidebarContent",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-sidebar": "content",
        class: unref(cn)("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarContent.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "SidebarFooter",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-sidebar": "footer",
        class: unref(cn)("flex flex-col gap-2 p-2", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarFooter.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "SidebarGroup",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-sidebar": "group",
        class: unref(cn)("relative flex w-full min-w-0 flex-col p-2", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarGroup.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "SidebarGroupAction",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        "data-sidebar": "group-action",
        as: __props.as,
        "as-child": __props.asChild,
        class: unref(cn)(
          "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 after:md:hidden",
          "group-data-[collapsible=icon]:hidden",
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
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarGroupAction.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "SidebarGroupContent",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-sidebar": "group-content",
        class: unref(cn)("w-full text-sm", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarGroupContent.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "SidebarGroupLabel",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        "data-sidebar": "group-label",
        as: __props.as,
        "as-child": __props.asChild,
        class: unref(cn)(
          "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
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
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarGroupLabel.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "SidebarHeader",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-sidebar": "header",
        class: unref(cn)("flex flex-col gap-2 p-2", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarHeader.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "SidebarInput",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$w, mergeProps({
        "data-sidebar": "input",
        class: unref(cn)(
          "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
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
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarInput.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "SidebarInset",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({
        class: unref(cn)(
          "overflow-x-auto relative flex min-h-svh flex-1 flex-col bg-background",
          "peer-data-[variant=inset]:min-h-[calc(100svh-1rem)] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset][&>header]:rounded-t-xl md:peer-data-[variant=inset]:shadow",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarInset.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "SidebarMenu",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({
        "data-sidebar": "menu",
        class: unref(cn)("flex w-full min-w-0 flex-col gap-1", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</ul>`);
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarMenu.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "SidebarMenuAction",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        "data-sidebar": "menu-action",
        class: unref(cn)(
          "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 after:md:hidden",
          "peer-data-[size=sm]/menu-button:top-1",
          "peer-data-[size=default]/menu-button:top-1.5",
          "peer-data-[size=lg]/menu-button:top-2.5",
          "group-data-[collapsible=icon]:hidden",
          __props.showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
          props.class
        ),
        as: __props.as,
        "as-child": __props.asChild
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
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarMenuAction.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "SidebarMenuBadge",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-sidebar": "menu-badge",
        class: unref(cn)(
          "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
          "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
          "peer-data-[size=sm]/menu-button:top-1",
          "peer-data-[size=default]/menu-button:top-1.5",
          "peer-data-[size=lg]/menu-button:top-2.5",
          "group-data-[collapsible=icon]:hidden",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarMenuBadge.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "SidebarMenuButtonChild",
  __ssrInlineRender: true,
  props: {
    variant: { default: "default" },
    size: { default: "default" },
    isActive: { type: Boolean },
    class: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        "data-sidebar": "menu-button",
        "data-size": __props.size,
        "data-active": __props.isActive,
        class: unref(cn)(unref(sidebarMenuButtonVariants)({ variant: __props.variant, size: __props.size }), props.class),
        as: __props.as,
        "as-child": __props.asChild
      }, _ctx.$attrs, _attrs), {
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
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarMenuButtonChild.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "SidebarMenuButton",
  __ssrInlineRender: true,
  props: {
    variant: { default: "default" },
    size: { default: "default" },
    isActive: { type: Boolean },
    class: {},
    asChild: { type: Boolean },
    as: { default: "button" },
    tooltip: {}
  },
  setup(__props) {
    const props = __props;
    const { isMobile, state } = useSidebar();
    const delegatedProps = computed(() => {
      const { tooltip, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (!__props.tooltip) {
        _push(ssrRenderComponent(_sfc_main$i, mergeProps({ ...delegatedProps.value, ..._ctx.$attrs }, _attrs), {
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
      } else {
        _push(ssrRenderComponent(_sfc_main$2$1, _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$x, { "as-child": "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$i, { ...delegatedProps.value, ..._ctx.$attrs }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "default")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$i, { ...delegatedProps.value, ..._ctx.$attrs }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 16)
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$1$1, {
                side: "right",
                align: "center",
                hidden: unref(state) !== "collapsed" || unref(isMobile)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (typeof __props.tooltip === "string") {
                      _push3(`<!--[-->${ssrInterpolate(__props.tooltip)}<!--]-->`);
                    } else {
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(__props.tooltip), null, null), _parent3, _scopeId2);
                    }
                  } else {
                    return [
                      typeof __props.tooltip === "string" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createTextVNode(toDisplayString(__props.tooltip), 1)
                      ], 64)) : (openBlock(), createBlock(resolveDynamicComponent(__props.tooltip), { key: 1 }))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$x, { "as-child": "" }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$i, { ...delegatedProps.value, ..._ctx.$attrs }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    }, 16)
                  ]),
                  _: 3
                }),
                createVNode(_sfc_main$1$1, {
                  side: "right",
                  align: "center",
                  hidden: unref(state) !== "collapsed" || unref(isMobile)
                }, {
                  default: withCtx(() => [
                    typeof __props.tooltip === "string" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createTextVNode(toDisplayString(__props.tooltip), 1)
                    ], 64)) : (openBlock(), createBlock(resolveDynamicComponent(__props.tooltip), { key: 1 }))
                  ]),
                  _: 1
                }, 8, ["hidden"])
              ];
            }
          }),
          _: 3
        }, _parent));
      }
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarMenuButton.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "SidebarMenuItem",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({
        "data-sidebar": "menu-item",
        class: unref(cn)("group/menu-item relative", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</li>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarMenuItem.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "SidebarMenuSkeleton",
  __ssrInlineRender: true,
  props: {
    showIcon: { type: Boolean },
    class: {}
  },
  setup(__props) {
    const props = __props;
    const width = computed(() => {
      return `${Math.floor(Math.random() * 40) + 50}%`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-sidebar": "menu-skeleton",
        class: unref(cn)("rounded-md h-8 flex gap-2 px-2 items-center", props.class)
      }, _attrs))}>`);
      if (__props.showIcon) {
        _push(ssrRenderComponent(_sfc_main$y, {
          class: "size-4 rounded-md",
          "data-sidebar": "menu-skeleton-icon"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$y, {
        class: "h-4 max-w-[--skeleton-width] flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: { "--skeleton-width": width.value }
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarMenuSkeleton.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "SidebarMenuSub",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({
        "data-sidebar": "menu-badge",
        class: unref(cn)(
          "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</ul>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarMenuSub.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "SidebarMenuSubButton",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    size: { default: "md" },
    isActive: { type: Boolean },
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        "data-sidebar": "menu-sub-button",
        as: __props.as,
        "as-child": __props.asChild,
        "data-size": __props.size,
        "data-active": __props.isActive,
        class: unref(cn)(
          "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
          "aria-[current=page]:bg-sidebar-accent aria-[current=page]:font-medium aria-[current=page]:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
          __props.size === "sm" && "text-xs",
          __props.size === "md" && "text-sm",
          "group-data-[collapsible=icon]:hidden",
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
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarMenuSubButton.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<li${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</li>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarMenuSubItem.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "SidebarProvider",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean, default: true },
    open: { type: Boolean, default: void 0 },
    class: {}
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    var _a;
    const props = __props;
    const emits = __emit;
    const isMobile = useMediaQuery("(max-width: 768px)");
    const openMobile = ref(false);
    const open = useVModel(props, "open", emits, {
      defaultValue: (_a = props.defaultOpen) != null ? _a : false,
      passive: props.open === void 0
    });
    function setOpen(value) {
      open.value = value;
      (void 0).cookie = `${SIDEBAR_COOKIE_NAME}=${open.value}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    }
    function setOpenMobile(value) {
      openMobile.value = value;
    }
    function toggleSidebar() {
      return isMobile.value ? setOpenMobile(!openMobile.value) : setOpen(!open.value);
    }
    useEventListener("keydown", (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    });
    const state = computed(() => open.value ? "expanded" : "collapsed");
    const sidebar = useAppConfig().sidebar;
    provideSidebarContext({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipProvider), mergeProps({ "delay-duration": 0 }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({
              "--sidebar-width": unref(SIDEBAR_WIDTH),
              "--sidebar-width-icon": unref(SIDEBAR_WIDTH_ICON)
            })}" class="${ssrRenderClass(("cn" in _ctx ? _ctx.cn : unref(cn))(`group/sidebar-wrapper flex min-h-svh w-full text-sidebar-foreground has-[[data-variant=inset]]:bg-sidebar`, [props.class, ((_a2 = unref(sidebar)) == null ? void 0 : _a2.side) === "right" ? "flex-row-reverse" : ""]))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                style: {
                  "--sidebar-width": unref(SIDEBAR_WIDTH),
                  "--sidebar-width-icon": unref(SIDEBAR_WIDTH_ICON)
                },
                class: ("cn" in _ctx ? _ctx.cn : unref(cn))(`group/sidebar-wrapper flex min-h-svh w-full text-sidebar-foreground has-[[data-variant=inset]]:bg-sidebar`, [props.class, ((_b = unref(sidebar)) == null ? void 0 : _b.side) === "right" ? "flex-row-reverse" : ""])
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 6)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarProvider.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "SidebarRail",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { toggleSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        "data-sidebar": "rail",
        "aria-label": "Toggle Sidebar",
        tabindex: -1,
        title: "Toggle Sidebar",
        class: unref(cn)(
          "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarRail.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "SidebarSeparator",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$z, mergeProps({
        "data-sidebar": "separator",
        class: unref(cn)("mx-2 w-auto bg-sidebar-border", props.class)
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarSeparator.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "SidebarTrigger",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { toggleSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2$2, mergeProps({
        "data-sidebar": "trigger",
        variant: "ghost",
        size: "icon",
        class: unref(cn)("h-4 w-4", props.class),
        onClick: unref(toggleSidebar)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(PanelLeft), null, null, _parent2, _scopeId));
            _push2(`<span class="sr-only"${_scopeId}>Toggle Sidebar</span>`);
          } else {
            return [
              createVNode(unref(PanelLeft)),
              createVNode("span", { class: "sr-only" }, "Toggle Sidebar")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarTrigger.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-[current=page]:bg-sidebar-accent aria-[current=page]:font-medium aria-[current=page]:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "SidebarNavGroup",
  __ssrInlineRender: true,
  props: {
    item: {},
    size: { default: "default" }
  },
  setup(__props) {
    const { setOpenMobile } = useSidebar();
    const openCollapsible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SidebarMenu = _sfc_main$l;
      const _component_Collapsible = _sfc_main$2$3;
      const _component_SidebarMenuItem = _sfc_main$g;
      const _component_CollapsibleTrigger = _sfc_main$A;
      const _component_SidebarMenuButton = _sfc_main$h;
      const _component_Icon = __nuxt_component_5;
      const _component_CollapsibleContent = _sfc_main$1$2;
      const _component_SidebarMenuSub = _sfc_main$e;
      const _component_SidebarMenuSubItem = __nuxt_component_8;
      const _component_SidebarMenuSubButton = _sfc_main$d;
      const _component_NuxtLink = __nuxt_component_3;
      _push(ssrRenderComponent(_component_SidebarMenu, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Collapsible, {
              key: __props.item.title,
              open: unref(openCollapsible),
              "onUpdate:open": ($event) => isRef(openCollapsible) ? openCollapsible.value = $event : null,
              "as-child": "",
              class: "group/collapsible"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SidebarMenuItem, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_CollapsibleTrigger, { "as-child": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SidebarMenuButton, {
                                tooltip: __props.item.title,
                                size: __props.size
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Icon, {
                                      name: __props.item.icon || "",
                                      mode: "svg"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<span${_scopeId5}>${ssrInterpolate(__props.item.title)}</span>`);
                                    if (__props.item.new) {
                                      _push6(`<span class="rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"${_scopeId5}> New </span>`);
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    _push6(ssrRenderComponent(_component_Icon, {
                                      name: "i-lucide-chevron-right",
                                      class: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_Icon, {
                                        name: __props.item.icon || "",
                                        mode: "svg"
                                      }, null, 8, ["name"]),
                                      createVNode("span", null, toDisplayString(__props.item.title), 1),
                                      __props.item.new ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                                      }, " New ")) : createCommentVNode("", true),
                                      createVNode(_component_Icon, {
                                        name: "i-lucide-chevron-right",
                                        class: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SidebarMenuButton, {
                                  tooltip: __props.item.title,
                                  size: __props.size
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: __props.item.icon || "",
                                      mode: "svg"
                                    }, null, 8, ["name"]),
                                    createVNode("span", null, toDisplayString(__props.item.title), 1),
                                    __props.item.new ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                                    }, " New ")) : createCommentVNode("", true),
                                    createVNode(_component_Icon, {
                                      name: "i-lucide-chevron-right",
                                      class: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["tooltip", "size"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_CollapsibleContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SidebarMenuSub, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(__props.item.children, (subItem) => {
                                      _push6(ssrRenderComponent(_component_SidebarMenuSubItem, {
                                        key: subItem.title
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_SidebarMenuSubButton, { "as-child": "" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_NuxtLink, {
                                                    to: subItem.link,
                                                    onClick: ($event) => unref(setOpenMobile)(false)
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`<span${_scopeId8}>${ssrInterpolate(subItem.title)}</span>`);
                                                        if (subItem.new) {
                                                          _push9(`<span class="rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"${_scopeId8}> New </span>`);
                                                        } else {
                                                          _push9(`<!---->`);
                                                        }
                                                      } else {
                                                        return [
                                                          createVNode("span", null, toDisplayString(subItem.title), 1),
                                                          subItem.new ? (openBlock(), createBlock("span", {
                                                            key: 0,
                                                            class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                                                          }, " New ")) : createCommentVNode("", true)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_NuxtLink, {
                                                      to: subItem.link,
                                                      onClick: ($event) => unref(setOpenMobile)(false)
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("span", null, toDisplayString(subItem.title), 1),
                                                        subItem.new ? (openBlock(), createBlock("span", {
                                                          key: 0,
                                                          class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                                                        }, " New ")) : createCommentVNode("", true)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["to", "onClick"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_SidebarMenuSubButton, { "as-child": "" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_NuxtLink, {
                                                    to: subItem.link,
                                                    onClick: ($event) => unref(setOpenMobile)(false)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", null, toDisplayString(subItem.title), 1),
                                                      subItem.new ? (openBlock(), createBlock("span", {
                                                        key: 0,
                                                        class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                                                      }, " New ")) : createCommentVNode("", true)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["to", "onClick"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.item.children, (subItem) => {
                                        return openBlock(), createBlock(_component_SidebarMenuSubItem, {
                                          key: subItem.title
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_SidebarMenuSubButton, { "as-child": "" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_NuxtLink, {
                                                  to: subItem.link,
                                                  onClick: ($event) => unref(setOpenMobile)(false)
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", null, toDisplayString(subItem.title), 1),
                                                    subItem.new ? (openBlock(), createBlock("span", {
                                                      key: 0,
                                                      class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                                                    }, " New ")) : createCommentVNode("", true)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["to", "onClick"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SidebarMenuSub, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.item.children, (subItem) => {
                                      return openBlock(), createBlock(_component_SidebarMenuSubItem, {
                                        key: subItem.title
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_SidebarMenuSubButton, { "as-child": "" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_NuxtLink, {
                                                to: subItem.link,
                                                onClick: ($event) => unref(setOpenMobile)(false)
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("span", null, toDisplayString(subItem.title), 1),
                                                  subItem.new ? (openBlock(), createBlock("span", {
                                                    key: 0,
                                                    class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                                                  }, " New ")) : createCommentVNode("", true)
                                                ]),
                                                _: 2
                                              }, 1032, ["to", "onClick"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
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
                          createVNode(_component_CollapsibleTrigger, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(_component_SidebarMenuButton, {
                                tooltip: __props.item.title,
                                size: __props.size
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: __props.item.icon || "",
                                    mode: "svg"
                                  }, null, 8, ["name"]),
                                  createVNode("span", null, toDisplayString(__props.item.title), 1),
                                  __props.item.new ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                                  }, " New ")) : createCommentVNode("", true),
                                  createVNode(_component_Icon, {
                                    name: "i-lucide-chevron-right",
                                    class: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                                  })
                                ]),
                                _: 1
                              }, 8, ["tooltip", "size"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_CollapsibleContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_SidebarMenuSub, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.item.children, (subItem) => {
                                    return openBlock(), createBlock(_component_SidebarMenuSubItem, {
                                      key: subItem.title
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_SidebarMenuSubButton, { "as-child": "" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_NuxtLink, {
                                              to: subItem.link,
                                              onClick: ($event) => unref(setOpenMobile)(false)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("span", null, toDisplayString(subItem.title), 1),
                                                subItem.new ? (openBlock(), createBlock("span", {
                                                  key: 0,
                                                  class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                                                }, " New ")) : createCommentVNode("", true)
                                              ]),
                                              _: 2
                                            }, 1032, ["to", "onClick"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
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
                } else {
                  return [
                    createVNode(_component_SidebarMenuItem, null, {
                      default: withCtx(() => [
                        createVNode(_component_CollapsibleTrigger, { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode(_component_SidebarMenuButton, {
                              tooltip: __props.item.title,
                              size: __props.size
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Icon, {
                                  name: __props.item.icon || "",
                                  mode: "svg"
                                }, null, 8, ["name"]),
                                createVNode("span", null, toDisplayString(__props.item.title), 1),
                                __props.item.new ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                                }, " New ")) : createCommentVNode("", true),
                                createVNode(_component_Icon, {
                                  name: "i-lucide-chevron-right",
                                  class: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                                })
                              ]),
                              _: 1
                            }, 8, ["tooltip", "size"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_CollapsibleContent, null, {
                          default: withCtx(() => [
                            createVNode(_component_SidebarMenuSub, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.item.children, (subItem) => {
                                  return openBlock(), createBlock(_component_SidebarMenuSubItem, {
                                    key: subItem.title
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_SidebarMenuSubButton, { "as-child": "" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_NuxtLink, {
                                            to: subItem.link,
                                            onClick: ($event) => unref(setOpenMobile)(false)
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("span", null, toDisplayString(subItem.title), 1),
                                              subItem.new ? (openBlock(), createBlock("span", {
                                                key: 0,
                                                class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                                              }, " New ")) : createCommentVNode("", true)
                                            ]),
                                            _: 2
                                          }, 1032, ["to", "onClick"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
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
            }, _parent2, _scopeId));
          } else {
            return [
              (openBlock(), createBlock(_component_Collapsible, {
                key: __props.item.title,
                open: unref(openCollapsible),
                "onUpdate:open": ($event) => isRef(openCollapsible) ? openCollapsible.value = $event : null,
                "as-child": "",
                class: "group/collapsible"
              }, {
                default: withCtx(() => [
                  createVNode(_component_SidebarMenuItem, null, {
                    default: withCtx(() => [
                      createVNode(_component_CollapsibleTrigger, { "as-child": "" }, {
                        default: withCtx(() => [
                          createVNode(_component_SidebarMenuButton, {
                            tooltip: __props.item.title,
                            size: __props.size
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: __props.item.icon || "",
                                mode: "svg"
                              }, null, 8, ["name"]),
                              createVNode("span", null, toDisplayString(__props.item.title), 1),
                              __props.item.new ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                              }, " New ")) : createCommentVNode("", true),
                              createVNode(_component_Icon, {
                                name: "i-lucide-chevron-right",
                                class: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                              })
                            ]),
                            _: 1
                          }, 8, ["tooltip", "size"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_CollapsibleContent, null, {
                        default: withCtx(() => [
                          createVNode(_component_SidebarMenuSub, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.item.children, (subItem) => {
                                return openBlock(), createBlock(_component_SidebarMenuSubItem, {
                                  key: subItem.title
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_SidebarMenuSubButton, { "as-child": "" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_NuxtLink, {
                                          to: subItem.link,
                                          onClick: ($event) => unref(setOpenMobile)(false)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, toDisplayString(subItem.title), 1),
                                            subItem.new ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                                            }, " New ")) : createCommentVNode("", true)
                                          ]),
                                          _: 2
                                        }, 1032, ["to", "onClick"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
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
              }, 8, ["open", "onUpdate:open"]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/SidebarNavGroup.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "SidebarNavLink",
  __ssrInlineRender: true,
  props: {
    item: {},
    size: { default: "default" }
  },
  setup(__props) {
    const { setOpenMobile } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SidebarMenu = _sfc_main$l;
      const _component_SidebarMenuItem = _sfc_main$g;
      const _component_SidebarMenuButton = _sfc_main$h;
      const _component_NuxtLink = __nuxt_component_3;
      const _component_Icon = __nuxt_component_5;
      _push(ssrRenderComponent(_component_SidebarMenu, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SidebarMenuItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SidebarMenuButton, {
                    "as-child": "",
                    tooltip: __props.item.title,
                    size: __props.size
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: __props.item.link,
                          onClick: ($event) => unref(setOpenMobile)(false)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Icon, {
                                name: __props.item.icon || "",
                                mode: "svg"
                              }, null, _parent5, _scopeId4));
                              _push5(`<span${_scopeId4}>${ssrInterpolate(__props.item.title)}</span>`);
                              if (__props.item.new) {
                                _push5(`<span class="rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"${_scopeId4}> New </span>`);
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                createVNode(_component_Icon, {
                                  name: __props.item.icon || "",
                                  mode: "svg"
                                }, null, 8, ["name"]),
                                createVNode("span", null, toDisplayString(__props.item.title), 1),
                                __props.item.new ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                                }, " New ")) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtLink, {
                            to: __props.item.link,
                            onClick: ($event) => unref(setOpenMobile)(false)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: __props.item.icon || "",
                                mode: "svg"
                              }, null, 8, ["name"]),
                              createVNode("span", null, toDisplayString(__props.item.title), 1),
                              __props.item.new ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                              }, " New ")) : createCommentVNode("", true)
                            ]),
                            _: 1
                          }, 8, ["to", "onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SidebarMenuButton, {
                      "as-child": "",
                      tooltip: __props.item.title,
                      size: __props.size
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtLink, {
                          to: __props.item.link,
                          onClick: ($event) => unref(setOpenMobile)(false)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              name: __props.item.icon || "",
                              mode: "svg"
                            }, null, 8, ["name"]),
                            createVNode("span", null, toDisplayString(__props.item.title), 1),
                            __props.item.new ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                            }, " New ")) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }, 8, ["to", "onClick"])
                      ]),
                      _: 1
                    }, 8, ["tooltip", "size"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SidebarMenuItem, null, {
                default: withCtx(() => [
                  createVNode(_component_SidebarMenuButton, {
                    "as-child": "",
                    tooltip: __props.item.title,
                    size: __props.size
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        to: __props.item.link,
                        onClick: ($event) => unref(setOpenMobile)(false)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: __props.item.icon || "",
                            mode: "svg"
                          }, null, 8, ["name"]),
                          createVNode("span", null, toDisplayString(__props.item.title), 1),
                          __props.item.new ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                          }, " New ")) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }, 8, ["to", "onClick"])
                    ]),
                    _: 1
                  }, 8, ["tooltip", "size"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/SidebarNavLink.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "SidebarNavHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const activeTeam = ref({
      name: "Monitoring Project",
      logo: "i-lucide-gallery-vertical-end",
      plan: "Application"
    });
    function goToDashboard() {
      router.push("/");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SidebarMenu = _sfc_main$l;
      const _component_SidebarMenuItem = _sfc_main$g;
      const _component_DropdownMenu = _sfc_main$d$1;
      const _component_DropdownMenuTrigger = _sfc_main$B;
      const _component_SidebarMenuButton = _sfc_main$h;
      const _component_Icon = __nuxt_component_5;
      _push(ssrRenderComponent(_component_SidebarMenu, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SidebarMenuItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DropdownMenu, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DropdownMenuTrigger, { "as-child": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SidebarMenuButton, {
                                size: "lg",
                                onClick: goToDashboard,
                                class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="aspect-square size-8 flex items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_Icon, {
                                      name: unref(activeTeam).logo,
                                      class: "size-4"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div><div class="grid flex-1 text-left text-sm leading-tight"${_scopeId5}><span class="truncate font-semibold"${_scopeId5}>${ssrInterpolate(unref(activeTeam).name)}</span><span class="truncate text-xs"${_scopeId5}>${ssrInterpolate(unref(activeTeam).plan)}</span></div>`);
                                    _push6(ssrRenderComponent(_component_Icon, {
                                      name: "i-lucide-chevrons-up-down",
                                      class: "ml-auto"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("div", { class: "aspect-square size-8 flex items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground" }, [
                                        createVNode(_component_Icon, {
                                          name: unref(activeTeam).logo,
                                          class: "size-4"
                                        }, null, 8, ["name"])
                                      ]),
                                      createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                        createVNode("span", { class: "truncate font-semibold" }, toDisplayString(unref(activeTeam).name), 1),
                                        createVNode("span", { class: "truncate text-xs" }, toDisplayString(unref(activeTeam).plan), 1)
                                      ]),
                                      createVNode(_component_Icon, {
                                        name: "i-lucide-chevrons-up-down",
                                        class: "ml-auto"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SidebarMenuButton, {
                                  size: "lg",
                                  onClick: goToDashboard,
                                  class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "aspect-square size-8 flex items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground" }, [
                                      createVNode(_component_Icon, {
                                        name: unref(activeTeam).logo,
                                        class: "size-4"
                                      }, null, 8, ["name"])
                                    ]),
                                    createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                      createVNode("span", { class: "truncate font-semibold" }, toDisplayString(unref(activeTeam).name), 1),
                                      createVNode("span", { class: "truncate text-xs" }, toDisplayString(unref(activeTeam).plan), 1)
                                    ]),
                                    createVNode(_component_Icon, {
                                      name: "i-lucide-chevrons-up-down",
                                      class: "ml-auto"
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
                              createVNode(_component_SidebarMenuButton, {
                                size: "lg",
                                onClick: goToDashboard,
                                class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "aspect-square size-8 flex items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground" }, [
                                    createVNode(_component_Icon, {
                                      name: unref(activeTeam).logo,
                                      class: "size-4"
                                    }, null, 8, ["name"])
                                  ]),
                                  createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                    createVNode("span", { class: "truncate font-semibold" }, toDisplayString(unref(activeTeam).name), 1),
                                    createVNode("span", { class: "truncate text-xs" }, toDisplayString(unref(activeTeam).plan), 1)
                                  ]),
                                  createVNode(_component_Icon, {
                                    name: "i-lucide-chevrons-up-down",
                                    class: "ml-auto"
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
                } else {
                  return [
                    createVNode(_component_DropdownMenu, null, {
                      default: withCtx(() => [
                        createVNode(_component_DropdownMenuTrigger, { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode(_component_SidebarMenuButton, {
                              size: "lg",
                              onClick: goToDashboard,
                              class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "aspect-square size-8 flex items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground" }, [
                                  createVNode(_component_Icon, {
                                    name: unref(activeTeam).logo,
                                    class: "size-4"
                                  }, null, 8, ["name"])
                                ]),
                                createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                  createVNode("span", { class: "truncate font-semibold" }, toDisplayString(unref(activeTeam).name), 1),
                                  createVNode("span", { class: "truncate text-xs" }, toDisplayString(unref(activeTeam).plan), 1)
                                ]),
                                createVNode(_component_Icon, {
                                  name: "i-lucide-chevrons-up-down",
                                  class: "ml-auto"
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SidebarMenuItem, null, {
                default: withCtx(() => [
                  createVNode(_component_DropdownMenu, null, {
                    default: withCtx(() => [
                      createVNode(_component_DropdownMenuTrigger, { "as-child": "" }, {
                        default: withCtx(() => [
                          createVNode(_component_SidebarMenuButton, {
                            size: "lg",
                            onClick: goToDashboard,
                            class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "aspect-square size-8 flex items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground" }, [
                                createVNode(_component_Icon, {
                                  name: unref(activeTeam).logo,
                                  class: "size-4"
                                }, null, 8, ["name"])
                              ]),
                              createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                createVNode("span", { class: "truncate font-semibold" }, toDisplayString(unref(activeTeam).name), 1),
                                createVNode("span", { class: "truncate text-xs" }, toDisplayString(unref(activeTeam).plan), 1)
                              ]),
                              createVNode(_component_Icon, {
                                name: "i-lucide-chevrons-up-down",
                                class: "ml-auto"
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
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/SidebarNavHeader.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ThemeCustomize",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme, radius, setTheme, setRadius } = useCustomize();
    const allColors = [
      "zinc",
      "rose",
      "blue",
      "green",
      "orange",
      "red",
      "slate",
      "stone",
      "gray",
      "neutral",
      "yellow",
      "violet"
    ];
    const RADII = [0, 0.25, 0.5, 0.75, 1];
    watch(theme, () => {
      setClassTheme();
    });
    watch(radius, () => {
      setStyleRadius();
    });
    function setClassTheme() {
      (void 0).body.classList.remove(
        ...allColors.map((color) => `theme-${color}`)
      );
      (void 0).body.classList.add(`theme-${theme.value}`);
    }
    function setStyleRadius() {
      (void 0).body.style.setProperty("--radius", `${radius.value}rem`);
    }
    function backgroundColor(color) {
      const bg = themes.find((theme2) => theme2.name === color);
      return `hsl(${bg == null ? void 0 : bg.activeColor.light})`;
    }
    const colorMode = useColorMode();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Label = _sfc_main$C;
      const _component_Button = _sfc_main$2$2;
      const _component_Icon = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-6" }, _attrs))}><div class="space-y-1.5">`);
      _push(ssrRenderComponent(_component_Label, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Color`);
          } else {
            return [
              createTextVNode("Color")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid grid-cols-3 gap-2"><!--[-->`);
      ssrRenderList(allColors, (color) => {
        _push(ssrRenderComponent(_component_Button, {
          class: ["justify-start gap-2", { "border-primary border-2": unref(theme) === color }],
          variant: "outline",
          onClick: ($event) => unref(setTheme)(color)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="h-5 w-5 flex items-center justify-center rounded-full" style="${ssrRenderStyle({ backgroundColor: backgroundColor(color) })}"${_scopeId}>`);
              if (unref(theme) === color) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "i-radix-icons-check",
                  size: "16",
                  class: "text-white"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</span><span class="text-xs capitalize"${_scopeId}>${ssrInterpolate(color)}</span>`);
            } else {
              return [
                createVNode("span", {
                  class: "h-5 w-5 flex items-center justify-center rounded-full",
                  style: { backgroundColor: backgroundColor(color) }
                }, [
                  unref(theme) === color ? (openBlock(), createBlock(_component_Icon, {
                    key: 0,
                    name: "i-radix-icons-check",
                    size: "16",
                    class: "text-white"
                  })) : createCommentVNode("", true)
                ], 4),
                createVNode("span", { class: "text-xs capitalize" }, toDisplayString(color), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="space-y-1.5">`);
      _push(ssrRenderComponent(_component_Label, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Radius`);
          } else {
            return [
              createTextVNode("Radius")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid grid-cols-5 gap-2"><!--[-->`);
      ssrRenderList(RADII, (r) => {
        _push(ssrRenderComponent(_component_Button, {
          class: ["justify-center gap-2", { "border-primary border-2": unref(radius) === r }],
          variant: "outline",
          onClick: ($event) => unref(setRadius)(r)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-xs capitalize"${_scopeId}>${ssrInterpolate(r)}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-xs capitalize" }, toDisplayString(r), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="space-y-1.5">`);
      _push(ssrRenderComponent(_component_Label, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Theme`);
          } else {
            return [
              createTextVNode("Theme")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid grid-cols-3 gap-2">`);
      _push(ssrRenderComponent(_component_Button, {
        class: ["justify-center gap-2", { "border-primary border-2": unref(colorMode).preference === "light" }],
        variant: "outline",
        onClick: ($event) => unref(colorMode).preference = "light"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "i-ph-sun-dim-duotone",
              size: "16"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-xs capitalize"${_scopeId}>Light</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "i-ph-sun-dim-duotone",
                size: "16"
              }),
              createVNode("span", { class: "text-xs capitalize" }, "Light")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        class: ["justify-center gap-2", { "border-primary border-2": unref(colorMode).preference === "dark" }],
        variant: "outline",
        onClick: ($event) => unref(colorMode).preference = "dark"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "i-ph-moon-stars-duotone",
              size: "16"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-xs capitalize"${_scopeId}>Dark</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "i-ph-moon-stars-duotone",
                size: "16"
              }),
              createVNode("span", { class: "text-xs capitalize" }, "Dark")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        class: ["justify-center gap-2", { "border-primary border-2": unref(colorMode).preference === "system" }],
        variant: "outline",
        onClick: ($event) => unref(colorMode).preference = "system"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "i-lucide-monitor",
              size: "16"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-xs capitalize"${_scopeId}>System</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "i-lucide-monitor",
                size: "16"
              }),
              createVNode("span", { class: "text-xs capitalize" }, "System")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ThemeCustomize.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SidebarNavFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { isMobile, setOpenMobile } = useSidebar();
    const dataLogin = useCookie("currentUser");
    const name = computed(() => {
      var _a;
      return ((_a = dataLogin.value) == null ? void 0 : _a.nama) || "Unknown";
    });
    function handleLogout() {
      const userCookie = useCookie("currentUser");
      userCookie.value = null;
      const tokenCookie = useCookie("accessToken");
      tokenCookie.value = null;
      navigateTo("/login");
    }
    const showModalTheme = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SidebarMenu = _sfc_main$l;
      const _component_SidebarMenuItem = _sfc_main$g;
      const _component_DropdownMenu = _sfc_main$d$1;
      const _component_DropdownMenuTrigger = _sfc_main$B;
      const _component_SidebarMenuButton = _sfc_main$h;
      const _component_Icon = __nuxt_component_5;
      const _component_DropdownMenuContent = _sfc_main$b$1;
      const _component_DropdownMenuLabel = _sfc_main$8$1;
      const _component_DropdownMenuSeparator = _sfc_main$5$2;
      const _component_DropdownMenuItem = _sfc_main$9$1;
      const _component_Dialog = _sfc_main$8$2;
      const _component_DialogContent = _sfc_main$6$1;
      const _component_DialogHeader = _sfc_main$3$1;
      const _component_DialogTitle = _sfc_main$1$3;
      const _component_DialogDescription = _sfc_main$5$3;
      const _component_ThemeCustomize = _sfc_main$4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_SidebarMenu, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SidebarMenuItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DropdownMenu, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DropdownMenuTrigger, { "as-child": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SidebarMenuButton, {
                                size: "lg",
                                class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="grid flex-1 text-left text-sm leading-tight"${_scopeId5}><span class="truncate font-semibold"${_scopeId5}>${ssrInterpolate(unref(name))}</span></div>`);
                                    _push6(ssrRenderComponent(_component_Icon, {
                                      name: "i-lucide-chevrons-up-down",
                                      class: "ml-auto size-4"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                        createVNode("span", { class: "truncate font-semibold" }, toDisplayString(unref(name)), 1)
                                      ]),
                                      createVNode(_component_Icon, {
                                        name: "i-lucide-chevrons-up-down",
                                        class: "ml-auto size-4"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SidebarMenuButton, {
                                  size: "lg",
                                  class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                      createVNode("span", { class: "truncate font-semibold" }, toDisplayString(unref(name)), 1)
                                    ]),
                                    createVNode(_component_Icon, {
                                      name: "i-lucide-chevrons-up-down",
                                      class: "ml-auto size-4"
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DropdownMenuContent, {
                          class: "min-w-56 w-[--radix-dropdown-menu-trigger-width] rounded-lg",
                          side: unref(isMobile) ? "bottom" : "right",
                          align: "end"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_DropdownMenuLabel, { class: "p-0 font-normal" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm"${_scopeId5}><div class="grid flex-1 text-left text-sm leading-tight"${_scopeId5}><span class="truncate font-semibold"${_scopeId5}>${ssrInterpolate(unref(name))}</span></div></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "flex items-center gap-2 px-1 py-1.5 text-left text-sm" }, [
                                        createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                          createVNode("span", { class: "truncate font-semibold" }, toDisplayString(unref(name)), 1)
                                        ])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_DropdownMenuSeparator, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_DropdownMenuItem, { onClick: handleLogout }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Icon, { name: "i-lucide-log-out" }, null, _parent6, _scopeId5));
                                    _push6(` Log out `);
                                  } else {
                                    return [
                                      createVNode(_component_Icon, { name: "i-lucide-log-out" }),
                                      createTextVNode(" Log out ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_DropdownMenuLabel, { class: "p-0 font-normal" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex items-center gap-2 px-1 py-1.5 text-left text-sm" }, [
                                      createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                        createVNode("span", { class: "truncate font-semibold" }, toDisplayString(unref(name)), 1)
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_DropdownMenuSeparator),
                                createVNode(_component_DropdownMenuItem, { onClick: handleLogout }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, { name: "i-lucide-log-out" }),
                                    createTextVNode(" Log out ")
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
                              createVNode(_component_SidebarMenuButton, {
                                size: "lg",
                                class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                    createVNode("span", { class: "truncate font-semibold" }, toDisplayString(unref(name)), 1)
                                  ]),
                                  createVNode(_component_Icon, {
                                    name: "i-lucide-chevrons-up-down",
                                    class: "ml-auto size-4"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DropdownMenuContent, {
                            class: "min-w-56 w-[--radix-dropdown-menu-trigger-width] rounded-lg",
                            side: unref(isMobile) ? "bottom" : "right",
                            align: "end"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_DropdownMenuLabel, { class: "p-0 font-normal" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center gap-2 px-1 py-1.5 text-left text-sm" }, [
                                    createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                      createVNode("span", { class: "truncate font-semibold" }, toDisplayString(unref(name)), 1)
                                    ])
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_DropdownMenuSeparator),
                              createVNode(_component_DropdownMenuItem, { onClick: handleLogout }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, { name: "i-lucide-log-out" }),
                                  createTextVNode(" Log out ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["side"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DropdownMenu, null, {
                      default: withCtx(() => [
                        createVNode(_component_DropdownMenuTrigger, { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode(_component_SidebarMenuButton, {
                              size: "lg",
                              class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                  createVNode("span", { class: "truncate font-semibold" }, toDisplayString(unref(name)), 1)
                                ]),
                                createVNode(_component_Icon, {
                                  name: "i-lucide-chevrons-up-down",
                                  class: "ml-auto size-4"
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DropdownMenuContent, {
                          class: "min-w-56 w-[--radix-dropdown-menu-trigger-width] rounded-lg",
                          side: unref(isMobile) ? "bottom" : "right",
                          align: "end"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_DropdownMenuLabel, { class: "p-0 font-normal" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center gap-2 px-1 py-1.5 text-left text-sm" }, [
                                  createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                    createVNode("span", { class: "truncate font-semibold" }, toDisplayString(unref(name)), 1)
                                  ])
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_DropdownMenuSeparator),
                            createVNode(_component_DropdownMenuItem, { onClick: handleLogout }, {
                              default: withCtx(() => [
                                createVNode(_component_Icon, { name: "i-lucide-log-out" }),
                                createTextVNode(" Log out ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["side"])
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
              createVNode(_component_SidebarMenuItem, null, {
                default: withCtx(() => [
                  createVNode(_component_DropdownMenu, null, {
                    default: withCtx(() => [
                      createVNode(_component_DropdownMenuTrigger, { "as-child": "" }, {
                        default: withCtx(() => [
                          createVNode(_component_SidebarMenuButton, {
                            size: "lg",
                            class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                createVNode("span", { class: "truncate font-semibold" }, toDisplayString(unref(name)), 1)
                              ]),
                              createVNode(_component_Icon, {
                                name: "i-lucide-chevrons-up-down",
                                class: "ml-auto size-4"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DropdownMenuContent, {
                        class: "min-w-56 w-[--radix-dropdown-menu-trigger-width] rounded-lg",
                        side: unref(isMobile) ? "bottom" : "right",
                        align: "end"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_DropdownMenuLabel, { class: "p-0 font-normal" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center gap-2 px-1 py-1.5 text-left text-sm" }, [
                                createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                  createVNode("span", { class: "truncate font-semibold" }, toDisplayString(unref(name)), 1)
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DropdownMenuSeparator),
                          createVNode(_component_DropdownMenuItem, { onClick: handleLogout }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, { name: "i-lucide-log-out" }),
                              createTextVNode(" Log out ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["side"])
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
      _push(ssrRenderComponent(_component_Dialog, {
        open: unref(showModalTheme),
        "onUpdate:open": ($event) => isRef(showModalTheme) ? showModalTheme.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Customize`);
                            } else {
                              return [
                                createTextVNode("Customize")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DialogDescription, { class: "text-xs text-muted-foreground" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Customize &amp; Preview in Real Time `);
                            } else {
                              return [
                                createTextVNode(" Customize & Preview in Real Time ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Customize")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogDescription, { class: "text-xs text-muted-foreground" }, {
                            default: withCtx(() => [
                              createTextVNode(" Customize & Preview in Real Time ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ThemeCustomize, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_DialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("Customize")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DialogDescription, { class: "text-xs text-muted-foreground" }, {
                          default: withCtx(() => [
                            createTextVNode(" Customize & Preview in Real Time ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ThemeCustomize)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DialogContent, null, {
                default: withCtx(() => [
                  createVNode(_component_DialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_DialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("Customize")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DialogDescription, { class: "text-xs text-muted-foreground" }, {
                        default: withCtx(() => [
                          createTextVNode(" Customize & Preview in Real Time ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ThemeCustomize)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/SidebarNavFooter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const navMenuTop = [
  {
    title: "Dashboard",
    icon: "i-lucide-layout-dashboard",
    link: "/"
  }
];
function useAppSettings() {
  const { sidebar: _sidebar } = useAppConfig();
  const sidebar = useCookie("app-settings", {
    default: () => ({
      collapsible: _sidebar.collapsible,
      side: _sidebar.side,
      variant: _sidebar.variant
    })
  });
  return {
    sidebar
  };
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppSidebar",
  __ssrInlineRender: true,
  setup(__props) {
    function resolveNavItemComponent(item) {
      if ("children" in item) return _sfc_main$7;
      return _sfc_main$6;
    }
    const config = useRuntimeConfig();
    config.public.apiBase;
    const user = {
      name: "Rizky Reza",
      email: "rizky.reza@plnindonesiapower.co.id",
      avatar: "/avatars/avatartion.png"
    };
    const dataNavMenu = ref([]);
    const currentUser = useCookie("currentUser");
    computed(() => {
      var _a;
      return ((_a = currentUser.value) == null ? void 0 : _a.username) || "no-email@example.com";
    });
    const accessToken = useCookie("accessToken");
    accessToken.value.token;
    const { sidebar } = useAppSettings();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Sidebar = _sfc_main$v;
      const _component_SidebarHeader = _sfc_main$o;
      const _component_LayoutSidebarNavHeader = _sfc_main$5;
      const _component_SidebarContent = _sfc_main$u;
      const _component_SidebarGroup = _sfc_main$s;
      const _component_SidebarGroupLabel = _sfc_main$p;
      const _component_SidebarFooter = _sfc_main$t;
      const _component_LayoutSidebarNavFooter = _sfc_main$3;
      const _component_SidebarRail = _sfc_main$a;
      _push(ssrRenderComponent(_component_Sidebar, mergeProps({
        collapsible: unref(sidebar).collapsible,
        side: unref(sidebar).side,
        variant: unref(sidebar).variant
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SidebarHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_LayoutSidebarNavHeader, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_LayoutSidebarNavHeader)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SidebarContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SidebarGroup, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(navMenuTop), (item, index) => {
                          ssrRenderVNode(_push4, createVNode(resolveDynamicComponent(resolveNavItemComponent(item)), {
                            key: index,
                            item,
                            size: "sm"
                          }, null), _parent4, _scopeId3);
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(navMenuTop), (item, index) => {
                            return openBlock(), createBlock(resolveDynamicComponent(resolveNavItemComponent(item)), {
                              key: index,
                              item,
                              size: "sm"
                            }, null, 8, ["item"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(dataNavMenu), (nav, indexGroup) => {
                    _push3(ssrRenderComponent(_component_SidebarGroup, { key: indexGroup }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (nav.heading) {
                            _push4(ssrRenderComponent(_component_SidebarGroupLabel, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(nav.heading)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(nav.heading), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<!--[-->`);
                          ssrRenderList(nav.items, (item, index) => {
                            ssrRenderVNode(_push4, createVNode(resolveDynamicComponent(resolveNavItemComponent(item)), {
                              key: index,
                              item
                            }, null), _parent4, _scopeId3);
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            nav.heading ? (openBlock(), createBlock(_component_SidebarGroupLabel, { key: 0 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(nav.heading), 1)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            (openBlock(true), createBlock(Fragment, null, renderList(nav.items, (item, index) => {
                              return openBlock(), createBlock(resolveDynamicComponent(resolveNavItemComponent(item)), {
                                key: index,
                                item
                              }, null, 8, ["item"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    createVNode(_component_SidebarGroup, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(navMenuTop), (item, index) => {
                          return openBlock(), createBlock(resolveDynamicComponent(resolveNavItemComponent(item)), {
                            key: index,
                            item,
                            size: "sm"
                          }, null, 8, ["item"]);
                        }), 128))
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(dataNavMenu), (nav, indexGroup) => {
                      return openBlock(), createBlock(_component_SidebarGroup, { key: indexGroup }, {
                        default: withCtx(() => [
                          nav.heading ? (openBlock(), createBlock(_component_SidebarGroupLabel, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(nav.heading), 1)
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true),
                          (openBlock(true), createBlock(Fragment, null, renderList(nav.items, (item, index) => {
                            return openBlock(), createBlock(resolveDynamicComponent(resolveNavItemComponent(item)), {
                              key: index,
                              item
                            }, null, 8, ["item"]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SidebarFooter, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_LayoutSidebarNavFooter, { user }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_LayoutSidebarNavFooter, { user })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SidebarRail, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SidebarHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_LayoutSidebarNavHeader)
                ]),
                _: 1
              }),
              createVNode(_component_SidebarContent, null, {
                default: withCtx(() => [
                  createVNode(_component_SidebarGroup, null, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(navMenuTop), (item, index) => {
                        return openBlock(), createBlock(resolveDynamicComponent(resolveNavItemComponent(item)), {
                          key: index,
                          item,
                          size: "sm"
                        }, null, 8, ["item"]);
                      }), 128))
                    ]),
                    _: 1
                  }),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(dataNavMenu), (nav, indexGroup) => {
                    return openBlock(), createBlock(_component_SidebarGroup, { key: indexGroup }, {
                      default: withCtx(() => [
                        nav.heading ? (openBlock(), createBlock(_component_SidebarGroupLabel, { key: 0 }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(nav.heading), 1)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        (openBlock(true), createBlock(Fragment, null, renderList(nav.items, (item, index) => {
                          return openBlock(), createBlock(resolveDynamicComponent(resolveNavItemComponent(item)), {
                            key: index,
                            item
                          }, null, 8, ["item"]);
                        }), 128))
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(_component_SidebarFooter, null, {
                default: withCtx(() => [
                  createVNode(_component_LayoutSidebarNavFooter, { user })
                ]),
                _: 1
              }),
              createVNode(_component_SidebarRail)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/AppSidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    function setLinks() {
      if (route.fullPath === "/") {
        return [{ title: "Home", href: "/" }];
      }
      const segments = route.fullPath.split("/").filter((item) => item !== "");
      const breadcrumbs = segments.map((item, index) => {
        const str = item.replace(/-/g, " ");
        const title = str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
        return {
          title,
          href: `/${segments.slice(0, index + 1).join("/")}`
        };
      });
      return [{ title: "Home", href: "/" }, ...breadcrumbs];
    }
    const links = ref(setLinks());
    watch(() => route.fullPath, (val) => {
      if (val) {
        links.value = setLinks();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SidebarTrigger = _sfc_main$8;
      const _component_Separator = _sfc_main$z;
      const _component_BaseBreadcrumbCustom = _sfc_main$D;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-10 h-53px flex items-center gap-4 border-b bg-background px-4 md:px-6" }, _attrs))}><div class="w-full flex items-center gap-4">`);
      _push(ssrRenderComponent(_component_SidebarTrigger, null, null, _parent));
      _push(ssrRenderComponent(_component_Separator, {
        orientation: "vertical",
        class: "h-4"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseBreadcrumbCustom, { links: unref(links) }, null, _parent));
      _push(`</div><div class="ml-auto">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SidebarProvider = _sfc_main$b;
  const _component_LayoutAppSidebar = _sfc_main$2;
  const _component_SidebarInset = _sfc_main$m;
  const _component_LayoutHeader = _sfc_main$1;
  _push(ssrRenderComponent(_component_SidebarProvider, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_LayoutAppSidebar, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SidebarInset, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_LayoutHeader, null, null, _parent3, _scopeId2));
              _push3(`<div class="min-w-0 w-full flex-1 overflow-x-auto p-4 lg:p-6"${_scopeId2}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
              _push3(`</div>`);
            } else {
              return [
                createVNode(_component_LayoutHeader),
                createVNode("div", { class: "min-w-0 w-full flex-1 overflow-x-auto p-4 lg:p-6" }, [
                  renderSlot(_ctx.$slots, "default")
                ])
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_LayoutAppSidebar),
          createVNode(_component_SidebarInset, null, {
            default: withCtx(() => [
              createVNode(_component_LayoutHeader),
              createVNode("div", { class: "min-w-0 w-full flex-1 overflow-x-auto p-4 lg:p-6" }, [
                renderSlot(_ctx.$slots, "default")
              ])
            ]),
            _: 3
          })
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-BClWApLo.mjs.map
