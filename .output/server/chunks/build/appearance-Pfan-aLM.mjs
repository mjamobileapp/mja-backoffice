import { _ as __nuxt_component_0 } from './Layout-BQ5iXvOj.mjs';
import { _ as _sfc_main$2 } from './Separator-Bs1EkIKE.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$1$1, b as _sfc_main$4, c as _sfc_main$3, d as _sfc_main$5 } from './FormMessage-D5Wcp1o-.mjs';
import { useForm, Field } from 'vee-validate';
import { s as useColorMode, t as toast, c as cn, b as buttonVariants, _ as __nuxt_component_5, a as _sfc_main$2$2 } from './server.mjs';
import { _ as _sfc_main$1$2, a as _sfc_main$6 } from './RadioGroupItem-CzBGn88l.mjs';
import { withCtx, defineComponent, createVNode, h, createTextVNode, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
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
  __name: "AppearanceForm",
  __ssrInlineRender: true,
  setup(__props) {
    const appearanceFormSchema = toTypedSchema(z.object({
      theme: z.enum(["light", "dark"], {
        required_error: "Please select a theme."
      }),
      font: z.enum(["inter", "manrope", "system"], {
        invalid_type_error: "Select a font",
        required_error: "Please select a font."
      })
    }));
    const { handleSubmit } = useForm({
      validationSchema: appearanceFormSchema,
      initialValues: {
        theme: "light",
        font: "inter"
      }
    });
    const color = useColorMode();
    handleSubmit((values) => {
      toast({
        title: "You submitted the following values:",
        description: h("pre", { class: "mt-2 w-[340px] rounded-md bg-slate-950 p-4" }, h("code", { class: "text-white" }, JSON.stringify(values, null, 2)))
      });
      if (values.theme === "dark") {
        color.preference = "dark";
      } else {
        color.preference = "light";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Separator = _sfc_main$2;
      const _component_FormField = Field;
      const _component_FormItem = _sfc_main$2$1;
      const _component_FormLabel = _sfc_main$1$1;
      const _component_FormControl = _sfc_main$4;
      const _component_Icon = __nuxt_component_5;
      const _component_FormDescription = _sfc_main$3;
      const _component_FormMessage = _sfc_main$5;
      const _component_RadioGroup = _sfc_main$1$2;
      const _component_RadioGroupItem = _sfc_main$6;
      const _component_Button = _sfc_main$2$2;
      _push(`<!--[--><div><h3 class="text-lg font-medium"> Appearance </h3><p class="text-sm text-muted-foreground"> Customize the appearance of the app. Automatically switch between day and night themes. </p></div>`);
      _push(ssrRenderComponent(_component_Separator, null, null, _parent));
      _push(`<form class="space-y-8">`);
      _push(ssrRenderComponent(_component_FormField, { name: "font" }, {
        default: withCtx(({ field }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormItem, null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormLabel, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Font`);
                      } else {
                        return [
                          createTextVNode("Font")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<div class="relative w-[200px]"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_FormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<select${ssrRenderAttrs(mergeProps({
                          class: unref(cn)(
                            unref(buttonVariants)({ variant: "outline" }),
                            "w-[200px] appearance-none font-normal"
                          )
                        }, field))}${_scopeId3}><option value="inter"${_scopeId3}> Inter </option><option value="manrope"${_scopeId3}> Manrope </option><option value="system"${_scopeId3}> System </option></select>`);
                      } else {
                        return [
                          createVNode("select", mergeProps({
                            class: unref(cn)(
                              unref(buttonVariants)({ variant: "outline" }),
                              "w-[200px] appearance-none font-normal"
                            )
                          }, field), [
                            createVNode("option", { value: "inter" }, " Inter "),
                            createVNode("option", { value: "manrope" }, " Manrope "),
                            createVNode("option", { value: "system" }, " System ")
                          ], 16)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "i-radix-icons-chevron-down",
                    class: "pointer-events-none absolute right-3 top-2.5 h-4 w-4 opacity-50"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_FormDescription, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Set the font you want to use in the dashboard. `);
                      } else {
                        return [
                          createTextVNode(" Set the font you want to use in the dashboard. ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormMessage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormLabel, null, {
                      default: withCtx(() => [
                        createTextVNode("Font")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "relative w-[200px]" }, [
                      createVNode(_component_FormControl, null, {
                        default: withCtx(() => [
                          createVNode("select", mergeProps({
                            class: unref(cn)(
                              unref(buttonVariants)({ variant: "outline" }),
                              "w-[200px] appearance-none font-normal"
                            )
                          }, field), [
                            createVNode("option", { value: "inter" }, " Inter "),
                            createVNode("option", { value: "manrope" }, " Manrope "),
                            createVNode("option", { value: "system" }, " System ")
                          ], 16)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_Icon, {
                        name: "i-radix-icons-chevron-down",
                        class: "pointer-events-none absolute right-3 top-2.5 h-4 w-4 opacity-50"
                      })
                    ]),
                    createVNode(_component_FormDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(" Set the font you want to use in the dashboard. ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormMessage)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_FormLabel, null, {
                    default: withCtx(() => [
                      createTextVNode("Font")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "relative w-[200px]" }, [
                    createVNode(_component_FormControl, null, {
                      default: withCtx(() => [
                        createVNode("select", mergeProps({
                          class: unref(cn)(
                            unref(buttonVariants)({ variant: "outline" }),
                            "w-[200px] appearance-none font-normal"
                          )
                        }, field), [
                          createVNode("option", { value: "inter" }, " Inter "),
                          createVNode("option", { value: "manrope" }, " Manrope "),
                          createVNode("option", { value: "system" }, " System ")
                        ], 16)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_Icon, {
                      name: "i-radix-icons-chevron-down",
                      class: "pointer-events-none absolute right-3 top-2.5 h-4 w-4 opacity-50"
                    })
                  ]),
                  createVNode(_component_FormDescription, null, {
                    default: withCtx(() => [
                      createTextVNode(" Set the font you want to use in the dashboard. ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_FormMessage)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FormField, {
        type: "radio",
        name: "theme"
      }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormItem, { class: "space-y-1" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormLabel, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Theme`);
                      } else {
                        return [
                          createTextVNode("Theme")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormDescription, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Select the theme for the dashboard. `);
                      } else {
                        return [
                          createTextVNode(" Select the theme for the dashboard. ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormMessage, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_RadioGroup, mergeProps({ class: "grid grid-cols-2 max-w-md gap-8 pt-2" }, componentField), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormItem, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormLabel, { class: "[&:has([data-state=checked])>div]:border-primary" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_FormControl, null, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_RadioGroupItem, {
                                            value: "light",
                                            class: "sr-only"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_RadioGroupItem, {
                                              value: "light",
                                              class: "sr-only"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(`<div class="items-center border-2 border-muted rounded-md p-1 hover:border-accent"${_scopeId5}><div class="rounded-sm bg-[#ecedef] p-2 space-y-2"${_scopeId5}><div class="rounded-md bg-white p-2 shadow-sm space-y-2"${_scopeId5}><div class="h-2 w-20 rounded-lg bg-[#ecedef]"${_scopeId5}></div><div class="h-2 w-[100px] rounded-lg bg-[#ecedef]"${_scopeId5}></div></div><div class="flex items-center rounded-md bg-white p-2 shadow-sm space-x-2"${_scopeId5}><div class="h-4 w-4 rounded-full bg-[#ecedef]"${_scopeId5}></div><div class="h-2 w-[100px] rounded-lg bg-[#ecedef]"${_scopeId5}></div></div><div class="flex items-center rounded-md bg-white p-2 shadow-sm space-x-2"${_scopeId5}><div class="h-4 w-4 rounded-full bg-[#ecedef]"${_scopeId5}></div><div class="h-2 w-[100px] rounded-lg bg-[#ecedef]"${_scopeId5}></div></div></div></div><span class="block w-full p-2 text-center font-normal"${_scopeId5}> Light </span>`);
                                  } else {
                                    return [
                                      createVNode(_component_FormControl, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_RadioGroupItem, {
                                            value: "light",
                                            class: "sr-only"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "items-center border-2 border-muted rounded-md p-1 hover:border-accent" }, [
                                        createVNode("div", { class: "rounded-sm bg-[#ecedef] p-2 space-y-2" }, [
                                          createVNode("div", { class: "rounded-md bg-white p-2 shadow-sm space-y-2" }, [
                                            createVNode("div", { class: "h-2 w-20 rounded-lg bg-[#ecedef]" }),
                                            createVNode("div", { class: "h-2 w-[100px] rounded-lg bg-[#ecedef]" })
                                          ]),
                                          createVNode("div", { class: "flex items-center rounded-md bg-white p-2 shadow-sm space-x-2" }, [
                                            createVNode("div", { class: "h-4 w-4 rounded-full bg-[#ecedef]" }),
                                            createVNode("div", { class: "h-2 w-[100px] rounded-lg bg-[#ecedef]" })
                                          ]),
                                          createVNode("div", { class: "flex items-center rounded-md bg-white p-2 shadow-sm space-x-2" }, [
                                            createVNode("div", { class: "h-4 w-4 rounded-full bg-[#ecedef]" }),
                                            createVNode("div", { class: "h-2 w-[100px] rounded-lg bg-[#ecedef]" })
                                          ])
                                        ])
                                      ]),
                                      createVNode("span", { class: "block w-full p-2 text-center font-normal" }, " Light ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormLabel, { class: "[&:has([data-state=checked])>div]:border-primary" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_FormControl, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_RadioGroupItem, {
                                          value: "light",
                                          class: "sr-only"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "items-center border-2 border-muted rounded-md p-1 hover:border-accent" }, [
                                      createVNode("div", { class: "rounded-sm bg-[#ecedef] p-2 space-y-2" }, [
                                        createVNode("div", { class: "rounded-md bg-white p-2 shadow-sm space-y-2" }, [
                                          createVNode("div", { class: "h-2 w-20 rounded-lg bg-[#ecedef]" }),
                                          createVNode("div", { class: "h-2 w-[100px] rounded-lg bg-[#ecedef]" })
                                        ]),
                                        createVNode("div", { class: "flex items-center rounded-md bg-white p-2 shadow-sm space-x-2" }, [
                                          createVNode("div", { class: "h-4 w-4 rounded-full bg-[#ecedef]" }),
                                          createVNode("div", { class: "h-2 w-[100px] rounded-lg bg-[#ecedef]" })
                                        ]),
                                        createVNode("div", { class: "flex items-center rounded-md bg-white p-2 shadow-sm space-x-2" }, [
                                          createVNode("div", { class: "h-4 w-4 rounded-full bg-[#ecedef]" }),
                                          createVNode("div", { class: "h-2 w-[100px] rounded-lg bg-[#ecedef]" })
                                        ])
                                      ])
                                    ]),
                                    createVNode("span", { class: "block w-full p-2 text-center font-normal" }, " Light ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormItem, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormLabel, { class: "[&:has([data-state=checked])>div]:border-primary" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_FormControl, null, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_RadioGroupItem, {
                                            value: "dark",
                                            class: "sr-only"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_RadioGroupItem, {
                                              value: "dark",
                                              class: "sr-only"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(`<div class="items-center border-2 border-muted rounded-md bg-popover p-1 hover:bg-accent hover:text-accent-foreground"${_scopeId5}><div class="rounded-sm bg-slate-950 p-2 space-y-2"${_scopeId5}><div class="rounded-md bg-slate-800 p-2 shadow-sm space-y-2"${_scopeId5}><div class="h-2 w-20 rounded-lg bg-slate-400"${_scopeId5}></div><div class="h-2 w-[100px] rounded-lg bg-slate-400"${_scopeId5}></div></div><div class="flex items-center rounded-md bg-slate-800 p-2 shadow-sm space-x-2"${_scopeId5}><div class="h-4 w-4 rounded-full bg-slate-400"${_scopeId5}></div><div class="h-2 w-[100px] rounded-lg bg-slate-400"${_scopeId5}></div></div><div class="flex items-center rounded-md bg-slate-800 p-2 shadow-sm space-x-2"${_scopeId5}><div class="h-4 w-4 rounded-full bg-slate-400"${_scopeId5}></div><div class="h-2 w-[100px] rounded-lg bg-slate-400"${_scopeId5}></div></div></div></div><span class="block w-full p-2 text-center font-normal"${_scopeId5}> Dark </span>`);
                                  } else {
                                    return [
                                      createVNode(_component_FormControl, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_RadioGroupItem, {
                                            value: "dark",
                                            class: "sr-only"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "items-center border-2 border-muted rounded-md bg-popover p-1 hover:bg-accent hover:text-accent-foreground" }, [
                                        createVNode("div", { class: "rounded-sm bg-slate-950 p-2 space-y-2" }, [
                                          createVNode("div", { class: "rounded-md bg-slate-800 p-2 shadow-sm space-y-2" }, [
                                            createVNode("div", { class: "h-2 w-20 rounded-lg bg-slate-400" }),
                                            createVNode("div", { class: "h-2 w-[100px] rounded-lg bg-slate-400" })
                                          ]),
                                          createVNode("div", { class: "flex items-center rounded-md bg-slate-800 p-2 shadow-sm space-x-2" }, [
                                            createVNode("div", { class: "h-4 w-4 rounded-full bg-slate-400" }),
                                            createVNode("div", { class: "h-2 w-[100px] rounded-lg bg-slate-400" })
                                          ]),
                                          createVNode("div", { class: "flex items-center rounded-md bg-slate-800 p-2 shadow-sm space-x-2" }, [
                                            createVNode("div", { class: "h-4 w-4 rounded-full bg-slate-400" }),
                                            createVNode("div", { class: "h-2 w-[100px] rounded-lg bg-slate-400" })
                                          ])
                                        ])
                                      ]),
                                      createVNode("span", { class: "block w-full p-2 text-center font-normal" }, " Dark ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormLabel, { class: "[&:has([data-state=checked])>div]:border-primary" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_FormControl, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_RadioGroupItem, {
                                          value: "dark",
                                          class: "sr-only"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "items-center border-2 border-muted rounded-md bg-popover p-1 hover:bg-accent hover:text-accent-foreground" }, [
                                      createVNode("div", { class: "rounded-sm bg-slate-950 p-2 space-y-2" }, [
                                        createVNode("div", { class: "rounded-md bg-slate-800 p-2 shadow-sm space-y-2" }, [
                                          createVNode("div", { class: "h-2 w-20 rounded-lg bg-slate-400" }),
                                          createVNode("div", { class: "h-2 w-[100px] rounded-lg bg-slate-400" })
                                        ]),
                                        createVNode("div", { class: "flex items-center rounded-md bg-slate-800 p-2 shadow-sm space-x-2" }, [
                                          createVNode("div", { class: "h-4 w-4 rounded-full bg-slate-400" }),
                                          createVNode("div", { class: "h-2 w-[100px] rounded-lg bg-slate-400" })
                                        ]),
                                        createVNode("div", { class: "flex items-center rounded-md bg-slate-800 p-2 shadow-sm space-x-2" }, [
                                          createVNode("div", { class: "h-4 w-4 rounded-full bg-slate-400" }),
                                          createVNode("div", { class: "h-2 w-[100px] rounded-lg bg-slate-400" })
                                        ])
                                      ])
                                    ]),
                                    createVNode("span", { class: "block w-full p-2 text-center font-normal" }, " Dark ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, { class: "[&:has([data-state=checked])>div]:border-primary" }, {
                                default: withCtx(() => [
                                  createVNode(_component_FormControl, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_RadioGroupItem, {
                                        value: "light",
                                        class: "sr-only"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "items-center border-2 border-muted rounded-md p-1 hover:border-accent" }, [
                                    createVNode("div", { class: "rounded-sm bg-[#ecedef] p-2 space-y-2" }, [
                                      createVNode("div", { class: "rounded-md bg-white p-2 shadow-sm space-y-2" }, [
                                        createVNode("div", { class: "h-2 w-20 rounded-lg bg-[#ecedef]" }),
                                        createVNode("div", { class: "h-2 w-[100px] rounded-lg bg-[#ecedef]" })
                                      ]),
                                      createVNode("div", { class: "flex items-center rounded-md bg-white p-2 shadow-sm space-x-2" }, [
                                        createVNode("div", { class: "h-4 w-4 rounded-full bg-[#ecedef]" }),
                                        createVNode("div", { class: "h-2 w-[100px] rounded-lg bg-[#ecedef]" })
                                      ]),
                                      createVNode("div", { class: "flex items-center rounded-md bg-white p-2 shadow-sm space-x-2" }, [
                                        createVNode("div", { class: "h-4 w-4 rounded-full bg-[#ecedef]" }),
                                        createVNode("div", { class: "h-2 w-[100px] rounded-lg bg-[#ecedef]" })
                                      ])
                                    ])
                                  ]),
                                  createVNode("span", { class: "block w-full p-2 text-center font-normal" }, " Light ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, { class: "[&:has([data-state=checked])>div]:border-primary" }, {
                                default: withCtx(() => [
                                  createVNode(_component_FormControl, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_RadioGroupItem, {
                                        value: "dark",
                                        class: "sr-only"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "items-center border-2 border-muted rounded-md bg-popover p-1 hover:bg-accent hover:text-accent-foreground" }, [
                                    createVNode("div", { class: "rounded-sm bg-slate-950 p-2 space-y-2" }, [
                                      createVNode("div", { class: "rounded-md bg-slate-800 p-2 shadow-sm space-y-2" }, [
                                        createVNode("div", { class: "h-2 w-20 rounded-lg bg-slate-400" }),
                                        createVNode("div", { class: "h-2 w-[100px] rounded-lg bg-slate-400" })
                                      ]),
                                      createVNode("div", { class: "flex items-center rounded-md bg-slate-800 p-2 shadow-sm space-x-2" }, [
                                        createVNode("div", { class: "h-4 w-4 rounded-full bg-slate-400" }),
                                        createVNode("div", { class: "h-2 w-[100px] rounded-lg bg-slate-400" })
                                      ]),
                                      createVNode("div", { class: "flex items-center rounded-md bg-slate-800 p-2 shadow-sm space-x-2" }, [
                                        createVNode("div", { class: "h-4 w-4 rounded-full bg-slate-400" }),
                                        createVNode("div", { class: "h-2 w-[100px] rounded-lg bg-slate-400" })
                                      ])
                                    ])
                                  ]),
                                  createVNode("span", { class: "block w-full p-2 text-center font-normal" }, " Dark ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormLabel, null, {
                      default: withCtx(() => [
                        createTextVNode("Theme")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(" Select the theme for the dashboard. ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormMessage),
                    createVNode(_component_RadioGroup, mergeProps({ class: "grid grid-cols-2 max-w-md gap-8 pt-2" }, componentField), {
                      default: withCtx(() => [
                        createVNode(_component_FormItem, null, {
                          default: withCtx(() => [
                            createVNode(_component_FormLabel, { class: "[&:has([data-state=checked])>div]:border-primary" }, {
                              default: withCtx(() => [
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_RadioGroupItem, {
                                      value: "light",
                                      class: "sr-only"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "items-center border-2 border-muted rounded-md p-1 hover:border-accent" }, [
                                  createVNode("div", { class: "rounded-sm bg-[#ecedef] p-2 space-y-2" }, [
                                    createVNode("div", { class: "rounded-md bg-white p-2 shadow-sm space-y-2" }, [
                                      createVNode("div", { class: "h-2 w-20 rounded-lg bg-[#ecedef]" }),
                                      createVNode("div", { class: "h-2 w-[100px] rounded-lg bg-[#ecedef]" })
                                    ]),
                                    createVNode("div", { class: "flex items-center rounded-md bg-white p-2 shadow-sm space-x-2" }, [
                                      createVNode("div", { class: "h-4 w-4 rounded-full bg-[#ecedef]" }),
                                      createVNode("div", { class: "h-2 w-[100px] rounded-lg bg-[#ecedef]" })
                                    ]),
                                    createVNode("div", { class: "flex items-center rounded-md bg-white p-2 shadow-sm space-x-2" }, [
                                      createVNode("div", { class: "h-4 w-4 rounded-full bg-[#ecedef]" }),
                                      createVNode("div", { class: "h-2 w-[100px] rounded-lg bg-[#ecedef]" })
                                    ])
                                  ])
                                ]),
                                createVNode("span", { class: "block w-full p-2 text-center font-normal" }, " Light ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormItem, null, {
                          default: withCtx(() => [
                            createVNode(_component_FormLabel, { class: "[&:has([data-state=checked])>div]:border-primary" }, {
                              default: withCtx(() => [
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_RadioGroupItem, {
                                      value: "dark",
                                      class: "sr-only"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "items-center border-2 border-muted rounded-md bg-popover p-1 hover:bg-accent hover:text-accent-foreground" }, [
                                  createVNode("div", { class: "rounded-sm bg-slate-950 p-2 space-y-2" }, [
                                    createVNode("div", { class: "rounded-md bg-slate-800 p-2 shadow-sm space-y-2" }, [
                                      createVNode("div", { class: "h-2 w-20 rounded-lg bg-slate-400" }),
                                      createVNode("div", { class: "h-2 w-[100px] rounded-lg bg-slate-400" })
                                    ]),
                                    createVNode("div", { class: "flex items-center rounded-md bg-slate-800 p-2 shadow-sm space-x-2" }, [
                                      createVNode("div", { class: "h-4 w-4 rounded-full bg-slate-400" }),
                                      createVNode("div", { class: "h-2 w-[100px] rounded-lg bg-slate-400" })
                                    ]),
                                    createVNode("div", { class: "flex items-center rounded-md bg-slate-800 p-2 shadow-sm space-x-2" }, [
                                      createVNode("div", { class: "h-4 w-4 rounded-full bg-slate-400" }),
                                      createVNode("div", { class: "h-2 w-[100px] rounded-lg bg-slate-400" })
                                    ])
                                  ])
                                ]),
                                createVNode("span", { class: "block w-full p-2 text-center font-normal" }, " Dark ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 16)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormItem, { class: "space-y-1" }, {
                default: withCtx(() => [
                  createVNode(_component_FormLabel, null, {
                    default: withCtx(() => [
                      createTextVNode("Theme")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_FormDescription, null, {
                    default: withCtx(() => [
                      createTextVNode(" Select the theme for the dashboard. ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_FormMessage),
                  createVNode(_component_RadioGroup, mergeProps({ class: "grid grid-cols-2 max-w-md gap-8 pt-2" }, componentField), {
                    default: withCtx(() => [
                      createVNode(_component_FormItem, null, {
                        default: withCtx(() => [
                          createVNode(_component_FormLabel, { class: "[&:has([data-state=checked])>div]:border-primary" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_RadioGroupItem, {
                                    value: "light",
                                    class: "sr-only"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "items-center border-2 border-muted rounded-md p-1 hover:border-accent" }, [
                                createVNode("div", { class: "rounded-sm bg-[#ecedef] p-2 space-y-2" }, [
                                  createVNode("div", { class: "rounded-md bg-white p-2 shadow-sm space-y-2" }, [
                                    createVNode("div", { class: "h-2 w-20 rounded-lg bg-[#ecedef]" }),
                                    createVNode("div", { class: "h-2 w-[100px] rounded-lg bg-[#ecedef]" })
                                  ]),
                                  createVNode("div", { class: "flex items-center rounded-md bg-white p-2 shadow-sm space-x-2" }, [
                                    createVNode("div", { class: "h-4 w-4 rounded-full bg-[#ecedef]" }),
                                    createVNode("div", { class: "h-2 w-[100px] rounded-lg bg-[#ecedef]" })
                                  ]),
                                  createVNode("div", { class: "flex items-center rounded-md bg-white p-2 shadow-sm space-x-2" }, [
                                    createVNode("div", { class: "h-4 w-4 rounded-full bg-[#ecedef]" }),
                                    createVNode("div", { class: "h-2 w-[100px] rounded-lg bg-[#ecedef]" })
                                  ])
                                ])
                              ]),
                              createVNode("span", { class: "block w-full p-2 text-center font-normal" }, " Light ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_FormItem, null, {
                        default: withCtx(() => [
                          createVNode(_component_FormLabel, { class: "[&:has([data-state=checked])>div]:border-primary" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_RadioGroupItem, {
                                    value: "dark",
                                    class: "sr-only"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "items-center border-2 border-muted rounded-md bg-popover p-1 hover:bg-accent hover:text-accent-foreground" }, [
                                createVNode("div", { class: "rounded-sm bg-slate-950 p-2 space-y-2" }, [
                                  createVNode("div", { class: "rounded-md bg-slate-800 p-2 shadow-sm space-y-2" }, [
                                    createVNode("div", { class: "h-2 w-20 rounded-lg bg-slate-400" }),
                                    createVNode("div", { class: "h-2 w-[100px] rounded-lg bg-slate-400" })
                                  ]),
                                  createVNode("div", { class: "flex items-center rounded-md bg-slate-800 p-2 shadow-sm space-x-2" }, [
                                    createVNode("div", { class: "h-4 w-4 rounded-full bg-slate-400" }),
                                    createVNode("div", { class: "h-2 w-[100px] rounded-lg bg-slate-400" })
                                  ]),
                                  createVNode("div", { class: "flex items-center rounded-md bg-slate-800 p-2 shadow-sm space-x-2" }, [
                                    createVNode("div", { class: "h-4 w-4 rounded-full bg-slate-400" }),
                                    createVNode("div", { class: "h-2 w-[100px] rounded-lg bg-slate-400" })
                                  ])
                                ])
                              ]),
                              createVNode("span", { class: "block w-full p-2 text-center font-normal" }, " Dark ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 16)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex justify-start">`);
      _push(ssrRenderComponent(_component_Button, { type: "submit" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Update preferences `);
          } else {
            return [
              createTextVNode(" Update preferences ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/settings/AppearanceForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SettingsLayout = __nuxt_component_0;
  const _component_SettingsAppearanceForm = _sfc_main$1;
  _push(ssrRenderComponent(_component_SettingsLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SettingsAppearanceForm, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_SettingsAppearanceForm)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/appearance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const appearance = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { appearance as default };
//# sourceMappingURL=appearance-Pfan-aLM.mjs.map
