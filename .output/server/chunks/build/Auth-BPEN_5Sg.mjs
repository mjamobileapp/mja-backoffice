import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Auth",
  __ssrInlineRender: true,
  props: {
    reverse: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["relative flex items-center justify-center px-4 h-dvh lg:max-w-none lg:px-0", { "flex-row-reverse": __props.reverse }]
      }, _attrs))}><div class="relative hidden h-full flex-1 flex-col bg-muted p-10 text-white lg:flex dark:border-r"><div class="absolute inset-0 bg-[url(&#39;/login-image.jpg&#39;)] bg-cover bg-center"></div><div class="absolute inset-0 bg-black/40"></div><div class="relative z-20 flex items-center text-lg font-medium"></div><div class="relative z-20 mt-auto"><blockquote class="space-y-2"><p class="text-lg">Aplikasi Monitoring Project</p><footer class="text-sm">Create By Shandy Digital Solution</footer></blockquote></div></div><div class="mx-auto flex-1 lg:p-8">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Auth-BPEN_5Sg.mjs.map
