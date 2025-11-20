import { _ as __nuxt_component_0 } from './Layout-BQ5iXvOj.mjs';
import { _ as _sfc_main$2 } from './Separator-Bs1EkIKE.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$1$1, c as _sfc_main$3, b as _sfc_main$4, d as _sfc_main$6 } from './FormMessage-D5Wcp1o-.mjs';
import { useForm, Field } from 'vee-validate';
import { _ as _sfc_main$5 } from './Checkbox-DuA9XWkc.mjs';
import { t as toast, a as _sfc_main$2$2 } from './server.mjs';
import { withCtx, defineComponent, createVNode, h, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './nuxt-link-DXkcJ9KT.mjs';
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
import 'radix-vue';
import './Label-BBvFeqSn.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DisplayForm",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        id: "recents",
        label: "Recents"
      },
      {
        id: "home",
        label: "Home"
      },
      {
        id: "applications",
        label: "Applications"
      },
      {
        id: "desktop",
        label: "Desktop"
      },
      {
        id: "downloads",
        label: "Downloads"
      },
      {
        id: "documents",
        label: "Documents"
      }
    ];
    const displayFormSchema = toTypedSchema(z.object({
      items: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one item."
      })
    }));
    const { handleSubmit } = useForm({
      validationSchema: displayFormSchema,
      initialValues: {
        items: ["recents", "home"]
      }
    });
    handleSubmit((values) => {
      toast({
        title: "You submitted the following values:",
        description: h("pre", { class: "mt-2 w-[340px] rounded-md bg-slate-950 p-4" }, h("code", { class: "text-white" }, JSON.stringify(values, null, 2)))
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Separator = _sfc_main$2;
      const _component_FormField = Field;
      const _component_FormItem = _sfc_main$2$1;
      const _component_FormLabel = _sfc_main$1$1;
      const _component_FormDescription = _sfc_main$3;
      const _component_FormControl = _sfc_main$4;
      const _component_Checkbox = _sfc_main$5;
      const _component_FormMessage = _sfc_main$6;
      const _component_Button = _sfc_main$2$2;
      _push(`<!--[--><div><h3 class="text-lg font-medium"> Display </h3><p class="text-sm text-muted-foreground"> Turn items on or off to control what&#39;s displayed in the app. </p></div>`);
      _push(ssrRenderComponent(_component_Separator, null, null, _parent));
      _push(`<form>`);
      _push(ssrRenderComponent(_component_FormField, { name: "items" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mb-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_FormLabel, { class: "text-base" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Sidebar `);
                      } else {
                        return [
                          createTextVNode(" Sidebar ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormDescription, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Select the items you want to display in the sidebar. `);
                      } else {
                        return [
                          createTextVNode(" Select the items you want to display in the sidebar. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><!--[-->`);
                  ssrRenderList(items, (item) => {
                    _push3(ssrRenderComponent(_component_FormField, {
                      key: item.id,
                      name: "items"
                    }, {
                      default: withCtx(({ value, handleChange }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_FormItem, {
                            key: item.id,
                            class: "flex flex-row items-start space-x-3 space-y-0"
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_FormControl, null, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_Checkbox, {
                                        checked: value.includes(item.id),
                                        "onUpdate:checked": (checked) => {
                                          if (Array.isArray(value)) {
                                            handleChange(checked ? [...value, item.id] : value.filter((id) => id !== item.id));
                                          }
                                        }
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_Checkbox, {
                                          checked: value.includes(item.id),
                                          "onUpdate:checked": (checked) => {
                                            if (Array.isArray(value)) {
                                              handleChange(checked ? [...value, item.id] : value.filter((id) => id !== item.id));
                                            }
                                          }
                                        }, null, 8, ["checked", "onUpdate:checked"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_FormLabel, { class: "font-normal" }, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item.label)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item.label), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_FormControl, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Checkbox, {
                                        checked: value.includes(item.id),
                                        "onUpdate:checked": (checked) => {
                                          if (Array.isArray(value)) {
                                            handleChange(checked ? [...value, item.id] : value.filter((id) => id !== item.id));
                                          }
                                        }
                                      }, null, 8, ["checked", "onUpdate:checked"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_FormLabel, { class: "font-normal" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.label), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            (openBlock(), createBlock(_component_FormItem, {
                              key: item.id,
                              class: "flex flex-row items-start space-x-3 space-y-0"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Checkbox, {
                                      checked: value.includes(item.id),
                                      "onUpdate:checked": (checked) => {
                                        if (Array.isArray(value)) {
                                          handleChange(checked ? [...value, item.id] : value.filter((id) => id !== item.id));
                                        }
                                      }
                                    }, null, 8, ["checked", "onUpdate:checked"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_FormLabel, { class: "font-normal" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.label), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                  _push3(ssrRenderComponent(_component_FormMessage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "mb-4" }, [
                      createVNode(_component_FormLabel, { class: "text-base" }, {
                        default: withCtx(() => [
                          createTextVNode(" Sidebar ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_FormDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(" Select the items you want to display in the sidebar. ")
                        ]),
                        _: 1
                      })
                    ]),
                    (openBlock(), createBlock(Fragment, null, renderList(items, (item) => {
                      return createVNode(_component_FormField, {
                        key: item.id,
                        name: "items"
                      }, {
                        default: withCtx(({ value, handleChange }) => [
                          (openBlock(), createBlock(_component_FormItem, {
                            key: item.id,
                            class: "flex flex-row items-start space-x-3 space-y-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Checkbox, {
                                    checked: value.includes(item.id),
                                    "onUpdate:checked": (checked) => {
                                      if (Array.isArray(value)) {
                                        handleChange(checked ? [...value, item.id] : value.filter((id) => id !== item.id));
                                      }
                                    }
                                  }, null, 8, ["checked", "onUpdate:checked"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_FormLabel, { class: "font-normal" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.label), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024))
                        ]),
                        _: 2
                      }, 1024);
                    }), 64)),
                    createVNode(_component_FormMessage)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormItem, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "mb-4" }, [
                    createVNode(_component_FormLabel, { class: "text-base" }, {
                      default: withCtx(() => [
                        createTextVNode(" Sidebar ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(" Select the items you want to display in the sidebar. ")
                      ]),
                      _: 1
                    })
                  ]),
                  (openBlock(), createBlock(Fragment, null, renderList(items, (item) => {
                    return createVNode(_component_FormField, {
                      key: item.id,
                      name: "items"
                    }, {
                      default: withCtx(({ value, handleChange }) => [
                        (openBlock(), createBlock(_component_FormItem, {
                          key: item.id,
                          class: "flex flex-row items-start space-x-3 space-y-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_FormControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_Checkbox, {
                                  checked: value.includes(item.id),
                                  "onUpdate:checked": (checked) => {
                                    if (Array.isArray(value)) {
                                      handleChange(checked ? [...value, item.id] : value.filter((id) => id !== item.id));
                                    }
                                  }
                                }, null, 8, ["checked", "onUpdate:checked"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_FormLabel, { class: "font-normal" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.label), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024))
                      ]),
                      _: 2
                    }, 1024);
                  }), 64)),
                  createVNode(_component_FormMessage)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-4 flex justify-start">`);
      _push(ssrRenderComponent(_component_Button, { type: "submit" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Update display `);
          } else {
            return [
              createTextVNode(" Update display ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/settings/DisplayForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SettingsLayout = __nuxt_component_0;
  const _component_SettingsDisplayForm = _sfc_main$1;
  _push(ssrRenderComponent(_component_SettingsLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SettingsDisplayForm, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_SettingsDisplayForm)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/display.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const display = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { display as default };
//# sourceMappingURL=display-BI67Ve43.mjs.map
