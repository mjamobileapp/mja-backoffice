import { defineComponent, computed, unref, mergeProps, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { c as cn } from './server.mjs';
import { useForwardPropsEmits, SliderRoot, SliderTrack, SliderRange, SliderThumb } from 'radix-vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Slider",
  __ssrInlineRender: true,
  props: {
    name: {},
    defaultValue: {},
    modelValue: {},
    disabled: { type: Boolean },
    orientation: {},
    dir: {},
    inverted: { type: Boolean },
    min: {},
    max: {},
    step: {},
    minStepsBetweenThumbs: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue", "valueCommit"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SliderRoot), mergeProps({
        class: unref(cn)(
          "relative flex w-full touch-none select-none items-center",
          props.class
        )
      }, unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SliderTrack), { class: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(SliderRange), { class: "absolute h-full bg-primary" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(SliderRange), { class: "absolute h-full bg-primary" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(__props.modelValue, (_2, key) => {
              _push2(ssrRenderComponent(unref(SliderThumb), {
                key,
                class: "block h-5 w-5 border-2 border-primary rounded-full bg-background ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring"
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode(unref(SliderTrack), { class: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20" }, {
                default: withCtx(() => [
                  createVNode(unref(SliderRange), { class: "absolute h-full bg-primary" })
                ]),
                _: 1
              }),
              (openBlock(true), createBlock(Fragment, null, renderList(__props.modelValue, (_2, key) => {
                return openBlock(), createBlock(unref(SliderThumb), {
                  key,
                  class: "block h-5 w-5 border-2 border-primary rounded-full bg-background ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring"
                });
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/slider/Slider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Slider-CywD5bjA.mjs.map
