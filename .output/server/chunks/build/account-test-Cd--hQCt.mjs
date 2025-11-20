import { _ as __nuxt_component_0 } from './Layout-BQ5iXvOj.mjs';
import { _ as _sfc_main$2 } from './Separator-Bs1EkIKE.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$1$1, b as _sfc_main$4, c as _sfc_main$3$1, d as _sfc_main$5 } from './FormMessage-D5Wcp1o-.mjs';
import { Form, Field } from 'vee-validate';
import { _ as _sfc_main$3 } from './Input-CDkjoebz.mjs';
import { _ as _sfc_main$2$2, a as _sfc_main$6, b as _sfc_main$1$2 } from './PopoverTrigger-ldvWFHWS.mjs';
import { a as _sfc_main$2$3, c as cn, _ as __nuxt_component_5, t as toast } from './server.mjs';
import { _ as _sfc_main$b } from './CalendarPrevButton-B7sdA_QV.mjs';
import { _ as _sfc_main$8, a as _sfc_main$4$1, b as _sfc_main$6$1, c as _sfc_main$2$4, d as _sfc_main$5$1, e as _sfc_main$3$2 } from './CommandShortcut-RFMOhYmh.mjs';
import { withCtx, defineComponent, createVNode, ref, unref, createTextVNode, mergeProps, toDisplayString, createBlock, openBlock, Fragment, renderList, h, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderList } from 'vue/server-renderer';
import { DateFormatter, getLocalTimeZone, today, CalendarDate } from '@internationalized/date';
import { toTypedSchema } from '@vee-validate/zod';
import { ChevronsUpDown, Check } from 'lucide-vue-next';
import { toDate } from 'radix-vue/date';
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
import './DialogTrigger-BW6jyQ7n.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AccountForm",
  __ssrInlineRender: true,
  setup(__props) {
    const open = ref(false);
    const dateValue = ref();
    const placeholder = ref();
    const languages = [
      { label: "English", value: "en" },
      { label: "French", value: "fr" },
      { label: "German", value: "de" },
      { label: "Indonesia", value: "id" },
      { label: "Spanish", value: "es" },
      { label: "Portuguese", value: "pt" },
      { label: "Russian", value: "ru" },
      { label: "Japanese", value: "ja" },
      { label: "Korean", value: "ko" },
      { label: "Chinese", value: "zh" }
    ];
    const df = new DateFormatter("en-US", {
      dateStyle: "long"
    });
    const accountFormSchema = toTypedSchema(z.object({
      name: z.string({
        required_error: "Required."
      }).min(2, {
        message: "Name must be at least 2 characters."
      }).max(30, {
        message: "Name must not be longer than 30 characters."
      }),
      dob: z.string().datetime().optional().refine((date) => date !== void 0, "Please select a valid date."),
      language: z.string().min(1, "Please select a language.")
    }));
    async function onSubmit(values) {
      toast({
        title: "You submitted the following values:",
        description: h("pre", { class: "mt-2 w-[340px] rounded-md bg-slate-950 p-4" }, h("code", { class: "text-white" }, JSON.stringify(values, null, 2)))
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Separator = _sfc_main$2;
      const _component_Form = Form;
      const _component_FormField = Field;
      const _component_FormItem = _sfc_main$2$1;
      const _component_FormLabel = _sfc_main$1$1;
      const _component_FormControl = _sfc_main$4;
      const _component_Input = _sfc_main$3;
      const _component_FormDescription = _sfc_main$3$1;
      const _component_FormMessage = _sfc_main$5;
      const _component_Popover = _sfc_main$2$2;
      const _component_PopoverTrigger = _sfc_main$6;
      const _component_Button = _sfc_main$2$3;
      const _component_Icon = __nuxt_component_5;
      const _component_PopoverContent = _sfc_main$1$2;
      const _component_Calendar = _sfc_main$b;
      const _component_Command = _sfc_main$8;
      const _component_CommandInput = _sfc_main$4$1;
      const _component_CommandEmpty = _sfc_main$6$1;
      const _component_CommandList = _sfc_main$2$4;
      const _component_CommandGroup = _sfc_main$5$1;
      const _component_CommandItem = _sfc_main$3$2;
      _push(`<!--[--><div><h3 class="text-lg font-medium"> Account </h3><p class="text-sm text-muted-foreground"> Update your account settings. Set your preferred language and timezone. </p></div>`);
      _push(ssrRenderComponent(_component_Separator, null, null, _parent));
      _push(ssrRenderComponent(_component_Form, {
        "validation-schema": unref(accountFormSchema),
        class: "space-y-8",
        onSubmit
      }, {
        default: withCtx(({ setFieldValue }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormField, { name: "name" }, {
              default: withCtx(({ componentField }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormItem, null, {
                    default: withCtx((_, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormLabel, null, {
                          default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Name`);
                            } else {
                              return [
                                createTextVNode("Name")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormControl, null, {
                          default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Input, mergeProps({
                                type: "text",
                                placeholder: "Your name"
                              }, componentField), null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Input, mergeProps({
                                  type: "text",
                                  placeholder: "Your name"
                                }, componentField), null, 16)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormDescription, null, {
                          default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` This is the name that will be displayed on your profile and in emails. `);
                            } else {
                              return [
                                createTextVNode(" This is the name that will be displayed on your profile and in emails. ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormMessage, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FormLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("Name")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_Input, mergeProps({
                                type: "text",
                                placeholder: "Your name"
                              }, componentField), null, 16)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_FormDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(" This is the name that will be displayed on your profile and in emails. ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormMessage)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormItem, null, {
                      default: withCtx(() => [
                        createVNode(_component_FormLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("Name")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_Input, mergeProps({
                              type: "text",
                              placeholder: "Your name"
                            }, componentField), null, 16)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_FormDescription, null, {
                          default: withCtx(() => [
                            createTextVNode(" This is the name that will be displayed on your profile and in emails. ")
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
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormField, { name: "dob" }, {
              default: withCtx(({ field, value }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormItem, { class: "flex flex-col" }, {
                    default: withCtx((_, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormLabel, null, {
                          default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Date of birth`);
                            } else {
                              return [
                                createTextVNode("Date of birth")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Popover, null, {
                          default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_PopoverTrigger, { "as-child": "" }, {
                                default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_FormControl, null, {
                                      default: withCtx((_4, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_Button, {
                                            variant: "outline",
                                            class: unref(cn)(
                                              "w-[240px] justify-start text-left font-normal",
                                              !value && "text-muted-foreground"
                                            )
                                          }, {
                                            default: withCtx((_5, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_Icon, {
                                                  name: "i-radix-icons-calendar",
                                                  class: "mr-2 h-4 w-4 opacity-50"
                                                }, null, _parent8, _scopeId7));
                                                _push8(`<span${_scopeId7}>${ssrInterpolate(value ? unref(df).format(unref(toDate)(dateValue.value, unref(getLocalTimeZone)())) : "Pick a date")}</span>`);
                                              } else {
                                                return [
                                                  createVNode(_component_Icon, {
                                                    name: "i-radix-icons-calendar",
                                                    class: "mr-2 h-4 w-4 opacity-50"
                                                  }),
                                                  createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(dateValue.value, unref(getLocalTimeZone)())) : "Pick a date"), 1)
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_Button, {
                                              variant: "outline",
                                              class: unref(cn)(
                                                "w-[240px] justify-start text-left font-normal",
                                                !value && "text-muted-foreground"
                                              )
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_Icon, {
                                                  name: "i-radix-icons-calendar",
                                                  class: "mr-2 h-4 w-4 opacity-50"
                                                }),
                                                createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(dateValue.value, unref(getLocalTimeZone)())) : "Pick a date"), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["class"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_FormControl, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Button, {
                                            variant: "outline",
                                            class: unref(cn)(
                                              "w-[240px] justify-start text-left font-normal",
                                              !value && "text-muted-foreground"
                                            )
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_Icon, {
                                                name: "i-radix-icons-calendar",
                                                class: "mr-2 h-4 w-4 opacity-50"
                                              }),
                                              createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(dateValue.value, unref(getLocalTimeZone)())) : "Pick a date"), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["class"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_PopoverContent, { class: "p-0" }, {
                                default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Calendar, {
                                      placeholder: placeholder.value,
                                      "onUpdate:placeholder": ($event) => placeholder.value = $event,
                                      modelValue: dateValue.value,
                                      "onUpdate:modelValue": [($event) => dateValue.value = $event, (v) => {
                                        if (v) {
                                          dateValue.value = v;
                                          setFieldValue("dob", unref(toDate)(v).toISOString());
                                        } else {
                                          dateValue.value = void 0;
                                          setFieldValue("dob", void 0);
                                        }
                                      }],
                                      "calendar-label": "Date of birth",
                                      "initial-focus": "",
                                      "min-value": new (unref(CalendarDate))(1900, 1, 1),
                                      "max-value": unref(today)(unref(getLocalTimeZone)())
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_Calendar, {
                                        placeholder: placeholder.value,
                                        "onUpdate:placeholder": ($event) => placeholder.value = $event,
                                        modelValue: dateValue.value,
                                        "onUpdate:modelValue": [($event) => dateValue.value = $event, (v) => {
                                          if (v) {
                                            dateValue.value = v;
                                            setFieldValue("dob", unref(toDate)(v).toISOString());
                                          } else {
                                            dateValue.value = void 0;
                                            setFieldValue("dob", void 0);
                                          }
                                        }],
                                        "calendar-label": "Date of birth",
                                        "initial-focus": "",
                                        "min-value": new (unref(CalendarDate))(1900, 1, 1),
                                        "max-value": unref(today)(unref(getLocalTimeZone)())
                                      }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue", "min-value", "max-value"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_FormControl, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Button, {
                                          variant: "outline",
                                          class: unref(cn)(
                                            "w-[240px] justify-start text-left font-normal",
                                            !value && "text-muted-foreground"
                                          )
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Icon, {
                                              name: "i-radix-icons-calendar",
                                              class: "mr-2 h-4 w-4 opacity-50"
                                            }),
                                            createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(dateValue.value, unref(getLocalTimeZone)())) : "Pick a date"), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["class"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_PopoverContent, { class: "p-0" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Calendar, {
                                      placeholder: placeholder.value,
                                      "onUpdate:placeholder": ($event) => placeholder.value = $event,
                                      modelValue: dateValue.value,
                                      "onUpdate:modelValue": [($event) => dateValue.value = $event, (v) => {
                                        if (v) {
                                          dateValue.value = v;
                                          setFieldValue("dob", unref(toDate)(v).toISOString());
                                        } else {
                                          dateValue.value = void 0;
                                          setFieldValue("dob", void 0);
                                        }
                                      }],
                                      "calendar-label": "Date of birth",
                                      "initial-focus": "",
                                      "min-value": new (unref(CalendarDate))(1900, 1, 1),
                                      "max-value": unref(today)(unref(getLocalTimeZone)())
                                    }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue", "min-value", "max-value"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormDescription, null, {
                          default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Your date of birth is used to calculate your age. `);
                            } else {
                              return [
                                createTextVNode(" Your date of birth is used to calculate your age. ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormMessage, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FormLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("Date of birth")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Popover, null, {
                            default: withCtx(() => [
                              createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_FormControl, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Button, {
                                        variant: "outline",
                                        class: unref(cn)(
                                          "w-[240px] justify-start text-left font-normal",
                                          !value && "text-muted-foreground"
                                        )
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "i-radix-icons-calendar",
                                            class: "mr-2 h-4 w-4 opacity-50"
                                          }),
                                          createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(dateValue.value, unref(getLocalTimeZone)())) : "Pick a date"), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["class"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_PopoverContent, { class: "p-0" }, {
                                default: withCtx(() => [
                                  createVNode(_component_Calendar, {
                                    placeholder: placeholder.value,
                                    "onUpdate:placeholder": ($event) => placeholder.value = $event,
                                    modelValue: dateValue.value,
                                    "onUpdate:modelValue": [($event) => dateValue.value = $event, (v) => {
                                      if (v) {
                                        dateValue.value = v;
                                        setFieldValue("dob", unref(toDate)(v).toISOString());
                                      } else {
                                        dateValue.value = void 0;
                                        setFieldValue("dob", void 0);
                                      }
                                    }],
                                    "calendar-label": "Date of birth",
                                    "initial-focus": "",
                                    "min-value": new (unref(CalendarDate))(1900, 1, 1),
                                    "max-value": unref(today)(unref(getLocalTimeZone)())
                                  }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue", "min-value", "max-value"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_FormDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(" Your date of birth is used to calculate your age. ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormMessage)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<input${ssrRenderAttrs(mergeProps({ type: "hidden" }, field))}${_scopeId2}>`);
                } else {
                  return [
                    createVNode(_component_FormItem, { class: "flex flex-col" }, {
                      default: withCtx(() => [
                        createVNode(_component_FormLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("Date of birth")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Popover, null, {
                          default: withCtx(() => [
                            createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                              default: withCtx(() => [
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Button, {
                                      variant: "outline",
                                      class: unref(cn)(
                                        "w-[240px] justify-start text-left font-normal",
                                        !value && "text-muted-foreground"
                                      )
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "i-radix-icons-calendar",
                                          class: "mr-2 h-4 w-4 opacity-50"
                                        }),
                                        createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(dateValue.value, unref(getLocalTimeZone)())) : "Pick a date"), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["class"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_PopoverContent, { class: "p-0" }, {
                              default: withCtx(() => [
                                createVNode(_component_Calendar, {
                                  placeholder: placeholder.value,
                                  "onUpdate:placeholder": ($event) => placeholder.value = $event,
                                  modelValue: dateValue.value,
                                  "onUpdate:modelValue": [($event) => dateValue.value = $event, (v) => {
                                    if (v) {
                                      dateValue.value = v;
                                      setFieldValue("dob", unref(toDate)(v).toISOString());
                                    } else {
                                      dateValue.value = void 0;
                                      setFieldValue("dob", void 0);
                                    }
                                  }],
                                  "calendar-label": "Date of birth",
                                  "initial-focus": "",
                                  "min-value": new (unref(CalendarDate))(1900, 1, 1),
                                  "max-value": unref(today)(unref(getLocalTimeZone)())
                                }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue", "min-value", "max-value"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_FormDescription, null, {
                          default: withCtx(() => [
                            createTextVNode(" Your date of birth is used to calculate your age. ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormMessage)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode("input", mergeProps({ type: "hidden" }, field), null, 16)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormField, { name: "language" }, {
              default: withCtx(({ value }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormItem, { class: "flex flex-col" }, {
                    default: withCtx((_, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormLabel, null, {
                          default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Language`);
                            } else {
                              return [
                                createTextVNode("Language")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Popover, {
                          open: open.value,
                          "onUpdate:open": ($event) => open.value = $event
                        }, {
                          default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_PopoverTrigger, { "as-child": "" }, {
                                default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_FormControl, null, {
                                      default: withCtx((_4, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_Button, {
                                            variant: "outline",
                                            role: "combobox",
                                            "aria-expanded": open.value,
                                            class: unref(cn)(
                                              "w-[200px] justify-between",
                                              !value && "text-muted-foreground"
                                            )
                                          }, {
                                            default: withCtx((_5, _push8, _parent8, _scopeId7) => {
                                              var _a, _b;
                                              if (_push8) {
                                                _push8(`${ssrInterpolate(value ? (_a = languages.find(
                                                  (language) => language.value === value
                                                )) == null ? void 0 : _a.label : "Select language...")} `);
                                                _push8(ssrRenderComponent(unref(ChevronsUpDown), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(value ? (_b = languages.find(
                                                    (language) => language.value === value
                                                  )) == null ? void 0 : _b.label : "Select language...") + " ", 1),
                                                  createVNode(unref(ChevronsUpDown), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_Button, {
                                              variant: "outline",
                                              role: "combobox",
                                              "aria-expanded": open.value,
                                              class: unref(cn)(
                                                "w-[200px] justify-between",
                                                !value && "text-muted-foreground"
                                              )
                                            }, {
                                              default: withCtx(() => {
                                                var _a;
                                                return [
                                                  createTextVNode(toDisplayString(value ? (_a = languages.find(
                                                    (language) => language.value === value
                                                  )) == null ? void 0 : _a.label : "Select language...") + " ", 1),
                                                  createVNode(unref(ChevronsUpDown), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                                                ];
                                              }),
                                              _: 2
                                            }, 1032, ["aria-expanded", "class"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_FormControl, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Button, {
                                            variant: "outline",
                                            role: "combobox",
                                            "aria-expanded": open.value,
                                            class: unref(cn)(
                                              "w-[200px] justify-between",
                                              !value && "text-muted-foreground"
                                            )
                                          }, {
                                            default: withCtx(() => {
                                              var _a;
                                              return [
                                                createTextVNode(toDisplayString(value ? (_a = languages.find(
                                                  (language) => language.value === value
                                                )) == null ? void 0 : _a.label : "Select language...") + " ", 1),
                                                createVNode(unref(ChevronsUpDown), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                                              ];
                                            }),
                                            _: 2
                                          }, 1032, ["aria-expanded", "class"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_PopoverContent, { class: "w-[200px] p-0" }, {
                                default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Command, null, {
                                      default: withCtx((_4, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_CommandInput, { placeholder: "Search language..." }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_CommandEmpty, null, {
                                            default: withCtx((_5, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`No language found.`);
                                              } else {
                                                return [
                                                  createTextVNode("No language found.")
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_CommandList, null, {
                                            default: withCtx((_5, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_CommandGroup, null, {
                                                  default: withCtx((_6, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<!--[-->`);
                                                      ssrRenderList(languages, (language) => {
                                                        _push9(ssrRenderComponent(_component_CommandItem, {
                                                          key: language.value,
                                                          value: language.label,
                                                          onSelect: () => {
                                                            setFieldValue("language", language.value);
                                                            open.value = false;
                                                          }
                                                        }, {
                                                          default: withCtx((_7, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(ssrRenderComponent(unref(Check), {
                                                                class: unref(cn)(
                                                                  "mr-2 h-4 w-4",
                                                                  value === language.value ? "opacity-100" : "opacity-0"
                                                                )
                                                              }, null, _parent10, _scopeId9));
                                                              _push10(` ${ssrInterpolate(language.label)}`);
                                                            } else {
                                                              return [
                                                                createVNode(unref(Check), {
                                                                  class: unref(cn)(
                                                                    "mr-2 h-4 w-4",
                                                                    value === language.value ? "opacity-100" : "opacity-0"
                                                                  )
                                                                }, null, 8, ["class"]),
                                                                createTextVNode(" " + toDisplayString(language.label), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      });
                                                      _push9(`<!--]-->`);
                                                    } else {
                                                      return [
                                                        (openBlock(), createBlock(Fragment, null, renderList(languages, (language) => {
                                                          return createVNode(_component_CommandItem, {
                                                            key: language.value,
                                                            value: language.label,
                                                            onSelect: () => {
                                                              setFieldValue("language", language.value);
                                                              open.value = false;
                                                            }
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(unref(Check), {
                                                                class: unref(cn)(
                                                                  "mr-2 h-4 w-4",
                                                                  value === language.value ? "opacity-100" : "opacity-0"
                                                                )
                                                              }, null, 8, ["class"]),
                                                              createTextVNode(" " + toDisplayString(language.label), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["value", "onSelect"]);
                                                        }), 64))
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_CommandGroup, null, {
                                                    default: withCtx(() => [
                                                      (openBlock(), createBlock(Fragment, null, renderList(languages, (language) => {
                                                        return createVNode(_component_CommandItem, {
                                                          key: language.value,
                                                          value: language.label,
                                                          onSelect: () => {
                                                            setFieldValue("language", language.value);
                                                            open.value = false;
                                                          }
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(unref(Check), {
                                                              class: unref(cn)(
                                                                "mr-2 h-4 w-4",
                                                                value === language.value ? "opacity-100" : "opacity-0"
                                                              )
                                                            }, null, 8, ["class"]),
                                                            createTextVNode(" " + toDisplayString(language.label), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["value", "onSelect"]);
                                                      }), 64))
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_CommandInput, { placeholder: "Search language..." }),
                                            createVNode(_component_CommandEmpty, null, {
                                              default: withCtx(() => [
                                                createTextVNode("No language found.")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_CommandList, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_CommandGroup, null, {
                                                  default: withCtx(() => [
                                                    (openBlock(), createBlock(Fragment, null, renderList(languages, (language) => {
                                                      return createVNode(_component_CommandItem, {
                                                        key: language.value,
                                                        value: language.label,
                                                        onSelect: () => {
                                                          setFieldValue("language", language.value);
                                                          open.value = false;
                                                        }
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(unref(Check), {
                                                            class: unref(cn)(
                                                              "mr-2 h-4 w-4",
                                                              value === language.value ? "opacity-100" : "opacity-0"
                                                            )
                                                          }, null, 8, ["class"]),
                                                          createTextVNode(" " + toDisplayString(language.label), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["value", "onSelect"]);
                                                    }), 64))
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_Command, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_CommandInput, { placeholder: "Search language..." }),
                                          createVNode(_component_CommandEmpty, null, {
                                            default: withCtx(() => [
                                              createTextVNode("No language found.")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_CommandList, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_CommandGroup, null, {
                                                default: withCtx(() => [
                                                  (openBlock(), createBlock(Fragment, null, renderList(languages, (language) => {
                                                    return createVNode(_component_CommandItem, {
                                                      key: language.value,
                                                      value: language.label,
                                                      onSelect: () => {
                                                        setFieldValue("language", language.value);
                                                        open.value = false;
                                                      }
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(unref(Check), {
                                                          class: unref(cn)(
                                                            "mr-2 h-4 w-4",
                                                            value === language.value ? "opacity-100" : "opacity-0"
                                                          )
                                                        }, null, 8, ["class"]),
                                                        createTextVNode(" " + toDisplayString(language.label), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["value", "onSelect"]);
                                                  }), 64))
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_FormControl, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Button, {
                                          variant: "outline",
                                          role: "combobox",
                                          "aria-expanded": open.value,
                                          class: unref(cn)(
                                            "w-[200px] justify-between",
                                            !value && "text-muted-foreground"
                                          )
                                        }, {
                                          default: withCtx(() => {
                                            var _a;
                                            return [
                                              createTextVNode(toDisplayString(value ? (_a = languages.find(
                                                (language) => language.value === value
                                              )) == null ? void 0 : _a.label : "Select language...") + " ", 1),
                                              createVNode(unref(ChevronsUpDown), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                                            ];
                                          }),
                                          _: 2
                                        }, 1032, ["aria-expanded", "class"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_PopoverContent, { class: "w-[200px] p-0" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Command, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_CommandInput, { placeholder: "Search language..." }),
                                        createVNode(_component_CommandEmpty, null, {
                                          default: withCtx(() => [
                                            createTextVNode("No language found.")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_CommandList, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_CommandGroup, null, {
                                              default: withCtx(() => [
                                                (openBlock(), createBlock(Fragment, null, renderList(languages, (language) => {
                                                  return createVNode(_component_CommandItem, {
                                                    key: language.value,
                                                    value: language.label,
                                                    onSelect: () => {
                                                      setFieldValue("language", language.value);
                                                      open.value = false;
                                                    }
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(Check), {
                                                        class: unref(cn)(
                                                          "mr-2 h-4 w-4",
                                                          value === language.value ? "opacity-100" : "opacity-0"
                                                        )
                                                      }, null, 8, ["class"]),
                                                      createTextVNode(" " + toDisplayString(language.label), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["value", "onSelect"]);
                                                }), 64))
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormDescription, null, {
                          default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` This is the language that will be used in the dashboard. `);
                            } else {
                              return [
                                createTextVNode(" This is the language that will be used in the dashboard. ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormMessage, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FormLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("Language")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Popover, {
                            open: open.value,
                            "onUpdate:open": ($event) => open.value = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_FormControl, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Button, {
                                        variant: "outline",
                                        role: "combobox",
                                        "aria-expanded": open.value,
                                        class: unref(cn)(
                                          "w-[200px] justify-between",
                                          !value && "text-muted-foreground"
                                        )
                                      }, {
                                        default: withCtx(() => {
                                          var _a;
                                          return [
                                            createTextVNode(toDisplayString(value ? (_a = languages.find(
                                              (language) => language.value === value
                                            )) == null ? void 0 : _a.label : "Select language...") + " ", 1),
                                            createVNode(unref(ChevronsUpDown), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                                          ];
                                        }),
                                        _: 2
                                      }, 1032, ["aria-expanded", "class"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_PopoverContent, { class: "w-[200px] p-0" }, {
                                default: withCtx(() => [
                                  createVNode(_component_Command, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_CommandInput, { placeholder: "Search language..." }),
                                      createVNode(_component_CommandEmpty, null, {
                                        default: withCtx(() => [
                                          createTextVNode("No language found.")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_CommandList, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_CommandGroup, null, {
                                            default: withCtx(() => [
                                              (openBlock(), createBlock(Fragment, null, renderList(languages, (language) => {
                                                return createVNode(_component_CommandItem, {
                                                  key: language.value,
                                                  value: language.label,
                                                  onSelect: () => {
                                                    setFieldValue("language", language.value);
                                                    open.value = false;
                                                  }
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(Check), {
                                                      class: unref(cn)(
                                                        "mr-2 h-4 w-4",
                                                        value === language.value ? "opacity-100" : "opacity-0"
                                                      )
                                                    }, null, 8, ["class"]),
                                                    createTextVNode(" " + toDisplayString(language.label), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value", "onSelect"]);
                                              }), 64))
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["open", "onUpdate:open"]),
                          createVNode(_component_FormDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(" This is the language that will be used in the dashboard. ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormMessage)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormItem, { class: "flex flex-col" }, {
                      default: withCtx(() => [
                        createVNode(_component_FormLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("Language")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Popover, {
                          open: open.value,
                          "onUpdate:open": ($event) => open.value = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                              default: withCtx(() => [
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Button, {
                                      variant: "outline",
                                      role: "combobox",
                                      "aria-expanded": open.value,
                                      class: unref(cn)(
                                        "w-[200px] justify-between",
                                        !value && "text-muted-foreground"
                                      )
                                    }, {
                                      default: withCtx(() => {
                                        var _a;
                                        return [
                                          createTextVNode(toDisplayString(value ? (_a = languages.find(
                                            (language) => language.value === value
                                          )) == null ? void 0 : _a.label : "Select language...") + " ", 1),
                                          createVNode(unref(ChevronsUpDown), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                                        ];
                                      }),
                                      _: 2
                                    }, 1032, ["aria-expanded", "class"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_PopoverContent, { class: "w-[200px] p-0" }, {
                              default: withCtx(() => [
                                createVNode(_component_Command, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_CommandInput, { placeholder: "Search language..." }),
                                    createVNode(_component_CommandEmpty, null, {
                                      default: withCtx(() => [
                                        createTextVNode("No language found.")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_CommandList, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_CommandGroup, null, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(Fragment, null, renderList(languages, (language) => {
                                              return createVNode(_component_CommandItem, {
                                                key: language.value,
                                                value: language.label,
                                                onSelect: () => {
                                                  setFieldValue("language", language.value);
                                                  open.value = false;
                                                }
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(Check), {
                                                    class: unref(cn)(
                                                      "mr-2 h-4 w-4",
                                                      value === language.value ? "opacity-100" : "opacity-0"
                                                    )
                                                  }, null, 8, ["class"]),
                                                  createTextVNode(" " + toDisplayString(language.label), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["value", "onSelect"]);
                                            }), 64))
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["open", "onUpdate:open"]),
                        createVNode(_component_FormDescription, null, {
                          default: withCtx(() => [
                            createTextVNode(" This is the language that will be used in the dashboard. ")
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
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div class="flex justify-start"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, { type: "submit" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Update account `);
                } else {
                  return [
                    createTextVNode(" Update account ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_FormField, { name: "name" }, {
                default: withCtx(({ componentField }) => [
                  createVNode(_component_FormItem, null, {
                    default: withCtx(() => [
                      createVNode(_component_FormLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("Name")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_FormControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_Input, mergeProps({
                            type: "text",
                            placeholder: "Your name"
                          }, componentField), null, 16)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_FormDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(" This is the name that will be displayed on your profile and in emails. ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_FormMessage)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 1
              }),
              createVNode(_component_FormField, { name: "dob" }, {
                default: withCtx(({ field, value }) => [
                  createVNode(_component_FormItem, { class: "flex flex-col" }, {
                    default: withCtx(() => [
                      createVNode(_component_FormLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("Date of birth")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Popover, null, {
                        default: withCtx(() => [
                          createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Button, {
                                    variant: "outline",
                                    class: unref(cn)(
                                      "w-[240px] justify-start text-left font-normal",
                                      !value && "text-muted-foreground"
                                    )
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "i-radix-icons-calendar",
                                        class: "mr-2 h-4 w-4 opacity-50"
                                      }),
                                      createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(dateValue.value, unref(getLocalTimeZone)())) : "Pick a date"), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["class"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_PopoverContent, { class: "p-0" }, {
                            default: withCtx(() => [
                              createVNode(_component_Calendar, {
                                placeholder: placeholder.value,
                                "onUpdate:placeholder": ($event) => placeholder.value = $event,
                                modelValue: dateValue.value,
                                "onUpdate:modelValue": [($event) => dateValue.value = $event, (v) => {
                                  if (v) {
                                    dateValue.value = v;
                                    setFieldValue("dob", unref(toDate)(v).toISOString());
                                  } else {
                                    dateValue.value = void 0;
                                    setFieldValue("dob", void 0);
                                  }
                                }],
                                "calendar-label": "Date of birth",
                                "initial-focus": "",
                                "min-value": new (unref(CalendarDate))(1900, 1, 1),
                                "max-value": unref(today)(unref(getLocalTimeZone)())
                              }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue", "min-value", "max-value"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_FormDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(" Your date of birth is used to calculate your age. ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_FormMessage)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode("input", mergeProps({ type: "hidden" }, field), null, 16)
                ]),
                _: 2
              }, 1024),
              createVNode(_component_FormField, { name: "language" }, {
                default: withCtx(({ value }) => [
                  createVNode(_component_FormItem, { class: "flex flex-col" }, {
                    default: withCtx(() => [
                      createVNode(_component_FormLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("Language")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Popover, {
                        open: open.value,
                        "onUpdate:open": ($event) => open.value = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Button, {
                                    variant: "outline",
                                    role: "combobox",
                                    "aria-expanded": open.value,
                                    class: unref(cn)(
                                      "w-[200px] justify-between",
                                      !value && "text-muted-foreground"
                                    )
                                  }, {
                                    default: withCtx(() => {
                                      var _a;
                                      return [
                                        createTextVNode(toDisplayString(value ? (_a = languages.find(
                                          (language) => language.value === value
                                        )) == null ? void 0 : _a.label : "Select language...") + " ", 1),
                                        createVNode(unref(ChevronsUpDown), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                                      ];
                                    }),
                                    _: 2
                                  }, 1032, ["aria-expanded", "class"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_PopoverContent, { class: "w-[200px] p-0" }, {
                            default: withCtx(() => [
                              createVNode(_component_Command, null, {
                                default: withCtx(() => [
                                  createVNode(_component_CommandInput, { placeholder: "Search language..." }),
                                  createVNode(_component_CommandEmpty, null, {
                                    default: withCtx(() => [
                                      createTextVNode("No language found.")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_CommandList, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_CommandGroup, null, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(languages, (language) => {
                                            return createVNode(_component_CommandItem, {
                                              key: language.value,
                                              value: language.label,
                                              onSelect: () => {
                                                setFieldValue("language", language.value);
                                                open.value = false;
                                              }
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(Check), {
                                                  class: unref(cn)(
                                                    "mr-2 h-4 w-4",
                                                    value === language.value ? "opacity-100" : "opacity-0"
                                                  )
                                                }, null, 8, ["class"]),
                                                createTextVNode(" " + toDisplayString(language.label), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["value", "onSelect"]);
                                          }), 64))
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["open", "onUpdate:open"]),
                      createVNode(_component_FormDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(" This is the language that will be used in the dashboard. ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_FormMessage)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              createVNode("div", { class: "flex justify-start" }, [
                createVNode(_component_Button, { type: "submit" }, {
                  default: withCtx(() => [
                    createTextVNode(" Update account ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/settings/AccountForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SettingsLayout = __nuxt_component_0;
  const _component_SettingsAccountForm = _sfc_main$1;
  _push(ssrRenderComponent(_component_SettingsLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SettingsAccountForm, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_SettingsAccountForm)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/account-test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const accountTest = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { accountTest as default };
//# sourceMappingURL=account-test-Cd--hQCt.mjs.map
