import { _ as _sfc_main$1 } from './Auth-BPEN_5Sg.mjs';
import { _ as _sfc_main$2 } from './SignIn-BEIq8mVp.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import './Label-BBvFeqSn.mjs';
import './server.mjs';
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
import './Input-CDkjoebz.mjs';
import 'lucide-vue-next';
import './PasswordInput-B7OtZZ5H.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutAuth = _sfc_main$1;
      const _component_AuthSignIn = _sfc_main$2;
      _push(ssrRenderComponent(_component_LayoutAuth, mergeProps({ reverse: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid mx-auto max-w-sm gap-6"${_scopeId}><div class="grid gap-2 text-center"${_scopeId}><h1 class="text-2xl font-semibold tracking-tight"${_scopeId}>Welcome Back</h1></div>`);
            _push2(ssrRenderComponent(_component_AuthSignIn, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "grid mx-auto max-w-sm gap-6" }, [
                createVNode("div", { class: "grid gap-2 text-center" }, [
                  createVNode("h1", { class: "text-2xl font-semibold tracking-tight" }, "Welcome Back")
                ]),
                createVNode(_component_AuthSignIn)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(auth)/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-Cu5UvEfl.mjs.map
