import { _ as _sfc_main$2 } from './Separator-Bs1EkIKE.mjs';
import { m as useRoute, a as _sfc_main$2$1, c as cn } from './server.mjs';
import { _ as __nuxt_component_3 } from './nuxt-link-DXkcJ9KT.mjs';
import { mergeProps, defineComponent, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SidebarNav",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const sidebarNavItems = [
      {
        title: "Profile",
        href: "/settings/profile"
      },
      {
        title: "Account",
        href: "/settings/account"
      },
      {
        title: "Appearance",
        href: "/settings/appearance"
      },
      {
        title: "Notifications",
        href: "/settings/notifications"
      },
      {
        title: "Display",
        href: "/settings/display"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$2$1;
      const _component_NuxtLink = __nuxt_component_3;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-1" }, _attrs))}><!--[-->`);
      ssrRenderList(sidebarNavItems, (item) => {
        _push(ssrRenderComponent(_component_Button, {
          key: item.title,
          variant: "ghost",
          class: unref(cn)(
            "w-full text-left justify-start items-start",
            unref(route).path === item.href && "bg-muted hover:bg-muted"
          ),
          "as-child": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: item.href
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  to: item.href
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.title), 1)
                  ]),
                  _: 2
                }, 1032, ["to"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/settings/SidebarNav.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Separator = _sfc_main$2;
  const _component_SettingsSidebarNav = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pb-16 space-y-6" }, _attrs))}><div class="space-y-0.5"><h2 class="text-2xl font-bold tracking-tight"> Settings </h2><p class="text-muted-foreground"> Manage your account settings and set e-mail preferences. </p></div>`);
  _push(ssrRenderComponent(_component_Separator, { class: "my-6" }, null, _parent));
  _push(`<div class="flex flex-col lg:flex-row space-y-6 lg:space-x-12 lg:space-y-0"><div class="w-full overflow-x-auto pb-2 lg:w-1/6 lg:pb-0">`);
  _push(ssrRenderComponent(_component_SettingsSidebarNav, null, null, _parent));
  _push(`</div><div class="flex-1 lg:max-w-2xl"><div class="space-y-6">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/settings/Layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Layout-BQ5iXvOj.mjs.map
