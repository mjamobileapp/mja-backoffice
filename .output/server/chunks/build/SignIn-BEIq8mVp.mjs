import { _ as _sfc_main$1 } from './Label-BBvFeqSn.mjs';
import { _ as _sfc_main$2 } from './Input-CDkjoebz.mjs';
import { d as useRuntimeConfig, a as _sfc_main$2$1 } from './server.mjs';
import { defineComponent, ref, withCtx, createTextVNode, unref, isRef, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { Loader2 } from 'lucide-vue-next';
import { _ as _sfc_main$3 } from './PasswordInput-B7OtZZ5H.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SignIn",
  __ssrInlineRender: true,
  setup(__props) {
    const username = ref("");
    const password = ref("");
    const isLoading = ref(false);
    const config = useRuntimeConfig();
    config.public.apiBase;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Label = _sfc_main$1;
      const _component_Input = _sfc_main$2;
      const _component_Button = _sfc_main$2$1;
      _push(`<!--[--><form class="grid gap-6"><div class="grid gap-2">`);
      _push(ssrRenderComponent(_component_Label, { for: "username" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Username `);
          } else {
            return [
              createTextVNode(" Username ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Input, {
        id: "username",
        modelValue: unref(username),
        "onUpdate:modelValue": ($event) => isRef(username) ? username.value = $event : null,
        placeholder: "Enter your username",
        type: "username",
        disabled: unref(isLoading),
        "auto-capitalize": "none",
        "auto-complete": "username",
        "auto-correct": "off"
      }, null, _parent));
      _push(`</div><div class="grid gap-2"><div class="flex items-center">`);
      _push(ssrRenderComponent(_component_Label, { for: "password" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Password `);
          } else {
            return [
              createTextVNode(" Password ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        id: "password",
        modelValue: unref(password),
        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Button, {
        type: "submit",
        class: "w-full",
        disabled: unref(isLoading)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(isLoading)) {
              _push2(ssrRenderComponent(unref(Loader2), { class: "mr-2 h-4 w-4 animate-spin" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(` Login `);
          } else {
            return [
              unref(isLoading) ? (openBlock(), createBlock(unref(Loader2), {
                key: 0,
                class: "mr-2 h-4 w-4 animate-spin"
              })) : createCommentVNode("", true),
              createTextVNode(" Login ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form><div class="mt-4 text-center text-sm text-muted-foreground"></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth/SignIn.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=SignIn-BEIq8mVp.mjs.map
