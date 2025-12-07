import { _ as __nuxt_component_3 } from './nuxt-link-DXkcJ9KT.mjs';
import { _ as __nuxt_component_5 } from './server.mjs';
import { _ as _sfc_main$5, a as _sfc_main$1, b as _sfc_main$2, d as _sfc_main$3, c as _sfc_main$4 } from './CardTitle-C5Xy3z8Z.mjs';
import { _ as _sfc_main$6 } from './SignIn-BEIq8mVp.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
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
import './Label-BBvFeqSn.mjs';
import './Input-CDkjoebz.mjs';
import 'lucide-vue-next';
import './PasswordInput-B7OtZZ5H.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login-basic",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_3;
      const _component_Icon = __nuxt_component_5;
      const _component_Card = _sfc_main$5;
      const _component_CardHeader = _sfc_main$1;
      const _component_CardTitle = _sfc_main$2;
      const _component_CardDescription = _sfc_main$3;
      const _component_CardContent = _sfc_main$4;
      const _component_AuthSignIn = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center gap-6 bg-muted p-6 min-h-svh md:p-10" }, _attrs))}><div class="max-w-sm w-full flex flex-col gap-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "flex items-center self-center gap-2 font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-6 w-6 flex items-center justify-center rounded-md bg-primary text-primary-foreground"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "i-lucide-gallery-vertical-end",
              class: "size-4"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "h-6 w-6 flex items-center justify-center rounded-md bg-primary text-primary-foreground" }, [
                createVNode(_component_Icon, {
                  name: "i-lucide-gallery-vertical-end",
                  class: "size-4"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col gap-6">`);
      _push(ssrRenderComponent(_component_Card, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, { class: "text-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, { class: "text-xl" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Welcome back `);
                      } else {
                        return [
                          createTextVNode(" Welcome back ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CardDescription, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Login with your Apple or Google account `);
                      } else {
                        return [
                          createTextVNode(" Login with your Apple or Google account ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, { class: "text-xl" }, {
                      default: withCtx(() => [
                        createTextVNode(" Welcome back ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_CardDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(" Login with your Apple or Google account ")
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
                  _push3(ssrRenderComponent(_component_AuthSignIn, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AuthSignIn)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardHeader, { class: "text-center" }, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, { class: "text-xl" }, {
                    default: withCtx(() => [
                      createTextVNode(" Welcome back ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_CardDescription, null, {
                    default: withCtx(() => [
                      createTextVNode(" Login with your Apple or Google account ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, null, {
                default: withCtx(() => [
                  createVNode(_component_AuthSignIn)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-center text-balance text-xs text-muted-foreground [&amp;_a]:underline [&amp;_a]:underline-offset-4 [&amp;_a]:hover:text-primary"> By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>. </div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(auth)/login-basic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-basic-J4bQgIZn.mjs.map
