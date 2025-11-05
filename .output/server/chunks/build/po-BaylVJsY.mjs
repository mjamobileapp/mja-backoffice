import { defineComponent, mergeProps, ref, computed, withCtx, createVNode, createTextVNode, toDisplayString, unref, createBlock, openBlock, Fragment, renderList, createCommentVNode, resolveComponent, withModifiers, reactive, watch, withDirectives, vModelText, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as _sfc_main$5$1, a as _sfc_main$1$1, b as _sfc_main$7, c as _sfc_main$4$1 } from './CardTitle-C5Xy3z8Z.mjs';
import { _ as _sfc_main$8 } from './Input-CDkjoebz.mjs';
import { _ as _sfc_main$7$1, a as _sfc_main$9, b as _sfc_main$3$1, c as _sfc_main$1$2, d as _sfc_main$6$1, e as _sfc_main$4$2 } from './TableHeader-DPsbKB96.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$b, b as _sfc_main$1$3 } from './TooltipTrigger-BcDIeLJj.mjs';
import { _ as _sfc_main$a } from './TooltipProvider-CFR98U-_.mjs';
import { d as useRuntimeConfig, e as useCookie, a as _sfc_main$2$2, t as toast, c as cn } from './server.mjs';
import { Loader2, FileDown, ChevronsUpDown, PlusSquareIcon, PencilIcon, TrashIcon, ChevronDown, Check } from 'lucide-vue-next';
import { _ as _sfc_main$2$3, a as _sfc_main$1$5, b as _sfc_main$4$3, d as _sfc_main$e } from './FormMessage-D5Wcp1o-.mjs';
import { useForm, Field } from 'vee-validate';
import { _ as _sfc_main$2$4, a as _sfc_main$d, b as _sfc_main$1$6 } from './PopoverTrigger-ldvWFHWS.mjs';
import { _ as _sfc_main$8$2, a as _sfc_main$4$4, b as _sfc_main$6$3, c as _sfc_main$2$5, d as _sfc_main$5$2, e as _sfc_main$3$3 } from './CommandShortcut-RFMOhYmh.mjs';
import { _ as _sfc_main$b$1 } from './CalendarPrevButton-B7sdA_QV.mjs';
import { _ as _sfc_main$f } from './Textarea-U1r39FPM.mjs';
import { _ as _sfc_main$8$1, a as _sfc_main$c, b as _sfc_main$6$2, c as _sfc_main$3$2, d as _sfc_main$1$4, e as _sfc_main$4$5, f as _sfc_main$7$2 } from './DialogTrigger-BW6jyQ7n.mjs';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { DateFormatter, getLocalTimeZone, CalendarDate } from '@internationalized/date';
import { toDate, formatDate, format } from 'date-fns';
import { ComboboxRoot, ComboboxInput, ComboboxTrigger, ComboboxContent, ComboboxGroup, ComboboxEmpty, ComboboxItem } from 'radix-vue';
import { _ as _sfc_main$8$3, a as _sfc_main$g, b as _sfc_main$5$3, c as _sfc_main$2$6, d as _sfc_main$1$7, e as _sfc_main$4$6, f as _sfc_main$3$4, g as _sfc_main$6$4, h as _sfc_main$7$3 } from './AlertDialogTrigger-DibbDHY2.mjs';
import { toast as toast$1 } from 'vue-sonner';
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
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './Label-BBvFeqSn.mjs';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Combobox",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: "" },
    defaultValue: {},
    options: { default: () => [] },
    placeholder: { default: "Select..." },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const selectedValue = ref(props.modelValue || props.defaultValue);
    const open = ref(false);
    watch(
      () => props.modelValue,
      (value) => {
        selectedValue.value = value;
      }
    );
    computed(
      () => props.options.filter(
        (option) => {
          var _a;
          return option.label.toLowerCase().includes(((_a = selectedValue.value) == null ? void 0 : _a.toLowerCase()) || "");
        }
      )
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(ComboboxRoot), mergeProps({
        modelValue: selectedValue.value,
        "onUpdate:modelValue": [($event) => selectedValue.value = $event, (val) => _ctx.$emit("update:modelValue", val)],
        disabled: __props.disabled,
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event,
        class: unref(cn)("w-[200px] rounded-md border border-input bg-background", (_a = _ctx.$attrs.class) != null ? _a : "")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ComboboxInput), {
              placeholder: __props.placeholder,
              class: "w-full h-10 px-3 py-2 text-sm bg-transparent rounded-md placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ComboboxTrigger), {
              class: ["absolute inset-y-0 right-0 flex items-center pr-2", unref(cn)("h-full w-8", "opacity-50 hover:opacity-100")]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ChevronDown), { class: "w-4 h-4" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ChevronDown), { class: "w-4 h-4" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(ComboboxContent), { class: "max-h-[300px] overflow-auto z-50 rounded-md border bg-popover text-popover-foreground shadow-md transition-all duration-100" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ComboboxGroup), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(ComboboxEmpty), { class: "py-2 text-sm text-center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` No item found. `);
                            } else {
                              return [
                                createTextVNode(" No item found. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(__props.options, (option) => {
                          _push4(ssrRenderComponent(unref(ComboboxItem), {
                            key: option.value,
                            value: option.value,
                            class: "relative flex items-center px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50 cursor-default select-none"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span class="${ssrRenderClass(unref(cn)("h-4 w-4", option.value === selectedValue.value ? "opacity-100" : "opacity-0"))}"${_scopeId4}>`);
                                _push5(ssrRenderComponent(unref(Check), null, null, _parent5, _scopeId4));
                                _push5(`</span> ${ssrInterpolate(option.label)}`);
                              } else {
                                return [
                                  createVNode("span", {
                                    class: unref(cn)("h-4 w-4", option.value === selectedValue.value ? "opacity-100" : "opacity-0")
                                  }, [
                                    createVNode(unref(Check))
                                  ], 2),
                                  createTextVNode(" " + toDisplayString(option.label), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(unref(ComboboxEmpty), { class: "py-2 text-sm text-center" }, {
                            default: withCtx(() => [
                              createTextVNode(" No item found. ")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.options, (option) => {
                            return openBlock(), createBlock(unref(ComboboxItem), {
                              key: option.value,
                              value: option.value,
                              class: "relative flex items-center px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50 cursor-default select-none"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", {
                                  class: unref(cn)("h-4 w-4", option.value === selectedValue.value ? "opacity-100" : "opacity-0")
                                }, [
                                  createVNode(unref(Check))
                                ], 2),
                                createTextVNode(" " + toDisplayString(option.label), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ComboboxGroup), null, {
                      default: withCtx(() => [
                        createVNode(unref(ComboboxEmpty), { class: "py-2 text-sm text-center" }, {
                          default: withCtx(() => [
                            createTextVNode(" No item found. ")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.options, (option) => {
                          return openBlock(), createBlock(unref(ComboboxItem), {
                            key: option.value,
                            value: option.value,
                            class: "relative flex items-center px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50 cursor-default select-none"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", {
                                class: unref(cn)("h-4 w-4", option.value === selectedValue.value ? "opacity-100" : "opacity-0")
                              }, [
                                createVNode(unref(Check))
                              ], 2),
                              createTextVNode(" " + toDisplayString(option.label), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
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
              createVNode("div", { class: "relative flex items-center" }, [
                createVNode(unref(ComboboxInput), {
                  placeholder: __props.placeholder,
                  class: "w-full h-10 px-3 py-2 text-sm bg-transparent rounded-md placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                }, null, 8, ["placeholder"]),
                createVNode(unref(ComboboxTrigger), {
                  class: ["absolute inset-y-0 right-0 flex items-center pr-2", unref(cn)("h-full w-8", "opacity-50 hover:opacity-100")]
                }, {
                  default: withCtx(() => [
                    createVNode(unref(ChevronDown), { class: "w-4 h-4" })
                  ]),
                  _: 1
                }, 8, ["class"])
              ]),
              createVNode(unref(ComboboxContent), { class: "max-h-[300px] overflow-auto z-50 rounded-md border bg-popover text-popover-foreground shadow-md transition-all duration-100" }, {
                default: withCtx(() => [
                  createVNode(unref(ComboboxGroup), null, {
                    default: withCtx(() => [
                      createVNode(unref(ComboboxEmpty), { class: "py-2 text-sm text-center" }, {
                        default: withCtx(() => [
                          createTextVNode(" No item found. ")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.options, (option) => {
                        return openBlock(), createBlock(unref(ComboboxItem), {
                          key: option.value,
                          value: option.value,
                          class: "relative flex items-center px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50 cursor-default select-none"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", {
                              class: unref(cn)("h-4 w-4", option.value === selectedValue.value ? "opacity-100" : "opacity-0")
                            }, [
                              createVNode(unref(Check))
                            ], 2),
                            createTextVNode(" " + toDisplayString(option.label), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
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
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/combobox/Combobox.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "AddData",
  __ssrInlineRender: true,
  emits: ["dataAdded"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const config = useRuntimeConfig();
    const baseUrl = config.public.apiBase;
    const currentUser = useCookie("currentUser");
    const username = computed(() => {
      var _a;
      return ((_a = currentUser.value) == null ? void 0 : _a.username) || "no-username@example.com";
    });
    const df = new DateFormatter("en-US", {
      dateStyle: "long"
    });
    const proyekList = ref([]);
    const profileFormSchema = toTypedSchema(
      z.object({
        idProyek: z.number(),
        tujuanPo: z.string(),
        noTelepon: z.string(),
        alamat: z.string(),
        penerima: z.string(),
        ppn: z.number(),
        tanggal: z.string().datetime(),
        tglPengiriman: z.string().datetime(),
        jenisPayment: z.string().min(1, "Jenis Payment harus dipilih.")
      })
    );
    ref("");
    const isSubmitting = ref(false);
    const { handleSubmit, resetForm, setFieldValue } = useForm({
      validationSchema: profileFormSchema
    });
    const isDialogOpen = ref(false);
    async function openDialog() {
      isDialogOpen.value = true;
      await fetchData();
    }
    const open = ref(false);
    function closeDialog() {
      isDialogOpen.value = false;
      open.value = false;
      resetForm();
    }
    const accessToken = useCookie("accessToken");
    const token = accessToken.value.token;
    async function fetchData() {
      try {
        const response = await fetch(`${baseUrl}/proyek`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const fetchedData = await response.json();
        if (Array.isArray(fetchedData.data)) {
          proyekList.value = fetchedData.data;
        } else {
          console.error("Data yang diterima bukan array:", fetchedData);
          proyekList.value = [];
        }
      } catch (error) {
        console.error("Gagal mengambil data:", error);
        proyekList.value = [];
      }
    }
    const listJenisPayment = [{ nama: "Cash" }, { nama: "Tempo" }];
    const onSubmit = handleSubmit(async (values) => {
      isSubmitting.value = true;
      const dataForm = {
        ...values,
        createdBy: username.value,
        createdDate: /* @__PURE__ */ new Date()
      };
      isDialogOpen.value = false;
      try {
        const response = await fetch(`${baseUrl}/po`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(dataForm)
        });
        if (response.ok) {
          toast({
            title: "Success",
            description: "Data berhasil disimpan."
          });
          emit("dataAdded");
          open.value = false;
          resetForm();
          isDialogOpen.value = false;
        } else {
          toast({
            title: "Error",
            description: "Gagal menyimpan data. Silakan coba lagi."
          });
        }
      } catch (error) {
        console.error("Error submitting data:", error);
        toast({
          title: "Error",
          description: "Terjadi kesalahan saat mengirim data."
        });
      } finally {
        isSubmitting.value = false;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormField = Field;
      const _component_FormItem = _sfc_main$2$3;
      const _component_FormLabel = _sfc_main$1$5;
      const _component_Popover = _sfc_main$2$4;
      const _component_PopoverTrigger = _sfc_main$d;
      const _component_FormControl = _sfc_main$4$3;
      const _component_PopoverContent = _sfc_main$1$6;
      const _component_Command = _sfc_main$8$2;
      const _component_CommandInput = _sfc_main$4$4;
      const _component_CommandEmpty = _sfc_main$6$3;
      const _component_CommandList = _sfc_main$2$5;
      const _component_CommandGroup = _sfc_main$5$2;
      const _component_CommandItem = _sfc_main$3$3;
      const _component_Check = resolveComponent("Check");
      const _component_FormMessage = _sfc_main$e;
      const _component_RadixIconsCalendar = resolveComponent("RadixIconsCalendar");
      const _component_Calendar = _sfc_main$b$1;
      const _component_Textarea = _sfc_main$f;
      _push(ssrRenderComponent(unref(_sfc_main$8$1), mergeProps({
        open: isDialogOpen.value,
        onOpenChange: ($event) => isDialogOpen.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$c), { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$2$2), { onClick: openDialog }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Add Data`);
                      } else {
                        return [
                          createTextVNode("Add Data")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$2$2), { onClick: openDialog }, {
                      default: withCtx(() => [
                        createTextVNode("Add Data")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$6$2), { class: "sm:max-w-[800px] [&>button]:hidden" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<form class="space-y-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$3$2), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$1$4), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Add Data Purchase Order (PO)`);
                            } else {
                              return [
                                createTextVNode("Add Data Purchase Order (PO)")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$1$4), null, {
                            default: withCtx(() => [
                              createTextVNode("Add Data Purchase Order (PO)")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="max-h-[60vh] overflow-y-auto pr-2"${_scopeId2}><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_FormField, { name: "idProyek" }, {
                    default: withCtx(({ value }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormItem, { class: "flex flex-col" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormLabel, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Pilih Proyek`);
                                  } else {
                                    return [
                                      createTextVNode("Pilih Proyek")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Popover, {
                                open: open.value,
                                "onUpdate:open": ($event) => open.value = $event
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_PopoverTrigger, { "as-child": "" }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_FormControl, null, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(unref(_sfc_main$2$2), {
                                                  variant: "outline",
                                                  role: "combobox",
                                                  "aria-expanded": open.value,
                                                  class: unref(cn)("justify-between", !value && "text-muted-foreground")
                                                }, {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    var _a, _b;
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(value ? (_a = proyekList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaPekerjaan : "Select Proyek...")} `);
                                                      _push9(ssrRenderComponent(unref(ChevronsUpDown), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(value ? (_b = proyekList.value.find((item) => item.id === value)) == null ? void 0 : _b.namaPekerjaan : "Select Proyek...") + " ", 1),
                                                        createVNode(unref(ChevronsUpDown), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(unref(_sfc_main$2$2), {
                                                    variant: "outline",
                                                    role: "combobox",
                                                    "aria-expanded": open.value,
                                                    class: unref(cn)("justify-between", !value && "text-muted-foreground")
                                                  }, {
                                                    default: withCtx(() => {
                                                      var _a;
                                                      return [
                                                        createTextVNode(toDisplayString(value ? (_a = proyekList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaPekerjaan : "Select Proyek...") + " ", 1),
                                                        createVNode(unref(ChevronsUpDown), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1032, ["aria-expanded", "class"])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_FormControl, null, {
                                              default: withCtx(() => [
                                                createVNode(unref(_sfc_main$2$2), {
                                                  variant: "outline",
                                                  role: "combobox",
                                                  "aria-expanded": open.value,
                                                  class: unref(cn)("justify-between", !value && "text-muted-foreground")
                                                }, {
                                                  default: withCtx(() => {
                                                    var _a;
                                                    return [
                                                      createTextVNode(toDisplayString(value ? (_a = proyekList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaPekerjaan : "Select Proyek...") + " ", 1),
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
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_PopoverContent, {
                                      class: "p-0 z-[9999]",
                                      modal: false,
                                      "teleport-to": "body",
                                      side: "bottom",
                                      align: "start"
                                    }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_Command, null, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_CommandInput, { placeholder: "Search Proyek..." }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_CommandEmpty, null, {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`No Proyek found.`);
                                                    } else {
                                                      return [
                                                        createTextVNode("No Proyek found.")
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_CommandList, null, {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_CommandGroup, null, {
                                                        default: withCtx((_8, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<!--[-->`);
                                                            ssrRenderList(proyekList.value, (item) => {
                                                              _push10(ssrRenderComponent(_component_CommandItem, {
                                                                key: item.id,
                                                                value: item.namaPekerjaan,
                                                                onSelect: () => {
                                                                  unref(setFieldValue)("idProyek", item.id);
                                                                  open.value = false;
                                                                }
                                                              }, {
                                                                default: withCtx((_9, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(_component_Check, {
                                                                      class: unref(cn)("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                                    }, null, _parent11, _scopeId10));
                                                                    _push11(` ${ssrInterpolate(item.namaPekerjaan)}`);
                                                                  } else {
                                                                    return [
                                                                      createVNode(_component_Check, {
                                                                        class: unref(cn)("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                                      }, null, 8, ["class"]),
                                                                      createTextVNode(" " + toDisplayString(item.namaPekerjaan), 1)
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                            });
                                                            _push10(`<!--]-->`);
                                                          } else {
                                                            return [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(proyekList.value, (item) => {
                                                                return openBlock(), createBlock(_component_CommandItem, {
                                                                  key: item.id,
                                                                  value: item.namaPekerjaan,
                                                                  onSelect: () => {
                                                                    unref(setFieldValue)("idProyek", item.id);
                                                                    open.value = false;
                                                                  }
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_Check, {
                                                                      class: unref(cn)("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                                    }, null, 8, ["class"]),
                                                                    createTextVNode(" " + toDisplayString(item.namaPekerjaan), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["value", "onSelect"]);
                                                              }), 128))
                                                            ];
                                                          }
                                                        }),
                                                        _: 2
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_CommandGroup, null, {
                                                          default: withCtx(() => [
                                                            (openBlock(true), createBlock(Fragment, null, renderList(proyekList.value, (item) => {
                                                              return openBlock(), createBlock(_component_CommandItem, {
                                                                key: item.id,
                                                                value: item.namaPekerjaan,
                                                                onSelect: () => {
                                                                  unref(setFieldValue)("idProyek", item.id);
                                                                  open.value = false;
                                                                }
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_Check, {
                                                                    class: unref(cn)("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                                  }, null, 8, ["class"]),
                                                                  createTextVNode(" " + toDisplayString(item.namaPekerjaan), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1032, ["value", "onSelect"]);
                                                            }), 128))
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_CommandInput, { placeholder: "Search Proyek..." }),
                                                  createVNode(_component_CommandEmpty, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("No Proyek found.")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_CommandList, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_CommandGroup, null, {
                                                        default: withCtx(() => [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(proyekList.value, (item) => {
                                                            return openBlock(), createBlock(_component_CommandItem, {
                                                              key: item.id,
                                                              value: item.namaPekerjaan,
                                                              onSelect: () => {
                                                                unref(setFieldValue)("idProyek", item.id);
                                                                open.value = false;
                                                              }
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_Check, {
                                                                  class: unref(cn)("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                                }, null, 8, ["class"]),
                                                                createTextVNode(" " + toDisplayString(item.namaPekerjaan), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["value", "onSelect"]);
                                                          }), 128))
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_Command, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_CommandInput, { placeholder: "Search Proyek..." }),
                                                createVNode(_component_CommandEmpty, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("No Proyek found.")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_CommandList, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_CommandGroup, null, {
                                                      default: withCtx(() => [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(proyekList.value, (item) => {
                                                          return openBlock(), createBlock(_component_CommandItem, {
                                                            key: item.id,
                                                            value: item.namaPekerjaan,
                                                            onSelect: () => {
                                                              unref(setFieldValue)("idProyek", item.id);
                                                              open.value = false;
                                                            }
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_Check, {
                                                                class: unref(cn)("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                              }, null, 8, ["class"]),
                                                              createTextVNode(" " + toDisplayString(item.namaPekerjaan), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["value", "onSelect"]);
                                                        }), 128))
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_FormControl, null, {
                                            default: withCtx(() => [
                                              createVNode(unref(_sfc_main$2$2), {
                                                variant: "outline",
                                                role: "combobox",
                                                "aria-expanded": open.value,
                                                class: unref(cn)("justify-between", !value && "text-muted-foreground")
                                              }, {
                                                default: withCtx(() => {
                                                  var _a;
                                                  return [
                                                    createTextVNode(toDisplayString(value ? (_a = proyekList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaPekerjaan : "Select Proyek...") + " ", 1),
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
                                      createVNode(_component_PopoverContent, {
                                        class: "p-0 z-[9999]",
                                        modal: false,
                                        "teleport-to": "body",
                                        side: "bottom",
                                        align: "start"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Command, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_CommandInput, { placeholder: "Search Proyek..." }),
                                              createVNode(_component_CommandEmpty, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("No Proyek found.")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_CommandList, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_CommandGroup, null, {
                                                    default: withCtx(() => [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(proyekList.value, (item) => {
                                                        return openBlock(), createBlock(_component_CommandItem, {
                                                          key: item.id,
                                                          value: item.namaPekerjaan,
                                                          onSelect: () => {
                                                            unref(setFieldValue)("idProyek", item.id);
                                                            open.value = false;
                                                          }
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_Check, {
                                                              class: unref(cn)("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                            }, null, 8, ["class"]),
                                                            createTextVNode(" " + toDisplayString(item.namaPekerjaan), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["value", "onSelect"]);
                                                      }), 128))
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormMessage, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Pilih Proyek")
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
                                            createVNode(unref(_sfc_main$2$2), {
                                              variant: "outline",
                                              role: "combobox",
                                              "aria-expanded": open.value,
                                              class: unref(cn)("justify-between", !value && "text-muted-foreground")
                                            }, {
                                              default: withCtx(() => {
                                                var _a;
                                                return [
                                                  createTextVNode(toDisplayString(value ? (_a = proyekList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaPekerjaan : "Select Proyek...") + " ", 1),
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
                                    createVNode(_component_PopoverContent, {
                                      class: "p-0 z-[9999]",
                                      modal: false,
                                      "teleport-to": "body",
                                      side: "bottom",
                                      align: "start"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Command, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_CommandInput, { placeholder: "Search Proyek..." }),
                                            createVNode(_component_CommandEmpty, null, {
                                              default: withCtx(() => [
                                                createTextVNode("No Proyek found.")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_CommandList, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_CommandGroup, null, {
                                                  default: withCtx(() => [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(proyekList.value, (item) => {
                                                      return openBlock(), createBlock(_component_CommandItem, {
                                                        key: item.id,
                                                        value: item.namaPekerjaan,
                                                        onSelect: () => {
                                                          unref(setFieldValue)("idProyek", item.id);
                                                          open.value = false;
                                                        }
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_Check, {
                                                            class: unref(cn)("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                          }, null, 8, ["class"]),
                                                          createTextVNode(" " + toDisplayString(item.namaPekerjaan), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["value", "onSelect"]);
                                                    }), 128))
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
                                createVNode(_component_FormMessage)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FormItem, { class: "flex flex-col" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Pilih Proyek")
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
                                          createVNode(unref(_sfc_main$2$2), {
                                            variant: "outline",
                                            role: "combobox",
                                            "aria-expanded": open.value,
                                            class: unref(cn)("justify-between", !value && "text-muted-foreground")
                                          }, {
                                            default: withCtx(() => {
                                              var _a;
                                              return [
                                                createTextVNode(toDisplayString(value ? (_a = proyekList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaPekerjaan : "Select Proyek...") + " ", 1),
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
                                  createVNode(_component_PopoverContent, {
                                    class: "p-0 z-[9999]",
                                    modal: false,
                                    "teleport-to": "body",
                                    side: "bottom",
                                    align: "start"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Command, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_CommandInput, { placeholder: "Search Proyek..." }),
                                          createVNode(_component_CommandEmpty, null, {
                                            default: withCtx(() => [
                                              createTextVNode("No Proyek found.")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_CommandList, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_CommandGroup, null, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(proyekList.value, (item) => {
                                                    return openBlock(), createBlock(_component_CommandItem, {
                                                      key: item.id,
                                                      value: item.namaPekerjaan,
                                                      onSelect: () => {
                                                        unref(setFieldValue)("idProyek", item.id);
                                                        open.value = false;
                                                      }
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_Check, {
                                                          class: unref(cn)("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                        }, null, 8, ["class"]),
                                                        createTextVNode(" " + toDisplayString(item.namaPekerjaan), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["value", "onSelect"]);
                                                  }), 128))
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
                              createVNode(_component_FormMessage)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormField, { name: "tanggal" }, {
                    default: withCtx(({ field, value }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormItem, { class: "flex flex-col" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormLabel, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Tanggal`);
                                  } else {
                                    return [
                                      createTextVNode("Tanggal")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Popover, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_PopoverTrigger, { "as-child": "" }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_FormControl, null, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(unref(_sfc_main$2$2), {
                                                  variant: "outline",
                                                  class: unref(cn)(
                                                    "justify-start text-left font-normal",
                                                    !value && "text-muted-foreground"
                                                  )
                                                }, {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }, null, _parent9, _scopeId8));
                                                      _push9(`<span${_scopeId8}>${ssrInterpolate(value ? unref(df).format(unref(toDate)(_ctx.dateMulai, unref(getLocalTimeZone)())) : "Pick a date")}</span>`);
                                                    } else {
                                                      return [
                                                        createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                                        createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(_ctx.dateMulai, unref(getLocalTimeZone)())) : "Pick a date"), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(unref(_sfc_main$2$2), {
                                                    variant: "outline",
                                                    class: unref(cn)(
                                                      "justify-start text-left font-normal",
                                                      !value && "text-muted-foreground"
                                                    )
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                                      createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(_ctx.dateMulai, unref(getLocalTimeZone)())) : "Pick a date"), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["class"])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_FormControl, null, {
                                              default: withCtx(() => [
                                                createVNode(unref(_sfc_main$2$2), {
                                                  variant: "outline",
                                                  class: unref(cn)(
                                                    "justify-start text-left font-normal",
                                                    !value && "text-muted-foreground"
                                                  )
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                                    createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(_ctx.dateMulai, unref(getLocalTimeZone)())) : "Pick a date"), 1)
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
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_PopoverContent, { class: "p-0" }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_Calendar, {
                                            placeholder: _ctx.placeholder,
                                            "onUpdate:placeholder": ($event) => _ctx.placeholder = $event,
                                            modelValue: _ctx.dateMulai,
                                            "onUpdate:modelValue": [
                                              ($event) => _ctx.dateMulai = $event,
                                              (v) => {
                                                if (v) {
                                                  _ctx.dateMulai = v;
                                                  unref(setFieldValue)("tanggal", unref(toDate)(v).toISOString());
                                                } else {
                                                  _ctx.dateMulai = void 0;
                                                  unref(setFieldValue)("tanggal", void 0);
                                                }
                                              }
                                            ],
                                            "calendar-label": "Tanggal",
                                            "initial-focus": ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_Calendar, {
                                              placeholder: _ctx.placeholder,
                                              "onUpdate:placeholder": ($event) => _ctx.placeholder = $event,
                                              modelValue: _ctx.dateMulai,
                                              "onUpdate:modelValue": [
                                                ($event) => _ctx.dateMulai = $event,
                                                (v) => {
                                                  if (v) {
                                                    _ctx.dateMulai = v;
                                                    unref(setFieldValue)("tanggal", unref(toDate)(v).toISOString());
                                                  } else {
                                                    _ctx.dateMulai = void 0;
                                                    unref(setFieldValue)("tanggal", void 0);
                                                  }
                                                }
                                              ],
                                              "calendar-label": "Tanggal",
                                              "initial-focus": ""
                                            }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_FormControl, null, {
                                            default: withCtx(() => [
                                              createVNode(unref(_sfc_main$2$2), {
                                                variant: "outline",
                                                class: unref(cn)(
                                                  "justify-start text-left font-normal",
                                                  !value && "text-muted-foreground"
                                                )
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                                  createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(_ctx.dateMulai, unref(getLocalTimeZone)())) : "Pick a date"), 1)
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
                                            placeholder: _ctx.placeholder,
                                            "onUpdate:placeholder": ($event) => _ctx.placeholder = $event,
                                            modelValue: _ctx.dateMulai,
                                            "onUpdate:modelValue": [
                                              ($event) => _ctx.dateMulai = $event,
                                              (v) => {
                                                if (v) {
                                                  _ctx.dateMulai = v;
                                                  unref(setFieldValue)("tanggal", unref(toDate)(v).toISOString());
                                                } else {
                                                  _ctx.dateMulai = void 0;
                                                  unref(setFieldValue)("tanggal", void 0);
                                                }
                                              }
                                            ],
                                            "calendar-label": "Tanggal",
                                            "initial-focus": ""
                                          }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormMessage, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Tanggal")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Popover, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_FormControl, null, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$2$2), {
                                              variant: "outline",
                                              class: unref(cn)(
                                                "justify-start text-left font-normal",
                                                !value && "text-muted-foreground"
                                              )
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                                createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(_ctx.dateMulai, unref(getLocalTimeZone)())) : "Pick a date"), 1)
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
                                          placeholder: _ctx.placeholder,
                                          "onUpdate:placeholder": ($event) => _ctx.placeholder = $event,
                                          modelValue: _ctx.dateMulai,
                                          "onUpdate:modelValue": [
                                            ($event) => _ctx.dateMulai = $event,
                                            (v) => {
                                              if (v) {
                                                _ctx.dateMulai = v;
                                                unref(setFieldValue)("tanggal", unref(toDate)(v).toISOString());
                                              } else {
                                                _ctx.dateMulai = void 0;
                                                unref(setFieldValue)("tanggal", void 0);
                                              }
                                            }
                                          ],
                                          "calendar-label": "Tanggal",
                                          "initial-focus": ""
                                        }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_FormMessage)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(`<input${ssrRenderAttrs(mergeProps({ type: "hidden" }, field))}${_scopeId3}>`);
                      } else {
                        return [
                          createVNode(_component_FormItem, { class: "flex flex-col" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Tanggal")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Popover, null, {
                                default: withCtx(() => [
                                  createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_FormControl, null, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$2$2), {
                                            variant: "outline",
                                            class: unref(cn)(
                                              "justify-start text-left font-normal",
                                              !value && "text-muted-foreground"
                                            )
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                              createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(_ctx.dateMulai, unref(getLocalTimeZone)())) : "Pick a date"), 1)
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
                                        placeholder: _ctx.placeholder,
                                        "onUpdate:placeholder": ($event) => _ctx.placeholder = $event,
                                        modelValue: _ctx.dateMulai,
                                        "onUpdate:modelValue": [
                                          ($event) => _ctx.dateMulai = $event,
                                          (v) => {
                                            if (v) {
                                              _ctx.dateMulai = v;
                                              unref(setFieldValue)("tanggal", unref(toDate)(v).toISOString());
                                            } else {
                                              _ctx.dateMulai = void 0;
                                              unref(setFieldValue)("tanggal", void 0);
                                            }
                                          }
                                        ],
                                        "calendar-label": "Tanggal",
                                        "initial-focus": ""
                                      }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_FormMessage)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("input", mergeProps({ type: "hidden" }, field), null, 16)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormField, { name: "ppn" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormItem, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormLabel, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`PPN %`);
                                  } else {
                                    return [
                                      createTextVNode("PPN %")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormControl, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$8), mergeProps({ type: "number" }, componentField), null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$8), mergeProps({ type: "number" }, componentField), null, 16)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormMessage, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("PPN %")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$8), mergeProps({ type: "number" }, componentField), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_FormMessage)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("PPN %")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$8), mergeProps({ type: "number" }, componentField), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_FormMessage)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormField, { name: "penerima" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormItem, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormLabel, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Penerima`);
                                  } else {
                                    return [
                                      createTextVNode("Penerima")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormControl, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$8), mergeProps({ type: "text" }, componentField), null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$8), mergeProps({ type: "text" }, componentField), null, 16)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormMessage, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Penerima")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$8), mergeProps({ type: "text" }, componentField), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_FormMessage)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Penerima")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$8), mergeProps({ type: "text" }, componentField), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_FormMessage)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormField, { name: "noTelepon" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormItem, { class: "flex flex-col h-full" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormLabel, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`No. Telepon`);
                                  } else {
                                    return [
                                      createTextVNode("No. Telepon")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormControl, { class: "flex-1" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$8), mergeProps({ type: "text" }, componentField), null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$8), mergeProps({ type: "text" }, componentField), null, 16)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormMessage, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("No. Telepon")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, { class: "flex-1" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$8), mergeProps({ type: "text" }, componentField), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_FormMessage)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FormItem, { class: "flex flex-col h-full" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("No. Telepon")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, { class: "flex-1" }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$8), mergeProps({ type: "text" }, componentField), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_FormMessage)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormField, { name: "tglPengiriman" }, {
                    default: withCtx(({ field, value }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormItem, { class: "flex flex-col h-full" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormLabel, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Tanggal Pengiriman`);
                                  } else {
                                    return [
                                      createTextVNode("Tanggal Pengiriman")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormControl, { class: "flex-1" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Popover, null, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_PopoverTrigger, { "as-child": "" }, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(unref(_sfc_main$2$2), {
                                                  variant: "outline",
                                                  class: unref(cn)(
                                                    "justify-start text-left font-normal w-full",
                                                    !value && "text-muted-foreground"
                                                  )
                                                }, {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }, null, _parent9, _scopeId8));
                                                      _push9(`<span${_scopeId8}>${ssrInterpolate(value ? unref(df).format(unref(toDate)(_ctx.datePengiriman, unref(getLocalTimeZone)())) : "Pick a date")}</span>`);
                                                    } else {
                                                      return [
                                                        createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                                        createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(_ctx.datePengiriman, unref(getLocalTimeZone)())) : "Pick a date"), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(unref(_sfc_main$2$2), {
                                                    variant: "outline",
                                                    class: unref(cn)(
                                                      "justify-start text-left font-normal w-full",
                                                      !value && "text-muted-foreground"
                                                    )
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                                      createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(_ctx.datePengiriman, unref(getLocalTimeZone)())) : "Pick a date"), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["class"])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_PopoverContent, { class: "p-0" }, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_Calendar, {
                                                  placeholder: _ctx.placeholder,
                                                  "onUpdate:placeholder": ($event) => _ctx.placeholder = $event,
                                                  modelValue: _ctx.datePengiriman,
                                                  "onUpdate:modelValue": [
                                                    ($event) => _ctx.datePengiriman = $event,
                                                    (v) => {
                                                      if (v) {
                                                        _ctx.datePengiriman = v;
                                                        unref(setFieldValue)("tglPengiriman", unref(toDate)(v).toISOString());
                                                      } else {
                                                        _ctx.datePengiriman = void 0;
                                                        unref(setFieldValue)("tglPengiriman", void 0);
                                                      }
                                                    }
                                                  ],
                                                  "calendar-label": "tglPengiriman",
                                                  "initial-focus": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_Calendar, {
                                                    placeholder: _ctx.placeholder,
                                                    "onUpdate:placeholder": ($event) => _ctx.placeholder = $event,
                                                    modelValue: _ctx.datePengiriman,
                                                    "onUpdate:modelValue": [
                                                      ($event) => _ctx.datePengiriman = $event,
                                                      (v) => {
                                                        if (v) {
                                                          _ctx.datePengiriman = v;
                                                          unref(setFieldValue)("tglPengiriman", unref(toDate)(v).toISOString());
                                                        } else {
                                                          _ctx.datePengiriman = void 0;
                                                          unref(setFieldValue)("tglPengiriman", void 0);
                                                        }
                                                      }
                                                    ],
                                                    "calendar-label": "tglPengiriman",
                                                    "initial-focus": ""
                                                  }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                              default: withCtx(() => [
                                                createVNode(unref(_sfc_main$2$2), {
                                                  variant: "outline",
                                                  class: unref(cn)(
                                                    "justify-start text-left font-normal w-full",
                                                    !value && "text-muted-foreground"
                                                  )
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                                    createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(_ctx.datePengiriman, unref(getLocalTimeZone)())) : "Pick a date"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["class"])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_PopoverContent, { class: "p-0" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_Calendar, {
                                                  placeholder: _ctx.placeholder,
                                                  "onUpdate:placeholder": ($event) => _ctx.placeholder = $event,
                                                  modelValue: _ctx.datePengiriman,
                                                  "onUpdate:modelValue": [
                                                    ($event) => _ctx.datePengiriman = $event,
                                                    (v) => {
                                                      if (v) {
                                                        _ctx.datePengiriman = v;
                                                        unref(setFieldValue)("tglPengiriman", unref(toDate)(v).toISOString());
                                                      } else {
                                                        _ctx.datePengiriman = void 0;
                                                        unref(setFieldValue)("tglPengiriman", void 0);
                                                      }
                                                    }
                                                  ],
                                                  "calendar-label": "tglPengiriman",
                                                  "initial-focus": ""
                                                }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_Popover, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                            default: withCtx(() => [
                                              createVNode(unref(_sfc_main$2$2), {
                                                variant: "outline",
                                                class: unref(cn)(
                                                  "justify-start text-left font-normal w-full",
                                                  !value && "text-muted-foreground"
                                                )
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                                  createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(_ctx.datePengiriman, unref(getLocalTimeZone)())) : "Pick a date"), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["class"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_PopoverContent, { class: "p-0" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_Calendar, {
                                                placeholder: _ctx.placeholder,
                                                "onUpdate:placeholder": ($event) => _ctx.placeholder = $event,
                                                modelValue: _ctx.datePengiriman,
                                                "onUpdate:modelValue": [
                                                  ($event) => _ctx.datePengiriman = $event,
                                                  (v) => {
                                                    if (v) {
                                                      _ctx.datePengiriman = v;
                                                      unref(setFieldValue)("tglPengiriman", unref(toDate)(v).toISOString());
                                                    } else {
                                                      _ctx.datePengiriman = void 0;
                                                      unref(setFieldValue)("tglPengiriman", void 0);
                                                    }
                                                  }
                                                ],
                                                "calendar-label": "tglPengiriman",
                                                "initial-focus": ""
                                              }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(`<input${ssrRenderAttrs(mergeProps({ type: "hidden" }, field))}${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_FormMessage, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Tanggal Pengiriman")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, { class: "flex-1" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Popover, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$2$2), {
                                              variant: "outline",
                                              class: unref(cn)(
                                                "justify-start text-left font-normal w-full",
                                                !value && "text-muted-foreground"
                                              )
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                                createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(_ctx.datePengiriman, unref(getLocalTimeZone)())) : "Pick a date"), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["class"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_PopoverContent, { class: "p-0" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Calendar, {
                                              placeholder: _ctx.placeholder,
                                              "onUpdate:placeholder": ($event) => _ctx.placeholder = $event,
                                              modelValue: _ctx.datePengiriman,
                                              "onUpdate:modelValue": [
                                                ($event) => _ctx.datePengiriman = $event,
                                                (v) => {
                                                  if (v) {
                                                    _ctx.datePengiriman = v;
                                                    unref(setFieldValue)("tglPengiriman", unref(toDate)(v).toISOString());
                                                  } else {
                                                    _ctx.datePengiriman = void 0;
                                                    unref(setFieldValue)("tglPengiriman", void 0);
                                                  }
                                                }
                                              ],
                                              "calendar-label": "tglPengiriman",
                                              "initial-focus": ""
                                            }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("input", mergeProps({ type: "hidden" }, field), null, 16),
                                createVNode(_component_FormMessage)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FormItem, { class: "flex flex-col h-full" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Tanggal Pengiriman")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, { class: "flex-1" }, {
                                default: withCtx(() => [
                                  createVNode(_component_Popover, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$2$2), {
                                            variant: "outline",
                                            class: unref(cn)(
                                              "justify-start text-left font-normal w-full",
                                              !value && "text-muted-foreground"
                                            )
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                              createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(_ctx.datePengiriman, unref(getLocalTimeZone)())) : "Pick a date"), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["class"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_PopoverContent, { class: "p-0" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Calendar, {
                                            placeholder: _ctx.placeholder,
                                            "onUpdate:placeholder": ($event) => _ctx.placeholder = $event,
                                            modelValue: _ctx.datePengiriman,
                                            "onUpdate:modelValue": [
                                              ($event) => _ctx.datePengiriman = $event,
                                              (v) => {
                                                if (v) {
                                                  _ctx.datePengiriman = v;
                                                  unref(setFieldValue)("tglPengiriman", unref(toDate)(v).toISOString());
                                                } else {
                                                  _ctx.datePengiriman = void 0;
                                                  unref(setFieldValue)("tglPengiriman", void 0);
                                                }
                                              }
                                            ],
                                            "calendar-label": "tglPengiriman",
                                            "initial-focus": ""
                                          }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("input", mergeProps({ type: "hidden" }, field), null, 16),
                              createVNode(_component_FormMessage)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormField, {
                    name: "tujuanPo",
                    class: "md:col-span-1"
                  }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormItem, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormLabel, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Tujuan PO`);
                                  } else {
                                    return [
                                      createTextVNode("Tujuan PO")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormControl, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Textarea, mergeProps(componentField, { rows: "3" }), null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_Textarea, mergeProps(componentField, { rows: "3" }), null, 16)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormMessage, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Tujuan PO")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Textarea, mergeProps(componentField, { rows: "3" }), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_FormMessage)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Tujuan PO")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Textarea, mergeProps(componentField, { rows: "3" }), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_FormMessage)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormField, {
                    name: "alamat",
                    class: "md:col-span-1"
                  }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormItem, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormLabel, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Alamat`);
                                  } else {
                                    return [
                                      createTextVNode("Alamat")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormControl, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Textarea, mergeProps(componentField, { rows: "3" }), null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_Textarea, mergeProps(componentField, { rows: "3" }), null, 16)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormMessage, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Alamat")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Textarea, mergeProps(componentField, { rows: "3" }), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_FormMessage)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Alamat")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Textarea, mergeProps(componentField, { rows: "3" }), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_FormMessage)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormField, { name: "jenisPayment" }, {
                    default: withCtx(({ value }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormItem, { class: "flex flex-col" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormLabel, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Jenis Payment`);
                                  } else {
                                    return [
                                      createTextVNode("Jenis Payment")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Popover, {
                                open: _ctx.openPayment,
                                "onUpdate:open": ($event) => _ctx.openPayment = $event
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_PopoverTrigger, { "as-child": "" }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_FormControl, null, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(unref(_sfc_main$2$2), {
                                                  variant: "outline",
                                                  role: "combobox",
                                                  "aria-expanded": _ctx.openPayment,
                                                  class: unref(cn)("justify-between", !value && "text-muted-foreground")
                                                }, {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    var _a, _b;
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(value ? (_a = listJenisPayment.find((item) => item.nama === value)) == null ? void 0 : _a.nama : "Select Payment...")} `);
                                                      _push9(ssrRenderComponent(unref(ChevronsUpDown), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(value ? (_b = listJenisPayment.find((item) => item.nama === value)) == null ? void 0 : _b.nama : "Select Payment...") + " ", 1),
                                                        createVNode(unref(ChevronsUpDown), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(unref(_sfc_main$2$2), {
                                                    variant: "outline",
                                                    role: "combobox",
                                                    "aria-expanded": _ctx.openPayment,
                                                    class: unref(cn)("justify-between", !value && "text-muted-foreground")
                                                  }, {
                                                    default: withCtx(() => {
                                                      var _a;
                                                      return [
                                                        createTextVNode(toDisplayString(value ? (_a = listJenisPayment.find((item) => item.nama === value)) == null ? void 0 : _a.nama : "Select Payment...") + " ", 1),
                                                        createVNode(unref(ChevronsUpDown), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1032, ["aria-expanded", "class"])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_FormControl, null, {
                                              default: withCtx(() => [
                                                createVNode(unref(_sfc_main$2$2), {
                                                  variant: "outline",
                                                  role: "combobox",
                                                  "aria-expanded": _ctx.openPayment,
                                                  class: unref(cn)("justify-between", !value && "text-muted-foreground")
                                                }, {
                                                  default: withCtx(() => {
                                                    var _a;
                                                    return [
                                                      createTextVNode(toDisplayString(value ? (_a = listJenisPayment.find((item) => item.nama === value)) == null ? void 0 : _a.nama : "Select Payment...") + " ", 1),
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
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_PopoverContent, { class: "p-0" }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_Command, null, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_CommandInput, { placeholder: "Search payment..." }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_CommandEmpty, null, {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`No payment found.`);
                                                    } else {
                                                      return [
                                                        createTextVNode("No payment found.")
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_CommandList, null, {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_CommandGroup, null, {
                                                        default: withCtx((_8, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<!--[-->`);
                                                            ssrRenderList(listJenisPayment, (item) => {
                                                              _push10(ssrRenderComponent(_component_CommandItem, {
                                                                key: item.nama,
                                                                value: item.nama,
                                                                onSelect: () => {
                                                                  unref(setFieldValue)("jenisPayment", item.nama);
                                                                  _ctx.openPayment = false;
                                                                }
                                                              }, {
                                                                default: withCtx((_9, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(_component_Check, {
                                                                      class: unref(cn)(
                                                                        "mr-2 h-4 w-4",
                                                                        value === item.nama ? "opacity-100" : "opacity-0"
                                                                      )
                                                                    }, null, _parent11, _scopeId10));
                                                                    _push11(` ${ssrInterpolate(item.nama)}`);
                                                                  } else {
                                                                    return [
                                                                      createVNode(_component_Check, {
                                                                        class: unref(cn)(
                                                                          "mr-2 h-4 w-4",
                                                                          value === item.nama ? "opacity-100" : "opacity-0"
                                                                        )
                                                                      }, null, 8, ["class"]),
                                                                      createTextVNode(" " + toDisplayString(item.nama), 1)
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                            });
                                                            _push10(`<!--]-->`);
                                                          } else {
                                                            return [
                                                              (openBlock(), createBlock(Fragment, null, renderList(listJenisPayment, (item) => {
                                                                return createVNode(_component_CommandItem, {
                                                                  key: item.nama,
                                                                  value: item.nama,
                                                                  onSelect: () => {
                                                                    unref(setFieldValue)("jenisPayment", item.nama);
                                                                    _ctx.openPayment = false;
                                                                  }
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_Check, {
                                                                      class: unref(cn)(
                                                                        "mr-2 h-4 w-4",
                                                                        value === item.nama ? "opacity-100" : "opacity-0"
                                                                      )
                                                                    }, null, 8, ["class"]),
                                                                    createTextVNode(" " + toDisplayString(item.nama), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["value", "onSelect"]);
                                                              }), 64))
                                                            ];
                                                          }
                                                        }),
                                                        _: 2
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_CommandGroup, null, {
                                                          default: withCtx(() => [
                                                            (openBlock(), createBlock(Fragment, null, renderList(listJenisPayment, (item) => {
                                                              return createVNode(_component_CommandItem, {
                                                                key: item.nama,
                                                                value: item.nama,
                                                                onSelect: () => {
                                                                  unref(setFieldValue)("jenisPayment", item.nama);
                                                                  _ctx.openPayment = false;
                                                                }
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_Check, {
                                                                    class: unref(cn)(
                                                                      "mr-2 h-4 w-4",
                                                                      value === item.nama ? "opacity-100" : "opacity-0"
                                                                    )
                                                                  }, null, 8, ["class"]),
                                                                  createTextVNode(" " + toDisplayString(item.nama), 1)
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
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_CommandInput, { placeholder: "Search payment..." }),
                                                  createVNode(_component_CommandEmpty, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("No payment found.")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_CommandList, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_CommandGroup, null, {
                                                        default: withCtx(() => [
                                                          (openBlock(), createBlock(Fragment, null, renderList(listJenisPayment, (item) => {
                                                            return createVNode(_component_CommandItem, {
                                                              key: item.nama,
                                                              value: item.nama,
                                                              onSelect: () => {
                                                                unref(setFieldValue)("jenisPayment", item.nama);
                                                                _ctx.openPayment = false;
                                                              }
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_Check, {
                                                                  class: unref(cn)(
                                                                    "mr-2 h-4 w-4",
                                                                    value === item.nama ? "opacity-100" : "opacity-0"
                                                                  )
                                                                }, null, 8, ["class"]),
                                                                createTextVNode(" " + toDisplayString(item.nama), 1)
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_Command, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_CommandInput, { placeholder: "Search payment..." }),
                                                createVNode(_component_CommandEmpty, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("No payment found.")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_CommandList, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_CommandGroup, null, {
                                                      default: withCtx(() => [
                                                        (openBlock(), createBlock(Fragment, null, renderList(listJenisPayment, (item) => {
                                                          return createVNode(_component_CommandItem, {
                                                            key: item.nama,
                                                            value: item.nama,
                                                            onSelect: () => {
                                                              unref(setFieldValue)("jenisPayment", item.nama);
                                                              _ctx.openPayment = false;
                                                            }
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_Check, {
                                                                class: unref(cn)(
                                                                  "mr-2 h-4 w-4",
                                                                  value === item.nama ? "opacity-100" : "opacity-0"
                                                                )
                                                              }, null, 8, ["class"]),
                                                              createTextVNode(" " + toDisplayString(item.nama), 1)
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_FormControl, null, {
                                            default: withCtx(() => [
                                              createVNode(unref(_sfc_main$2$2), {
                                                variant: "outline",
                                                role: "combobox",
                                                "aria-expanded": _ctx.openPayment,
                                                class: unref(cn)("justify-between", !value && "text-muted-foreground")
                                              }, {
                                                default: withCtx(() => {
                                                  var _a;
                                                  return [
                                                    createTextVNode(toDisplayString(value ? (_a = listJenisPayment.find((item) => item.nama === value)) == null ? void 0 : _a.nama : "Select Payment...") + " ", 1),
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
                                      createVNode(_component_PopoverContent, { class: "p-0" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Command, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_CommandInput, { placeholder: "Search payment..." }),
                                              createVNode(_component_CommandEmpty, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("No payment found.")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_CommandList, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_CommandGroup, null, {
                                                    default: withCtx(() => [
                                                      (openBlock(), createBlock(Fragment, null, renderList(listJenisPayment, (item) => {
                                                        return createVNode(_component_CommandItem, {
                                                          key: item.nama,
                                                          value: item.nama,
                                                          onSelect: () => {
                                                            unref(setFieldValue)("jenisPayment", item.nama);
                                                            _ctx.openPayment = false;
                                                          }
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_Check, {
                                                              class: unref(cn)(
                                                                "mr-2 h-4 w-4",
                                                                value === item.nama ? "opacity-100" : "opacity-0"
                                                              )
                                                            }, null, 8, ["class"]),
                                                            createTextVNode(" " + toDisplayString(item.nama), 1)
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormMessage, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Jenis Payment")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Popover, {
                                  open: _ctx.openPayment,
                                  "onUpdate:open": ($event) => _ctx.openPayment = $event
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_FormControl, null, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$2$2), {
                                              variant: "outline",
                                              role: "combobox",
                                              "aria-expanded": _ctx.openPayment,
                                              class: unref(cn)("justify-between", !value && "text-muted-foreground")
                                            }, {
                                              default: withCtx(() => {
                                                var _a;
                                                return [
                                                  createTextVNode(toDisplayString(value ? (_a = listJenisPayment.find((item) => item.nama === value)) == null ? void 0 : _a.nama : "Select Payment...") + " ", 1),
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
                                    createVNode(_component_PopoverContent, { class: "p-0" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Command, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_CommandInput, { placeholder: "Search payment..." }),
                                            createVNode(_component_CommandEmpty, null, {
                                              default: withCtx(() => [
                                                createTextVNode("No payment found.")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_CommandList, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_CommandGroup, null, {
                                                  default: withCtx(() => [
                                                    (openBlock(), createBlock(Fragment, null, renderList(listJenisPayment, (item) => {
                                                      return createVNode(_component_CommandItem, {
                                                        key: item.nama,
                                                        value: item.nama,
                                                        onSelect: () => {
                                                          unref(setFieldValue)("jenisPayment", item.nama);
                                                          _ctx.openPayment = false;
                                                        }
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_Check, {
                                                            class: unref(cn)(
                                                              "mr-2 h-4 w-4",
                                                              value === item.nama ? "opacity-100" : "opacity-0"
                                                            )
                                                          }, null, 8, ["class"]),
                                                          createTextVNode(" " + toDisplayString(item.nama), 1)
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
                                createVNode(_component_FormMessage)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FormItem, { class: "flex flex-col" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Jenis Payment")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Popover, {
                                open: _ctx.openPayment,
                                "onUpdate:open": ($event) => _ctx.openPayment = $event
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_FormControl, null, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$2$2), {
                                            variant: "outline",
                                            role: "combobox",
                                            "aria-expanded": _ctx.openPayment,
                                            class: unref(cn)("justify-between", !value && "text-muted-foreground")
                                          }, {
                                            default: withCtx(() => {
                                              var _a;
                                              return [
                                                createTextVNode(toDisplayString(value ? (_a = listJenisPayment.find((item) => item.nama === value)) == null ? void 0 : _a.nama : "Select Payment...") + " ", 1),
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
                                  createVNode(_component_PopoverContent, { class: "p-0" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Command, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_CommandInput, { placeholder: "Search payment..." }),
                                          createVNode(_component_CommandEmpty, null, {
                                            default: withCtx(() => [
                                              createTextVNode("No payment found.")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_CommandList, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_CommandGroup, null, {
                                                default: withCtx(() => [
                                                  (openBlock(), createBlock(Fragment, null, renderList(listJenisPayment, (item) => {
                                                    return createVNode(_component_CommandItem, {
                                                      key: item.nama,
                                                      value: item.nama,
                                                      onSelect: () => {
                                                        unref(setFieldValue)("jenisPayment", item.nama);
                                                        _ctx.openPayment = false;
                                                      }
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_Check, {
                                                          class: unref(cn)(
                                                            "mr-2 h-4 w-4",
                                                            value === item.nama ? "opacity-100" : "opacity-0"
                                                          )
                                                        }, null, 8, ["class"]),
                                                        createTextVNode(" " + toDisplayString(item.nama), 1)
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
                              createVNode(_component_FormMessage)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$4$5), { class: "flex justify-between items-center pt-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$7$2), { "as-child": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$2$2), {
                                type: "button",
                                variant: "secondary",
                                onClick: closeDialog
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Close`);
                                  } else {
                                    return [
                                      createTextVNode("Close")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$2$2), {
                                  type: "button",
                                  variant: "secondary",
                                  onClick: closeDialog
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Close")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (isSubmitting.value) {
                          _push4(ssrRenderComponent(unref(_sfc_main$2$2), { disabled: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(Loader2), { class: "w-4 h-4 mr-2 animate-spin" }, null, _parent5, _scopeId4));
                                _push5(` Saving.. `);
                              } else {
                                return [
                                  createVNode(unref(Loader2), { class: "w-4 h-4 mr-2 animate-spin" }),
                                  createTextVNode(" Saving.. ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(unref(_sfc_main$2$2), { type: "submit" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Save`);
                              } else {
                                return [
                                  createTextVNode("Save")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          createVNode(unref(_sfc_main$7$2), { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$2$2), {
                                type: "button",
                                variant: "secondary",
                                onClick: closeDialog
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Close")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          isSubmitting.value ? (openBlock(), createBlock(unref(_sfc_main$2$2), {
                            key: 0,
                            disabled: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Loader2), { class: "w-4 h-4 mr-2 animate-spin" }),
                              createTextVNode(" Saving.. ")
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock(unref(_sfc_main$2$2), {
                            key: 1,
                            type: "submit"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Save")
                            ]),
                            _: 1
                          }))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</form>`);
                } else {
                  return [
                    createVNode("form", {
                      class: "space-y-8",
                      onSubmit: withModifiers(unref(onSubmit), ["prevent"])
                    }, [
                      createVNode(unref(_sfc_main$3$2), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$1$4), null, {
                            default: withCtx(() => [
                              createTextVNode("Add Data Purchase Order (PO)")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "max-h-[60vh] overflow-y-auto pr-2" }, [
                        createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                          createVNode(_component_FormField, { name: "idProyek" }, {
                            default: withCtx(({ value }) => [
                              createVNode(_component_FormItem, { class: "flex flex-col" }, {
                                default: withCtx(() => [
                                  createVNode(_component_FormLabel, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Pilih Proyek")
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
                                              createVNode(unref(_sfc_main$2$2), {
                                                variant: "outline",
                                                role: "combobox",
                                                "aria-expanded": open.value,
                                                class: unref(cn)("justify-between", !value && "text-muted-foreground")
                                              }, {
                                                default: withCtx(() => {
                                                  var _a;
                                                  return [
                                                    createTextVNode(toDisplayString(value ? (_a = proyekList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaPekerjaan : "Select Proyek...") + " ", 1),
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
                                      createVNode(_component_PopoverContent, {
                                        class: "p-0 z-[9999]",
                                        modal: false,
                                        "teleport-to": "body",
                                        side: "bottom",
                                        align: "start"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Command, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_CommandInput, { placeholder: "Search Proyek..." }),
                                              createVNode(_component_CommandEmpty, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("No Proyek found.")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_CommandList, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_CommandGroup, null, {
                                                    default: withCtx(() => [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(proyekList.value, (item) => {
                                                        return openBlock(), createBlock(_component_CommandItem, {
                                                          key: item.id,
                                                          value: item.namaPekerjaan,
                                                          onSelect: () => {
                                                            unref(setFieldValue)("idProyek", item.id);
                                                            open.value = false;
                                                          }
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_Check, {
                                                              class: unref(cn)("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                            }, null, 8, ["class"]),
                                                            createTextVNode(" " + toDisplayString(item.namaPekerjaan), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["value", "onSelect"]);
                                                      }), 128))
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
                                  createVNode(_component_FormMessage)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, { name: "tanggal" }, {
                            default: withCtx(({ field, value }) => [
                              createVNode(_component_FormItem, { class: "flex flex-col" }, {
                                default: withCtx(() => [
                                  createVNode(_component_FormLabel, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Tanggal")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Popover, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_FormControl, null, {
                                            default: withCtx(() => [
                                              createVNode(unref(_sfc_main$2$2), {
                                                variant: "outline",
                                                class: unref(cn)(
                                                  "justify-start text-left font-normal",
                                                  !value && "text-muted-foreground"
                                                )
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                                  createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(_ctx.dateMulai, unref(getLocalTimeZone)())) : "Pick a date"), 1)
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
                                            placeholder: _ctx.placeholder,
                                            "onUpdate:placeholder": ($event) => _ctx.placeholder = $event,
                                            modelValue: _ctx.dateMulai,
                                            "onUpdate:modelValue": [
                                              ($event) => _ctx.dateMulai = $event,
                                              (v) => {
                                                if (v) {
                                                  _ctx.dateMulai = v;
                                                  unref(setFieldValue)("tanggal", unref(toDate)(v).toISOString());
                                                } else {
                                                  _ctx.dateMulai = void 0;
                                                  unref(setFieldValue)("tanggal", void 0);
                                                }
                                              }
                                            ],
                                            "calendar-label": "Tanggal",
                                            "initial-focus": ""
                                          }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_FormMessage)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("input", mergeProps({ type: "hidden" }, field), null, 16)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, { name: "ppn" }, {
                            default: withCtx(({ componentField }) => [
                              createVNode(_component_FormItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_FormLabel, null, {
                                    default: withCtx(() => [
                                      createTextVNode("PPN %")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_FormControl, null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$8), mergeProps({ type: "number" }, componentField), null, 16)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_FormMessage)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, { name: "penerima" }, {
                            default: withCtx(({ componentField }) => [
                              createVNode(_component_FormItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_FormLabel, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Penerima")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_FormControl, null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$8), mergeProps({ type: "text" }, componentField), null, 16)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_FormMessage)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, { name: "noTelepon" }, {
                            default: withCtx(({ componentField }) => [
                              createVNode(_component_FormItem, { class: "flex flex-col h-full" }, {
                                default: withCtx(() => [
                                  createVNode(_component_FormLabel, null, {
                                    default: withCtx(() => [
                                      createTextVNode("No. Telepon")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_FormControl, { class: "flex-1" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$8), mergeProps({ type: "text" }, componentField), null, 16)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_FormMessage)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, { name: "tglPengiriman" }, {
                            default: withCtx(({ field, value }) => [
                              createVNode(_component_FormItem, { class: "flex flex-col h-full" }, {
                                default: withCtx(() => [
                                  createVNode(_component_FormLabel, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Tanggal Pengiriman")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_FormControl, { class: "flex-1" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Popover, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                            default: withCtx(() => [
                                              createVNode(unref(_sfc_main$2$2), {
                                                variant: "outline",
                                                class: unref(cn)(
                                                  "justify-start text-left font-normal w-full",
                                                  !value && "text-muted-foreground"
                                                )
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                                  createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(_ctx.datePengiriman, unref(getLocalTimeZone)())) : "Pick a date"), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["class"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_PopoverContent, { class: "p-0" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_Calendar, {
                                                placeholder: _ctx.placeholder,
                                                "onUpdate:placeholder": ($event) => _ctx.placeholder = $event,
                                                modelValue: _ctx.datePengiriman,
                                                "onUpdate:modelValue": [
                                                  ($event) => _ctx.datePengiriman = $event,
                                                  (v) => {
                                                    if (v) {
                                                      _ctx.datePengiriman = v;
                                                      unref(setFieldValue)("tglPengiriman", unref(toDate)(v).toISOString());
                                                    } else {
                                                      _ctx.datePengiriman = void 0;
                                                      unref(setFieldValue)("tglPengiriman", void 0);
                                                    }
                                                  }
                                                ],
                                                "calendar-label": "tglPengiriman",
                                                "initial-focus": ""
                                              }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("input", mergeProps({ type: "hidden" }, field), null, 16),
                                  createVNode(_component_FormMessage)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, {
                            name: "tujuanPo",
                            class: "md:col-span-1"
                          }, {
                            default: withCtx(({ componentField }) => [
                              createVNode(_component_FormItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_FormLabel, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Tujuan PO")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_FormControl, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Textarea, mergeProps(componentField, { rows: "3" }), null, 16)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_FormMessage)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, {
                            name: "alamat",
                            class: "md:col-span-1"
                          }, {
                            default: withCtx(({ componentField }) => [
                              createVNode(_component_FormItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_FormLabel, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Alamat")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_FormControl, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Textarea, mergeProps(componentField, { rows: "3" }), null, 16)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_FormMessage)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, { name: "jenisPayment" }, {
                            default: withCtx(({ value }) => [
                              createVNode(_component_FormItem, { class: "flex flex-col" }, {
                                default: withCtx(() => [
                                  createVNode(_component_FormLabel, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Jenis Payment")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Popover, {
                                    open: _ctx.openPayment,
                                    "onUpdate:open": ($event) => _ctx.openPayment = $event
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_FormControl, null, {
                                            default: withCtx(() => [
                                              createVNode(unref(_sfc_main$2$2), {
                                                variant: "outline",
                                                role: "combobox",
                                                "aria-expanded": _ctx.openPayment,
                                                class: unref(cn)("justify-between", !value && "text-muted-foreground")
                                              }, {
                                                default: withCtx(() => {
                                                  var _a;
                                                  return [
                                                    createTextVNode(toDisplayString(value ? (_a = listJenisPayment.find((item) => item.nama === value)) == null ? void 0 : _a.nama : "Select Payment...") + " ", 1),
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
                                      createVNode(_component_PopoverContent, { class: "p-0" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Command, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_CommandInput, { placeholder: "Search payment..." }),
                                              createVNode(_component_CommandEmpty, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("No payment found.")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_CommandList, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_CommandGroup, null, {
                                                    default: withCtx(() => [
                                                      (openBlock(), createBlock(Fragment, null, renderList(listJenisPayment, (item) => {
                                                        return createVNode(_component_CommandItem, {
                                                          key: item.nama,
                                                          value: item.nama,
                                                          onSelect: () => {
                                                            unref(setFieldValue)("jenisPayment", item.nama);
                                                            _ctx.openPayment = false;
                                                          }
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_Check, {
                                                              class: unref(cn)(
                                                                "mr-2 h-4 w-4",
                                                                value === item.nama ? "opacity-100" : "opacity-0"
                                                              )
                                                            }, null, 8, ["class"]),
                                                            createTextVNode(" " + toDisplayString(item.nama), 1)
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
                                  createVNode(_component_FormMessage)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode(unref(_sfc_main$4$5), { class: "flex justify-between items-center pt-4" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$7$2), { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$2$2), {
                                type: "button",
                                variant: "secondary",
                                onClick: closeDialog
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Close")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          isSubmitting.value ? (openBlock(), createBlock(unref(_sfc_main$2$2), {
                            key: 0,
                            disabled: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Loader2), { class: "w-4 h-4 mr-2 animate-spin" }),
                              createTextVNode(" Saving.. ")
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock(unref(_sfc_main$2$2), {
                            key: 1,
                            type: "submit"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Save")
                            ]),
                            _: 1
                          }))
                        ]),
                        _: 1
                      })
                    ], 40, ["onSubmit"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$c), { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$2$2), { onClick: openDialog }, {
                    default: withCtx(() => [
                      createTextVNode("Add Data")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$6$2), { class: "sm:max-w-[800px] [&>button]:hidden" }, {
                default: withCtx(() => [
                  createVNode("form", {
                    class: "space-y-8",
                    onSubmit: withModifiers(unref(onSubmit), ["prevent"])
                  }, [
                    createVNode(unref(_sfc_main$3$2), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$1$4), null, {
                          default: withCtx(() => [
                            createTextVNode("Add Data Purchase Order (PO)")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "max-h-[60vh] overflow-y-auto pr-2" }, [
                      createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                        createVNode(_component_FormField, { name: "idProyek" }, {
                          default: withCtx(({ value }) => [
                            createVNode(_component_FormItem, { class: "flex flex-col" }, {
                              default: withCtx(() => [
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Pilih Proyek")
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
                                            createVNode(unref(_sfc_main$2$2), {
                                              variant: "outline",
                                              role: "combobox",
                                              "aria-expanded": open.value,
                                              class: unref(cn)("justify-between", !value && "text-muted-foreground")
                                            }, {
                                              default: withCtx(() => {
                                                var _a;
                                                return [
                                                  createTextVNode(toDisplayString(value ? (_a = proyekList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaPekerjaan : "Select Proyek...") + " ", 1),
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
                                    createVNode(_component_PopoverContent, {
                                      class: "p-0 z-[9999]",
                                      modal: false,
                                      "teleport-to": "body",
                                      side: "bottom",
                                      align: "start"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Command, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_CommandInput, { placeholder: "Search Proyek..." }),
                                            createVNode(_component_CommandEmpty, null, {
                                              default: withCtx(() => [
                                                createTextVNode("No Proyek found.")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_CommandList, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_CommandGroup, null, {
                                                  default: withCtx(() => [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(proyekList.value, (item) => {
                                                      return openBlock(), createBlock(_component_CommandItem, {
                                                        key: item.id,
                                                        value: item.namaPekerjaan,
                                                        onSelect: () => {
                                                          unref(setFieldValue)("idProyek", item.id);
                                                          open.value = false;
                                                        }
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_Check, {
                                                            class: unref(cn)("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                          }, null, 8, ["class"]),
                                                          createTextVNode(" " + toDisplayString(item.namaPekerjaan), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["value", "onSelect"]);
                                                    }), 128))
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
                                createVNode(_component_FormMessage)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormField, { name: "tanggal" }, {
                          default: withCtx(({ field, value }) => [
                            createVNode(_component_FormItem, { class: "flex flex-col" }, {
                              default: withCtx(() => [
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Tanggal")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Popover, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_FormControl, null, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$2$2), {
                                              variant: "outline",
                                              class: unref(cn)(
                                                "justify-start text-left font-normal",
                                                !value && "text-muted-foreground"
                                              )
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                                createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(_ctx.dateMulai, unref(getLocalTimeZone)())) : "Pick a date"), 1)
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
                                          placeholder: _ctx.placeholder,
                                          "onUpdate:placeholder": ($event) => _ctx.placeholder = $event,
                                          modelValue: _ctx.dateMulai,
                                          "onUpdate:modelValue": [
                                            ($event) => _ctx.dateMulai = $event,
                                            (v) => {
                                              if (v) {
                                                _ctx.dateMulai = v;
                                                unref(setFieldValue)("tanggal", unref(toDate)(v).toISOString());
                                              } else {
                                                _ctx.dateMulai = void 0;
                                                unref(setFieldValue)("tanggal", void 0);
                                              }
                                            }
                                          ],
                                          "calendar-label": "Tanggal",
                                          "initial-focus": ""
                                        }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_FormMessage)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("input", mergeProps({ type: "hidden" }, field), null, 16)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormField, { name: "ppn" }, {
                          default: withCtx(({ componentField }) => [
                            createVNode(_component_FormItem, null, {
                              default: withCtx(() => [
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("PPN %")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$8), mergeProps({ type: "number" }, componentField), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_FormMessage)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormField, { name: "penerima" }, {
                          default: withCtx(({ componentField }) => [
                            createVNode(_component_FormItem, null, {
                              default: withCtx(() => [
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Penerima")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$8), mergeProps({ type: "text" }, componentField), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_FormMessage)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormField, { name: "noTelepon" }, {
                          default: withCtx(({ componentField }) => [
                            createVNode(_component_FormItem, { class: "flex flex-col h-full" }, {
                              default: withCtx(() => [
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("No. Telepon")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, { class: "flex-1" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$8), mergeProps({ type: "text" }, componentField), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_FormMessage)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormField, { name: "tglPengiriman" }, {
                          default: withCtx(({ field, value }) => [
                            createVNode(_component_FormItem, { class: "flex flex-col h-full" }, {
                              default: withCtx(() => [
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Tanggal Pengiriman")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, { class: "flex-1" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Popover, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$2$2), {
                                              variant: "outline",
                                              class: unref(cn)(
                                                "justify-start text-left font-normal w-full",
                                                !value && "text-muted-foreground"
                                              )
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                                createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(_ctx.datePengiriman, unref(getLocalTimeZone)())) : "Pick a date"), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["class"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_PopoverContent, { class: "p-0" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Calendar, {
                                              placeholder: _ctx.placeholder,
                                              "onUpdate:placeholder": ($event) => _ctx.placeholder = $event,
                                              modelValue: _ctx.datePengiriman,
                                              "onUpdate:modelValue": [
                                                ($event) => _ctx.datePengiriman = $event,
                                                (v) => {
                                                  if (v) {
                                                    _ctx.datePengiriman = v;
                                                    unref(setFieldValue)("tglPengiriman", unref(toDate)(v).toISOString());
                                                  } else {
                                                    _ctx.datePengiriman = void 0;
                                                    unref(setFieldValue)("tglPengiriman", void 0);
                                                  }
                                                }
                                              ],
                                              "calendar-label": "tglPengiriman",
                                              "initial-focus": ""
                                            }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("input", mergeProps({ type: "hidden" }, field), null, 16),
                                createVNode(_component_FormMessage)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormField, {
                          name: "tujuanPo",
                          class: "md:col-span-1"
                        }, {
                          default: withCtx(({ componentField }) => [
                            createVNode(_component_FormItem, null, {
                              default: withCtx(() => [
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Tujuan PO")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Textarea, mergeProps(componentField, { rows: "3" }), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_FormMessage)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormField, {
                          name: "alamat",
                          class: "md:col-span-1"
                        }, {
                          default: withCtx(({ componentField }) => [
                            createVNode(_component_FormItem, null, {
                              default: withCtx(() => [
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Alamat")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Textarea, mergeProps(componentField, { rows: "3" }), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_FormMessage)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormField, { name: "jenisPayment" }, {
                          default: withCtx(({ value }) => [
                            createVNode(_component_FormItem, { class: "flex flex-col" }, {
                              default: withCtx(() => [
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Jenis Payment")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Popover, {
                                  open: _ctx.openPayment,
                                  "onUpdate:open": ($event) => _ctx.openPayment = $event
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_FormControl, null, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$2$2), {
                                              variant: "outline",
                                              role: "combobox",
                                              "aria-expanded": _ctx.openPayment,
                                              class: unref(cn)("justify-between", !value && "text-muted-foreground")
                                            }, {
                                              default: withCtx(() => {
                                                var _a;
                                                return [
                                                  createTextVNode(toDisplayString(value ? (_a = listJenisPayment.find((item) => item.nama === value)) == null ? void 0 : _a.nama : "Select Payment...") + " ", 1),
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
                                    createVNode(_component_PopoverContent, { class: "p-0" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Command, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_CommandInput, { placeholder: "Search payment..." }),
                                            createVNode(_component_CommandEmpty, null, {
                                              default: withCtx(() => [
                                                createTextVNode("No payment found.")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_CommandList, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_CommandGroup, null, {
                                                  default: withCtx(() => [
                                                    (openBlock(), createBlock(Fragment, null, renderList(listJenisPayment, (item) => {
                                                      return createVNode(_component_CommandItem, {
                                                        key: item.nama,
                                                        value: item.nama,
                                                        onSelect: () => {
                                                          unref(setFieldValue)("jenisPayment", item.nama);
                                                          _ctx.openPayment = false;
                                                        }
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_Check, {
                                                            class: unref(cn)(
                                                              "mr-2 h-4 w-4",
                                                              value === item.nama ? "opacity-100" : "opacity-0"
                                                            )
                                                          }, null, 8, ["class"]),
                                                          createTextVNode(" " + toDisplayString(item.nama), 1)
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
                                createVNode(_component_FormMessage)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode(unref(_sfc_main$4$5), { class: "flex justify-between items-center pt-4" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$7$2), { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$2$2), {
                              type: "button",
                              variant: "secondary",
                              onClick: closeDialog
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Close")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        isSubmitting.value ? (openBlock(), createBlock(unref(_sfc_main$2$2), {
                          key: 0,
                          disabled: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Loader2), { class: "w-4 h-4 mr-2 animate-spin" }),
                            createTextVNode(" Saving.. ")
                          ]),
                          _: 1
                        })) : (openBlock(), createBlock(unref(_sfc_main$2$2), {
                          key: 1,
                          type: "submit"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Save")
                          ]),
                          _: 1
                        }))
                      ]),
                      _: 1
                    })
                  ], 40, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/po/AddData.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DeleteData",
  __ssrInlineRender: true,
  props: ["item"],
  emits: ["dataDeleted"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const config = useRuntimeConfig();
    const baseUrl = config.public.apiBase;
    const accessToken = useCookie("accessToken");
    const token = accessToken.value.token;
    async function deleteItem() {
      try {
        const response = await fetch(`${baseUrl}/po/${props.item.id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.ok) {
          emit("dataDeleted", props.item.id);
          toast({
            title: "Success",
            description: "Data berhasil dihapus."
          });
        } else {
          const errorData = await response.json();
          const message = (errorData == null ? void 0 : errorData.message) || "Gagal Menghapus Data";
          toast({
            title: "Gagal",
            description: message,
            variant: "destructive"
          });
          console.error("Gagal menghapus:", message);
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Terjadi kesalahan saat menghapus data.",
          variant: "destructive"
        });
        console.error("Error:", error);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TooltipProvider = _sfc_main$a;
      const _component_Tooltip = _sfc_main$2$1;
      const _component_TooltipTrigger = _sfc_main$b;
      const _component_Button = _sfc_main$2$2;
      const _component_TooltipContent = _sfc_main$1$3;
      _push(ssrRenderComponent(unref(_sfc_main$8$3), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$g), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TooltipProvider, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Tooltip, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_TooltipTrigger, { "as-child": "" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Button, { size: "sm" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(TrashIcon), { class: "w-4 h-4" }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(TrashIcon), { class: "w-4 h-4" })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_Button, { size: "sm" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(TrashIcon), { class: "w-4 h-4" })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_TooltipContent, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<p${_scopeId5}>Delete Data</p>`);
                                  } else {
                                    return [
                                      createVNode("p", null, "Delete Data")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Button, { size: "sm" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(TrashIcon), { class: "w-4 h-4" })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TooltipContent, null, {
                                  default: withCtx(() => [
                                    createVNode("p", null, "Delete Data")
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
                          createVNode(_component_Tooltip, null, {
                            default: withCtx(() => [
                              createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_Button, { size: "sm" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(TrashIcon), { class: "w-4 h-4" })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TooltipContent, null, {
                                default: withCtx(() => [
                                  createVNode("p", null, "Delete Data")
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
                    createVNode(_component_TooltipProvider, null, {
                      default: withCtx(() => [
                        createVNode(_component_Tooltip, null, {
                          default: withCtx(() => [
                            createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                              default: withCtx(() => [
                                createVNode(_component_Button, { size: "sm" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(TrashIcon), { class: "w-4 h-4" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TooltipContent, null, {
                              default: withCtx(() => [
                                createVNode("p", null, "Delete Data")
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
            _push2(ssrRenderComponent(unref(_sfc_main$5$3), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$2$6), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$1$7), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Apakah anda yakin menghapus data ini? `);
                            } else {
                              return [
                                createTextVNode("Apakah anda yakin menghapus data ini? ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$4$6), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` data yg dihapus tidak bisa dikembalikan kembali, jadi pastikan anda yakin untuk menghapus data ini. `);
                            } else {
                              return [
                                createTextVNode(" data yg dihapus tidak bisa dikembalikan kembali, jadi pastikan anda yakin untuk menghapus data ini. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$1$7), null, {
                            default: withCtx(() => [
                              createTextVNode("Apakah anda yakin menghapus data ini? ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$4$6), null, {
                            default: withCtx(() => [
                              createTextVNode(" data yg dihapus tidak bisa dikembalikan kembali, jadi pastikan anda yakin untuk menghapus data ini. ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$3$4), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$6$4), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Cancel`);
                            } else {
                              return [
                                createTextVNode("Cancel")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$7$3), { onClick: deleteItem }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Delete`);
                            } else {
                              return [
                                createTextVNode("Delete")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$6$4), null, {
                            default: withCtx(() => [
                              createTextVNode("Cancel")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$7$3), { onClick: deleteItem }, {
                            default: withCtx(() => [
                              createTextVNode("Delete")
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
                    createVNode(unref(_sfc_main$2$6), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$1$7), null, {
                          default: withCtx(() => [
                            createTextVNode("Apakah anda yakin menghapus data ini? ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$4$6), null, {
                          default: withCtx(() => [
                            createTextVNode(" data yg dihapus tidak bisa dikembalikan kembali, jadi pastikan anda yakin untuk menghapus data ini. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$3$4), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$6$4), null, {
                          default: withCtx(() => [
                            createTextVNode("Cancel")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$7$3), { onClick: deleteItem }, {
                          default: withCtx(() => [
                            createTextVNode("Delete")
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
              createVNode(unref(_sfc_main$g), null, {
                default: withCtx(() => [
                  createVNode(_component_TooltipProvider, null, {
                    default: withCtx(() => [
                      createVNode(_component_Tooltip, null, {
                        default: withCtx(() => [
                          createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(_component_Button, { size: "sm" }, {
                                default: withCtx(() => [
                                  createVNode(unref(TrashIcon), { class: "w-4 h-4" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TooltipContent, null, {
                            default: withCtx(() => [
                              createVNode("p", null, "Delete Data")
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
              }),
              createVNode(unref(_sfc_main$5$3), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$2$6), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$1$7), null, {
                        default: withCtx(() => [
                          createTextVNode("Apakah anda yakin menghapus data ini? ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$4$6), null, {
                        default: withCtx(() => [
                          createTextVNode(" data yg dihapus tidak bisa dikembalikan kembali, jadi pastikan anda yakin untuk menghapus data ini. ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$3$4), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$6$4), null, {
                        default: withCtx(() => [
                          createTextVNode("Cancel")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$7$3), { onClick: deleteItem }, {
                        default: withCtx(() => [
                          createTextVNode("Delete")
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/po/DeleteData.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "EditData",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  emits: ["dataEdited"],
  setup(__props, { emit: __emit }) {
    const df = new DateFormatter("en-US", {
      dateStyle: "long"
    });
    const props = __props;
    const emit = __emit;
    const config = useRuntimeConfig();
    const baseUrl = config.public.apiBase;
    const currentUser = useCookie("currentUser");
    const username = computed(() => {
      var _a;
      return ((_a = currentUser.value) == null ? void 0 : _a.username) || "no-email@example.com";
    });
    const profileFormSchema = toTypedSchema(
      z.object({
        idProyek: z.number(),
        tujuanPo: z.string(),
        noTelepon: z.string(),
        alamat: z.string(),
        penerima: z.string(),
        ppn: z.number(),
        tanggal: z.string().datetime(),
        tglPengiriman: z.string().datetime(),
        jenisPayment: z.string().min(1, "Jenis Payment harus dipilih.")
      })
    );
    const { handleSubmit, resetForm, setValues, values, setFieldValue } = useForm({
      validationSchema: profileFormSchema,
      initialValues: {
        idProyek: 0,
        tujuanPo: "",
        jenisPayment: "",
        noTelepon: "",
        alamat: "",
        penerima: "",
        ppn: 0,
        tanggal: "",
        tglPengiriman: ""
        // Use prop value directly as fallback
      }
    });
    const isDialogOpen = ref(false);
    const dateMulai = ref();
    const datePengiriman = ref();
    const proyekList = ref([]);
    async function fetchDataProyek() {
      try {
        const response = await fetch(`${baseUrl}/proyek`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const fetchedData = await response.json();
        if (Array.isArray(fetchedData.data)) {
          proyekList.value = fetchedData.data;
        } else {
          console.error("Data yang diterima bukan array:", fetchedData);
          proyekList.value = [];
        }
      } catch (error) {
        console.error("Gagal mengambil data:", error);
        proyekList.value = [];
      }
    }
    async function fetchData() {
      try {
        const response = await fetch(`${baseUrl}/po/${props.id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.ok) {
          const { data } = await response.json();
          console.log(data);
          const nilaiNumber = parseFloat(data.ppn);
          const tanggalString = data.tanggal;
          const tglPengirimanString = data.tglPengiriman;
          const dateObj = tanggalString ? toDate(tanggalString) : void 0;
          const datePengirimanObj = tglPengirimanString ? toDate(tglPengirimanString) : void 0;
          if (dateObj && isNaN(dateObj.getTime())) {
            throw new Error("Invalid dateMulai value received from API.");
          }
          if (datePengirimanObj && isNaN(datePengirimanObj.getTime())) {
            throw new Error("Invalid dateMulai value received from API.");
          }
          setValues({
            idProyek: data.idProyek,
            tujuanPo: data.tujuanPo,
            noTelepon: data.noTelepon,
            ppn: nilaiNumber,
            alamat: data.alamat,
            penerima: data.penerima,
            jenisPayment: data.jenisPayment,
            tanggal: dateObj ? dateObj.toISOString() : void 0,
            tglPengiriman: datePengirimanObj ? datePengirimanObj.toISOString() : void 0
          });
          if (dateObj) {
            dateMulai.value = new CalendarDate(
              dateObj.getFullYear(),
              dateObj.getMonth() + 1,
              // Month + 1 karena CalendarDate berbasis 1
              dateObj.getDate()
            );
          }
          if (datePengirimanObj) {
            datePengiriman.value = new CalendarDate(
              datePengirimanObj.getFullYear(),
              datePengirimanObj.getMonth() + 1,
              // Month + 1 karena CalendarDate berbasis 1
              datePengirimanObj.getDate()
            );
          }
        } else {
          console.error("Gagal mengambil data. Status:", response.status);
        }
      } catch (error) {
        console.error("Fetch error:", error.message);
      }
    }
    const listJenisPayment = [{ nama: "Cash" }, { nama: "Tempo" }];
    async function openDialog() {
      isDialogOpen.value = true;
      await fetchData();
      await fetchDataProyek();
    }
    const open = ref(false);
    function closeDialog() {
      isDialogOpen.value = false;
      open.value = false;
      resetForm();
    }
    const isSubmitting = ref(false);
    const accessToken = useCookie("accessToken");
    const token = accessToken.value.token;
    const onSubmit = handleSubmit(async () => {
      isSubmitting.value = true;
      try {
        const dataForm = {
          ...values,
          createdBy: username.value,
          createdDate: /* @__PURE__ */ new Date()
        };
        console.log(JSON.stringify(dataForm));
        const response = await fetch(`${baseUrl}/po/${props.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(dataForm)
        });
        if (response.ok) {
          emit("dataEdited");
          toast$1.success("Data Berhasil Di Update");
          closeDialog();
          resetForm();
        } else {
          console.error("Gagal mengedit data");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        isSubmitting.value = false;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TooltipProvider = _sfc_main$a;
      const _component_Tooltip = _sfc_main$2$1;
      const _component_TooltipTrigger = _sfc_main$b;
      const _component_TooltipContent = _sfc_main$1$3;
      const _component_Popover = _sfc_main$2$4;
      const _component_PopoverTrigger = _sfc_main$d;
      const _component_ChevronsUpDown = resolveComponent("ChevronsUpDown");
      const _component_PopoverContent = _sfc_main$1$6;
      const _component_Command = _sfc_main$8$2;
      const _component_CommandInput = _sfc_main$4$4;
      const _component_CommandEmpty = _sfc_main$6$3;
      const _component_CommandList = _sfc_main$2$5;
      const _component_CommandGroup = _sfc_main$5$2;
      const _component_CommandItem = _sfc_main$3$3;
      const _component_Check = resolveComponent("Check");
      const _component_RadixIconsCalendar = resolveComponent("RadixIconsCalendar");
      const _component_Calendar = _sfc_main$b$1;
      const _component_Textarea = _sfc_main$f;
      const _component_Loader2 = resolveComponent("Loader2");
      _push(ssrRenderComponent(unref(_sfc_main$8$1), mergeProps({
        open: isDialogOpen.value,
        onOpenChange: ($event) => isDialogOpen.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$c), { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TooltipProvider, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Tooltip, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_TooltipTrigger, { "as-child": "" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$2$2), {
                                      onClick: openDialog,
                                      size: "sm"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(PencilIcon), { class: "w-4 h-4" }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(PencilIcon), { class: "w-4 h-4" })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$2$2), {
                                        onClick: openDialog,
                                        size: "sm"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(PencilIcon), { class: "w-4 h-4" })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_TooltipContent, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<p${_scopeId5}>Edit Data</p>`);
                                  } else {
                                    return [
                                      createVNode("p", null, "Edit Data")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$2$2), {
                                      onClick: openDialog,
                                      size: "sm"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(PencilIcon), { class: "w-4 h-4" })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TooltipContent, null, {
                                  default: withCtx(() => [
                                    createVNode("p", null, "Edit Data")
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
                          createVNode(_component_Tooltip, null, {
                            default: withCtx(() => [
                              createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$2$2), {
                                    onClick: openDialog,
                                    size: "sm"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(PencilIcon), { class: "w-4 h-4" })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TooltipContent, null, {
                                default: withCtx(() => [
                                  createVNode("p", null, "Edit Data")
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
                    createVNode(_component_TooltipProvider, null, {
                      default: withCtx(() => [
                        createVNode(_component_Tooltip, null, {
                          default: withCtx(() => [
                            createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$2$2), {
                                  onClick: openDialog,
                                  size: "sm"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(PencilIcon), { class: "w-4 h-4" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TooltipContent, null, {
                              default: withCtx(() => [
                                createVNode("p", null, "Edit Data")
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
            _push2(ssrRenderComponent(unref(_sfc_main$6$2), { class: "sm:max-w-[800px] [&>button]:hidden" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<form class="space-y-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$3$2), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$1$4), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Edit Data PO`);
                            } else {
                              return [
                                createTextVNode("Edit Data PO")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$1$4), null, {
                            default: withCtx(() => [
                              createTextVNode("Edit Data PO")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="max-h-[60vh] overflow-y-auto pr-2"${_scopeId2}><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "idProyek" }, {
                    default: withCtx(({ value }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2$3), { class: "flex flex-col" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$1$5), null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Pilih Proyek`);
                                  } else {
                                    return [
                                      createTextVNode("Pilih Proyek")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Popover, {
                                open: open.value,
                                "onUpdate:open": ($event) => open.value = $event
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_PopoverTrigger, { "as-child": "" }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(_sfc_main$4$3), null, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(unref(_sfc_main$2$2), {
                                                  variant: "outline",
                                                  role: "combobox",
                                                  "aria-expanded": open.value,
                                                  class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-between", !value && "text-muted-foreground")
                                                }, {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    var _a, _b;
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(value ? (_a = proyekList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaPekerjaan : "Select Proyek...")} `);
                                                      _push9(ssrRenderComponent(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(value ? (_b = proyekList.value.find((item) => item.id === value)) == null ? void 0 : _b.namaPekerjaan : "Select Proyek...") + " ", 1),
                                                        createVNode(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(unref(_sfc_main$2$2), {
                                                    variant: "outline",
                                                    role: "combobox",
                                                    "aria-expanded": open.value,
                                                    class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-between", !value && "text-muted-foreground")
                                                  }, {
                                                    default: withCtx(() => {
                                                      var _a;
                                                      return [
                                                        createTextVNode(toDisplayString(value ? (_a = proyekList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaPekerjaan : "Select Proyek...") + " ", 1),
                                                        createVNode(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1032, ["aria-expanded", "class"])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(_sfc_main$4$3), null, {
                                              default: withCtx(() => [
                                                createVNode(unref(_sfc_main$2$2), {
                                                  variant: "outline",
                                                  role: "combobox",
                                                  "aria-expanded": open.value,
                                                  class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-between", !value && "text-muted-foreground")
                                                }, {
                                                  default: withCtx(() => {
                                                    var _a;
                                                    return [
                                                      createTextVNode(toDisplayString(value ? (_a = proyekList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaPekerjaan : "Select Proyek...") + " ", 1),
                                                      createVNode(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
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
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_PopoverContent, { class: "p-0" }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_Command, null, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_CommandInput, { placeholder: "Search Proyek..." }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_CommandEmpty, null, {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`No Proyek found.`);
                                                    } else {
                                                      return [
                                                        createTextVNode("No Proyek found.")
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_CommandList, null, {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_CommandGroup, null, {
                                                        default: withCtx((_8, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<!--[-->`);
                                                            ssrRenderList(proyekList.value, (item) => {
                                                              _push10(ssrRenderComponent(_component_CommandItem, {
                                                                key: item.id,
                                                                value: item.namaPekerjaan,
                                                                onSelect: () => {
                                                                  unref(setFieldValue)("idProyek", item.id);
                                                                  open.value = false;
                                                                }
                                                              }, {
                                                                default: withCtx((_9, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(_component_Check, {
                                                                      class: ("cn" in _ctx ? _ctx.cn : unref(cn))("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                                    }, null, _parent11, _scopeId10));
                                                                    _push11(` ${ssrInterpolate(item.namaPekerjaan)}`);
                                                                  } else {
                                                                    return [
                                                                      createVNode(_component_Check, {
                                                                        class: ("cn" in _ctx ? _ctx.cn : unref(cn))("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                                      }, null, 8, ["class"]),
                                                                      createTextVNode(" " + toDisplayString(item.namaPekerjaan), 1)
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                            });
                                                            _push10(`<!--]-->`);
                                                          } else {
                                                            return [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(proyekList.value, (item) => {
                                                                return openBlock(), createBlock(_component_CommandItem, {
                                                                  key: item.id,
                                                                  value: item.namaPekerjaan,
                                                                  onSelect: () => {
                                                                    unref(setFieldValue)("idProyek", item.id);
                                                                    open.value = false;
                                                                  }
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_Check, {
                                                                      class: ("cn" in _ctx ? _ctx.cn : unref(cn))("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                                    }, null, 8, ["class"]),
                                                                    createTextVNode(" " + toDisplayString(item.namaPekerjaan), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["value", "onSelect"]);
                                                              }), 128))
                                                            ];
                                                          }
                                                        }),
                                                        _: 2
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_CommandGroup, null, {
                                                          default: withCtx(() => [
                                                            (openBlock(true), createBlock(Fragment, null, renderList(proyekList.value, (item) => {
                                                              return openBlock(), createBlock(_component_CommandItem, {
                                                                key: item.id,
                                                                value: item.namaPekerjaan,
                                                                onSelect: () => {
                                                                  unref(setFieldValue)("idProyek", item.id);
                                                                  open.value = false;
                                                                }
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_Check, {
                                                                    class: ("cn" in _ctx ? _ctx.cn : unref(cn))("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                                  }, null, 8, ["class"]),
                                                                  createTextVNode(" " + toDisplayString(item.namaPekerjaan), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1032, ["value", "onSelect"]);
                                                            }), 128))
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_CommandInput, { placeholder: "Search Proyek..." }),
                                                  createVNode(_component_CommandEmpty, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("No Proyek found.")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_CommandList, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_CommandGroup, null, {
                                                        default: withCtx(() => [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(proyekList.value, (item) => {
                                                            return openBlock(), createBlock(_component_CommandItem, {
                                                              key: item.id,
                                                              value: item.namaPekerjaan,
                                                              onSelect: () => {
                                                                unref(setFieldValue)("idProyek", item.id);
                                                                open.value = false;
                                                              }
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_Check, {
                                                                  class: ("cn" in _ctx ? _ctx.cn : unref(cn))("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                                }, null, 8, ["class"]),
                                                                createTextVNode(" " + toDisplayString(item.namaPekerjaan), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["value", "onSelect"]);
                                                          }), 128))
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_Command, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_CommandInput, { placeholder: "Search Proyek..." }),
                                                createVNode(_component_CommandEmpty, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("No Proyek found.")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_CommandList, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_CommandGroup, null, {
                                                      default: withCtx(() => [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(proyekList.value, (item) => {
                                                          return openBlock(), createBlock(_component_CommandItem, {
                                                            key: item.id,
                                                            value: item.namaPekerjaan,
                                                            onSelect: () => {
                                                              unref(setFieldValue)("idProyek", item.id);
                                                              open.value = false;
                                                            }
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_Check, {
                                                                class: ("cn" in _ctx ? _ctx.cn : unref(cn))("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                              }, null, 8, ["class"]),
                                                              createTextVNode(" " + toDisplayString(item.namaPekerjaan), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["value", "onSelect"]);
                                                        }), 128))
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$4$3), null, {
                                            default: withCtx(() => [
                                              createVNode(unref(_sfc_main$2$2), {
                                                variant: "outline",
                                                role: "combobox",
                                                "aria-expanded": open.value,
                                                class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-between", !value && "text-muted-foreground")
                                              }, {
                                                default: withCtx(() => {
                                                  var _a;
                                                  return [
                                                    createTextVNode(toDisplayString(value ? (_a = proyekList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaPekerjaan : "Select Proyek...") + " ", 1),
                                                    createVNode(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
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
                                      createVNode(_component_PopoverContent, { class: "p-0" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Command, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_CommandInput, { placeholder: "Search Proyek..." }),
                                              createVNode(_component_CommandEmpty, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("No Proyek found.")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_CommandList, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_CommandGroup, null, {
                                                    default: withCtx(() => [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(proyekList.value, (item) => {
                                                        return openBlock(), createBlock(_component_CommandItem, {
                                                          key: item.id,
                                                          value: item.namaPekerjaan,
                                                          onSelect: () => {
                                                            unref(setFieldValue)("idProyek", item.id);
                                                            open.value = false;
                                                          }
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_Check, {
                                                              class: ("cn" in _ctx ? _ctx.cn : unref(cn))("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                            }, null, 8, ["class"]),
                                                            createTextVNode(" " + toDisplayString(item.namaPekerjaan), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["value", "onSelect"]);
                                                      }), 128))
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$e), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$1$5), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Pilih Proyek")
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
                                        createVNode(unref(_sfc_main$4$3), null, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$2$2), {
                                              variant: "outline",
                                              role: "combobox",
                                              "aria-expanded": open.value,
                                              class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-between", !value && "text-muted-foreground")
                                            }, {
                                              default: withCtx(() => {
                                                var _a;
                                                return [
                                                  createTextVNode(toDisplayString(value ? (_a = proyekList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaPekerjaan : "Select Proyek...") + " ", 1),
                                                  createVNode(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
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
                                    createVNode(_component_PopoverContent, { class: "p-0" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Command, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_CommandInput, { placeholder: "Search Proyek..." }),
                                            createVNode(_component_CommandEmpty, null, {
                                              default: withCtx(() => [
                                                createTextVNode("No Proyek found.")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_CommandList, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_CommandGroup, null, {
                                                  default: withCtx(() => [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(proyekList.value, (item) => {
                                                      return openBlock(), createBlock(_component_CommandItem, {
                                                        key: item.id,
                                                        value: item.namaPekerjaan,
                                                        onSelect: () => {
                                                          unref(setFieldValue)("idProyek", item.id);
                                                          open.value = false;
                                                        }
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_Check, {
                                                            class: ("cn" in _ctx ? _ctx.cn : unref(cn))("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                          }, null, 8, ["class"]),
                                                          createTextVNode(" " + toDisplayString(item.namaPekerjaan), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["value", "onSelect"]);
                                                    }), 128))
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
                                createVNode(unref(_sfc_main$e))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2$3), { class: "flex flex-col" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$1$5), null, {
                                default: withCtx(() => [
                                  createTextVNode("Pilih Proyek")
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
                                      createVNode(unref(_sfc_main$4$3), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$2$2), {
                                            variant: "outline",
                                            role: "combobox",
                                            "aria-expanded": open.value,
                                            class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-between", !value && "text-muted-foreground")
                                          }, {
                                            default: withCtx(() => {
                                              var _a;
                                              return [
                                                createTextVNode(toDisplayString(value ? (_a = proyekList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaPekerjaan : "Select Proyek...") + " ", 1),
                                                createVNode(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
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
                                  createVNode(_component_PopoverContent, { class: "p-0" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Command, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_CommandInput, { placeholder: "Search Proyek..." }),
                                          createVNode(_component_CommandEmpty, null, {
                                            default: withCtx(() => [
                                              createTextVNode("No Proyek found.")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_CommandList, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_CommandGroup, null, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(proyekList.value, (item) => {
                                                    return openBlock(), createBlock(_component_CommandItem, {
                                                      key: item.id,
                                                      value: item.namaPekerjaan,
                                                      onSelect: () => {
                                                        unref(setFieldValue)("idProyek", item.id);
                                                        open.value = false;
                                                      }
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_Check, {
                                                          class: ("cn" in _ctx ? _ctx.cn : unref(cn))("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                        }, null, 8, ["class"]),
                                                        createTextVNode(" " + toDisplayString(item.namaPekerjaan), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["value", "onSelect"]);
                                                  }), 128))
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
                              createVNode(unref(_sfc_main$e))
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Field), { name: "tanggal" }, {
                    default: withCtx(({ field, value }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2$3), { class: "flex flex-col" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$1$5), null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Tanggal`);
                                  } else {
                                    return [
                                      createTextVNode("Tanggal")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Popover, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_PopoverTrigger, { "as-child": "" }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(_sfc_main$4$3), null, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(unref(_sfc_main$2$2), {
                                                  variant: "outline",
                                                  class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                                    "justify-start text-left font-normal",
                                                    !value && "text-muted-foreground"
                                                  )
                                                }, {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }, null, _parent9, _scopeId8));
                                                      _push9(`<span${_scopeId8}>${ssrInterpolate(value ? unref(df).format(unref(toDate)(dateMulai.value, unref(getLocalTimeZone)())) : "Pick a date")}</span>`);
                                                    } else {
                                                      return [
                                                        createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                                        createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(dateMulai.value, unref(getLocalTimeZone)())) : "Pick a date"), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(unref(_sfc_main$2$2), {
                                                    variant: "outline",
                                                    class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                                      "justify-start text-left font-normal",
                                                      !value && "text-muted-foreground"
                                                    )
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                                      createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(dateMulai.value, unref(getLocalTimeZone)())) : "Pick a date"), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["class"])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(_sfc_main$4$3), null, {
                                              default: withCtx(() => [
                                                createVNode(unref(_sfc_main$2$2), {
                                                  variant: "outline",
                                                  class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                                    "justify-start text-left font-normal",
                                                    !value && "text-muted-foreground"
                                                  )
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                                    createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(dateMulai.value, unref(getLocalTimeZone)())) : "Pick a date"), 1)
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
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_PopoverContent, { class: "p-0" }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_Calendar, {
                                            placeholder: _ctx.placeholder,
                                            "onUpdate:placeholder": ($event) => _ctx.placeholder = $event,
                                            modelValue: dateMulai.value,
                                            "onUpdate:modelValue": [
                                              ($event) => dateMulai.value = $event,
                                              (v) => {
                                                if (v) {
                                                  dateMulai.value = v;
                                                  unref(setFieldValue)("tanggal", unref(toDate)(v).toISOString());
                                                } else {
                                                  dateMulai.value = void 0;
                                                  unref(setFieldValue)("tanggal", void 0);
                                                }
                                              }
                                            ],
                                            "calendar-label": "Tanggal",
                                            "initial-focus": ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_Calendar, {
                                              placeholder: _ctx.placeholder,
                                              "onUpdate:placeholder": ($event) => _ctx.placeholder = $event,
                                              modelValue: dateMulai.value,
                                              "onUpdate:modelValue": [
                                                ($event) => dateMulai.value = $event,
                                                (v) => {
                                                  if (v) {
                                                    dateMulai.value = v;
                                                    unref(setFieldValue)("tanggal", unref(toDate)(v).toISOString());
                                                  } else {
                                                    dateMulai.value = void 0;
                                                    unref(setFieldValue)("tanggal", void 0);
                                                  }
                                                }
                                              ],
                                              "calendar-label": "Tanggal",
                                              "initial-focus": ""
                                            }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$4$3), null, {
                                            default: withCtx(() => [
                                              createVNode(unref(_sfc_main$2$2), {
                                                variant: "outline",
                                                class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                                  "justify-start text-left font-normal",
                                                  !value && "text-muted-foreground"
                                                )
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                                  createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(dateMulai.value, unref(getLocalTimeZone)())) : "Pick a date"), 1)
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
                                            placeholder: _ctx.placeholder,
                                            "onUpdate:placeholder": ($event) => _ctx.placeholder = $event,
                                            modelValue: dateMulai.value,
                                            "onUpdate:modelValue": [
                                              ($event) => dateMulai.value = $event,
                                              (v) => {
                                                if (v) {
                                                  dateMulai.value = v;
                                                  unref(setFieldValue)("tanggal", unref(toDate)(v).toISOString());
                                                } else {
                                                  dateMulai.value = void 0;
                                                  unref(setFieldValue)("tanggal", void 0);
                                                }
                                              }
                                            ],
                                            "calendar-label": "Tanggal",
                                            "initial-focus": ""
                                          }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$e), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$1$5), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Tanggal")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Popover, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$4$3), null, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$2$2), {
                                              variant: "outline",
                                              class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                                "justify-start text-left font-normal",
                                                !value && "text-muted-foreground"
                                              )
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                                createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(dateMulai.value, unref(getLocalTimeZone)())) : "Pick a date"), 1)
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
                                          placeholder: _ctx.placeholder,
                                          "onUpdate:placeholder": ($event) => _ctx.placeholder = $event,
                                          modelValue: dateMulai.value,
                                          "onUpdate:modelValue": [
                                            ($event) => dateMulai.value = $event,
                                            (v) => {
                                              if (v) {
                                                dateMulai.value = v;
                                                unref(setFieldValue)("tanggal", unref(toDate)(v).toISOString());
                                              } else {
                                                dateMulai.value = void 0;
                                                unref(setFieldValue)("tanggal", void 0);
                                              }
                                            }
                                          ],
                                          "calendar-label": "Tanggal",
                                          "initial-focus": ""
                                        }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$e))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(`<input${ssrRenderAttrs(mergeProps({ type: "hidden" }, field))}${_scopeId3}>`);
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2$3), { class: "flex flex-col" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$1$5), null, {
                                default: withCtx(() => [
                                  createTextVNode("Tanggal")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Popover, null, {
                                default: withCtx(() => [
                                  createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$4$3), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$2$2), {
                                            variant: "outline",
                                            class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                              "justify-start text-left font-normal",
                                              !value && "text-muted-foreground"
                                            )
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                              createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(dateMulai.value, unref(getLocalTimeZone)())) : "Pick a date"), 1)
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
                                        placeholder: _ctx.placeholder,
                                        "onUpdate:placeholder": ($event) => _ctx.placeholder = $event,
                                        modelValue: dateMulai.value,
                                        "onUpdate:modelValue": [
                                          ($event) => dateMulai.value = $event,
                                          (v) => {
                                            if (v) {
                                              dateMulai.value = v;
                                              unref(setFieldValue)("tanggal", unref(toDate)(v).toISOString());
                                            } else {
                                              dateMulai.value = void 0;
                                              unref(setFieldValue)("tanggal", void 0);
                                            }
                                          }
                                        ],
                                        "calendar-label": "Tanggal",
                                        "initial-focus": ""
                                      }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$e))
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("input", mergeProps({ type: "hidden" }, field), null, 16)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Field), { name: "ppn" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2$3), null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$1$5), null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`PPN %`);
                                  } else {
                                    return [
                                      createTextVNode("PPN %")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$4$3), null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$8), mergeProps({ type: "number" }, componentField), null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$8), mergeProps({ type: "number" }, componentField), null, 16)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$e), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$1$5), null, {
                                  default: withCtx(() => [
                                    createTextVNode("PPN %")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4$3), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$8), mergeProps({ type: "number" }, componentField), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$e))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2$3), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$1$5), null, {
                                default: withCtx(() => [
                                  createTextVNode("PPN %")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$4$3), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$8), mergeProps({ type: "number" }, componentField), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$e))
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Field), { name: "penerima" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2$3), null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$1$5), null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Penerima`);
                                  } else {
                                    return [
                                      createTextVNode("Penerima")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$4$3), null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$8), mergeProps({ type: "text" }, componentField), null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$8), mergeProps({ type: "text" }, componentField), null, 16)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$e), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$1$5), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Penerima")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4$3), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$8), mergeProps({ type: "text" }, componentField), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$e))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2$3), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$1$5), null, {
                                default: withCtx(() => [
                                  createTextVNode("Penerima")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$4$3), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$8), mergeProps({ type: "text" }, componentField), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$e))
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Field), { name: "noTelepon" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2$3), { class: "flex flex-col h-full" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$1$5), null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`No. Telepon`);
                                  } else {
                                    return [
                                      createTextVNode("No. Telepon")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$4$3), { class: "flex-1" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$8), mergeProps({ type: "text" }, componentField), null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$8), mergeProps({ type: "text" }, componentField), null, 16)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$e), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$1$5), null, {
                                  default: withCtx(() => [
                                    createTextVNode("No. Telepon")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4$3), { class: "flex-1" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$8), mergeProps({ type: "text" }, componentField), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$e))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2$3), { class: "flex flex-col h-full" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$1$5), null, {
                                default: withCtx(() => [
                                  createTextVNode("No. Telepon")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$4$3), { class: "flex-1" }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$8), mergeProps({ type: "text" }, componentField), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$e))
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Field), { name: "tglPengiriman" }, {
                    default: withCtx(({ field, value }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2$3), { class: "flex flex-col h-full" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$1$5), null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Tanggal Pengiriman`);
                                  } else {
                                    return [
                                      createTextVNode("Tanggal Pengiriman")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$4$3), { class: "flex-1" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Popover, null, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_PopoverTrigger, { "as-child": "" }, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(unref(_sfc_main$2$2), {
                                                  variant: "outline",
                                                  class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                                    "justify-start text-left font-normal w-full",
                                                    !value && "text-muted-foreground"
                                                  )
                                                }, {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }, null, _parent9, _scopeId8));
                                                      _push9(`<span${_scopeId8}>${ssrInterpolate(value ? unref(df).format(unref(toDate)(datePengiriman.value, unref(getLocalTimeZone)())) : "Pick a date")}</span>`);
                                                    } else {
                                                      return [
                                                        createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                                        createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(datePengiriman.value, unref(getLocalTimeZone)())) : "Pick a date"), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(unref(_sfc_main$2$2), {
                                                    variant: "outline",
                                                    class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                                      "justify-start text-left font-normal w-full",
                                                      !value && "text-muted-foreground"
                                                    )
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                                      createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(datePengiriman.value, unref(getLocalTimeZone)())) : "Pick a date"), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["class"])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_PopoverContent, { class: "p-0" }, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_Calendar, {
                                                  placeholder: _ctx.placeholder,
                                                  "onUpdate:placeholder": ($event) => _ctx.placeholder = $event,
                                                  modelValue: datePengiriman.value,
                                                  "onUpdate:modelValue": [
                                                    ($event) => datePengiriman.value = $event,
                                                    (v) => {
                                                      if (v) {
                                                        datePengiriman.value = v;
                                                        unref(setFieldValue)("tglPengiriman", unref(toDate)(v).toISOString());
                                                      } else {
                                                        datePengiriman.value = void 0;
                                                        unref(setFieldValue)("tglPengiriman", void 0);
                                                      }
                                                    }
                                                  ],
                                                  "calendar-label": "tglPengiriman",
                                                  "initial-focus": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_Calendar, {
                                                    placeholder: _ctx.placeholder,
                                                    "onUpdate:placeholder": ($event) => _ctx.placeholder = $event,
                                                    modelValue: datePengiriman.value,
                                                    "onUpdate:modelValue": [
                                                      ($event) => datePengiriman.value = $event,
                                                      (v) => {
                                                        if (v) {
                                                          datePengiriman.value = v;
                                                          unref(setFieldValue)("tglPengiriman", unref(toDate)(v).toISOString());
                                                        } else {
                                                          datePengiriman.value = void 0;
                                                          unref(setFieldValue)("tglPengiriman", void 0);
                                                        }
                                                      }
                                                    ],
                                                    "calendar-label": "tglPengiriman",
                                                    "initial-focus": ""
                                                  }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                              default: withCtx(() => [
                                                createVNode(unref(_sfc_main$2$2), {
                                                  variant: "outline",
                                                  class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                                    "justify-start text-left font-normal w-full",
                                                    !value && "text-muted-foreground"
                                                  )
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                                    createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(datePengiriman.value, unref(getLocalTimeZone)())) : "Pick a date"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["class"])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_PopoverContent, { class: "p-0" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_Calendar, {
                                                  placeholder: _ctx.placeholder,
                                                  "onUpdate:placeholder": ($event) => _ctx.placeholder = $event,
                                                  modelValue: datePengiriman.value,
                                                  "onUpdate:modelValue": [
                                                    ($event) => datePengiriman.value = $event,
                                                    (v) => {
                                                      if (v) {
                                                        datePengiriman.value = v;
                                                        unref(setFieldValue)("tglPengiriman", unref(toDate)(v).toISOString());
                                                      } else {
                                                        datePengiriman.value = void 0;
                                                        unref(setFieldValue)("tglPengiriman", void 0);
                                                      }
                                                    }
                                                  ],
                                                  "calendar-label": "tglPengiriman",
                                                  "initial-focus": ""
                                                }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_Popover, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                            default: withCtx(() => [
                                              createVNode(unref(_sfc_main$2$2), {
                                                variant: "outline",
                                                class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                                  "justify-start text-left font-normal w-full",
                                                  !value && "text-muted-foreground"
                                                )
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                                  createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(datePengiriman.value, unref(getLocalTimeZone)())) : "Pick a date"), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["class"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_PopoverContent, { class: "p-0" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_Calendar, {
                                                placeholder: _ctx.placeholder,
                                                "onUpdate:placeholder": ($event) => _ctx.placeholder = $event,
                                                modelValue: datePengiriman.value,
                                                "onUpdate:modelValue": [
                                                  ($event) => datePengiriman.value = $event,
                                                  (v) => {
                                                    if (v) {
                                                      datePengiriman.value = v;
                                                      unref(setFieldValue)("tglPengiriman", unref(toDate)(v).toISOString());
                                                    } else {
                                                      datePengiriman.value = void 0;
                                                      unref(setFieldValue)("tglPengiriman", void 0);
                                                    }
                                                  }
                                                ],
                                                "calendar-label": "tglPengiriman",
                                                "initial-focus": ""
                                              }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(`<input${ssrRenderAttrs(mergeProps({ type: "hidden" }, field))}${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(_sfc_main$e), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$1$5), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Tanggal Pengiriman")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4$3), { class: "flex-1" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Popover, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$2$2), {
                                              variant: "outline",
                                              class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                                "justify-start text-left font-normal w-full",
                                                !value && "text-muted-foreground"
                                              )
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                                createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(datePengiriman.value, unref(getLocalTimeZone)())) : "Pick a date"), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["class"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_PopoverContent, { class: "p-0" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Calendar, {
                                              placeholder: _ctx.placeholder,
                                              "onUpdate:placeholder": ($event) => _ctx.placeholder = $event,
                                              modelValue: datePengiriman.value,
                                              "onUpdate:modelValue": [
                                                ($event) => datePengiriman.value = $event,
                                                (v) => {
                                                  if (v) {
                                                    datePengiriman.value = v;
                                                    unref(setFieldValue)("tglPengiriman", unref(toDate)(v).toISOString());
                                                  } else {
                                                    datePengiriman.value = void 0;
                                                    unref(setFieldValue)("tglPengiriman", void 0);
                                                  }
                                                }
                                              ],
                                              "calendar-label": "tglPengiriman",
                                              "initial-focus": ""
                                            }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("input", mergeProps({ type: "hidden" }, field), null, 16),
                                createVNode(unref(_sfc_main$e))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2$3), { class: "flex flex-col h-full" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$1$5), null, {
                                default: withCtx(() => [
                                  createTextVNode("Tanggal Pengiriman")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$4$3), { class: "flex-1" }, {
                                default: withCtx(() => [
                                  createVNode(_component_Popover, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$2$2), {
                                            variant: "outline",
                                            class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                              "justify-start text-left font-normal w-full",
                                              !value && "text-muted-foreground"
                                            )
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                              createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(datePengiriman.value, unref(getLocalTimeZone)())) : "Pick a date"), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["class"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_PopoverContent, { class: "p-0" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Calendar, {
                                            placeholder: _ctx.placeholder,
                                            "onUpdate:placeholder": ($event) => _ctx.placeholder = $event,
                                            modelValue: datePengiriman.value,
                                            "onUpdate:modelValue": [
                                              ($event) => datePengiriman.value = $event,
                                              (v) => {
                                                if (v) {
                                                  datePengiriman.value = v;
                                                  unref(setFieldValue)("tglPengiriman", unref(toDate)(v).toISOString());
                                                } else {
                                                  datePengiriman.value = void 0;
                                                  unref(setFieldValue)("tglPengiriman", void 0);
                                                }
                                              }
                                            ],
                                            "calendar-label": "tglPengiriman",
                                            "initial-focus": ""
                                          }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("input", mergeProps({ type: "hidden" }, field), null, 16),
                              createVNode(unref(_sfc_main$e))
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "tujuanPo",
                    class: "md:col-span-1"
                  }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2$3), null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$1$5), null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Tujuan PO`);
                                  } else {
                                    return [
                                      createTextVNode("Tujuan PO")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$4$3), null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Textarea, mergeProps(componentField, { rows: "3" }), null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_Textarea, mergeProps(componentField, { rows: "3" }), null, 16)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$e), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$1$5), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Tujuan PO")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4$3), null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Textarea, mergeProps(componentField, { rows: "3" }), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$e))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2$3), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$1$5), null, {
                                default: withCtx(() => [
                                  createTextVNode("Tujuan PO")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$4$3), null, {
                                default: withCtx(() => [
                                  createVNode(_component_Textarea, mergeProps(componentField, { rows: "3" }), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$e))
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "alamat",
                    class: "md:col-span-1"
                  }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2$3), null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$1$5), null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Alamat`);
                                  } else {
                                    return [
                                      createTextVNode("Alamat")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$4$3), null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Textarea, mergeProps(componentField, { rows: "3" }), null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_Textarea, mergeProps(componentField, { rows: "3" }), null, 16)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$e), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$1$5), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Alamat")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4$3), null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Textarea, mergeProps(componentField, { rows: "3" }), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$e))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2$3), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$1$5), null, {
                                default: withCtx(() => [
                                  createTextVNode("Alamat")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$4$3), null, {
                                default: withCtx(() => [
                                  createVNode(_component_Textarea, mergeProps(componentField, { rows: "3" }), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$e))
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Field), { name: "jenisPayment" }, {
                    default: withCtx(({ value }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2$3), { class: "flex flex-col" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$1$5), null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Jenis Payment`);
                                  } else {
                                    return [
                                      createTextVNode("Jenis Payment")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Popover, {
                                open: _ctx.openPayment,
                                "onUpdate:open": ($event) => _ctx.openPayment = $event
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_PopoverTrigger, { "as-child": "" }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(_sfc_main$4$3), null, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(unref(_sfc_main$2$2), {
                                                  variant: "outline",
                                                  role: "combobox",
                                                  "aria-expanded": _ctx.openPayment,
                                                  class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-between", !value && "text-muted-foreground")
                                                }, {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    var _a, _b;
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(value ? (_a = listJenisPayment.find((item) => item.nama === value)) == null ? void 0 : _a.nama : "Select Payment...")} `);
                                                      _push9(ssrRenderComponent(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(value ? (_b = listJenisPayment.find((item) => item.nama === value)) == null ? void 0 : _b.nama : "Select Payment...") + " ", 1),
                                                        createVNode(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(unref(_sfc_main$2$2), {
                                                    variant: "outline",
                                                    role: "combobox",
                                                    "aria-expanded": _ctx.openPayment,
                                                    class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-between", !value && "text-muted-foreground")
                                                  }, {
                                                    default: withCtx(() => {
                                                      var _a;
                                                      return [
                                                        createTextVNode(toDisplayString(value ? (_a = listJenisPayment.find((item) => item.nama === value)) == null ? void 0 : _a.nama : "Select Payment...") + " ", 1),
                                                        createVNode(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1032, ["aria-expanded", "class"])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(_sfc_main$4$3), null, {
                                              default: withCtx(() => [
                                                createVNode(unref(_sfc_main$2$2), {
                                                  variant: "outline",
                                                  role: "combobox",
                                                  "aria-expanded": _ctx.openPayment,
                                                  class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-between", !value && "text-muted-foreground")
                                                }, {
                                                  default: withCtx(() => {
                                                    var _a;
                                                    return [
                                                      createTextVNode(toDisplayString(value ? (_a = listJenisPayment.find((item) => item.nama === value)) == null ? void 0 : _a.nama : "Select Payment...") + " ", 1),
                                                      createVNode(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
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
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_PopoverContent, { class: "p-0" }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_Command, null, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_CommandInput, { placeholder: "Search payment..." }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_CommandEmpty, null, {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`No payment found.`);
                                                    } else {
                                                      return [
                                                        createTextVNode("No payment found.")
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_CommandList, null, {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_CommandGroup, null, {
                                                        default: withCtx((_8, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<!--[-->`);
                                                            ssrRenderList(listJenisPayment, (item) => {
                                                              _push10(ssrRenderComponent(_component_CommandItem, {
                                                                key: item.nama,
                                                                value: item.nama,
                                                                onSelect: () => {
                                                                  unref(setFieldValue)("jenisPayment", item.nama);
                                                                  _ctx.openPayment = false;
                                                                }
                                                              }, {
                                                                default: withCtx((_9, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(_component_Check, {
                                                                      class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                                                        "mr-2 h-4 w-4",
                                                                        value === item.nama ? "opacity-100" : "opacity-0"
                                                                      )
                                                                    }, null, _parent11, _scopeId10));
                                                                    _push11(` ${ssrInterpolate(item.nama)}`);
                                                                  } else {
                                                                    return [
                                                                      createVNode(_component_Check, {
                                                                        class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                                                          "mr-2 h-4 w-4",
                                                                          value === item.nama ? "opacity-100" : "opacity-0"
                                                                        )
                                                                      }, null, 8, ["class"]),
                                                                      createTextVNode(" " + toDisplayString(item.nama), 1)
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                            });
                                                            _push10(`<!--]-->`);
                                                          } else {
                                                            return [
                                                              (openBlock(), createBlock(Fragment, null, renderList(listJenisPayment, (item) => {
                                                                return createVNode(_component_CommandItem, {
                                                                  key: item.nama,
                                                                  value: item.nama,
                                                                  onSelect: () => {
                                                                    unref(setFieldValue)("jenisPayment", item.nama);
                                                                    _ctx.openPayment = false;
                                                                  }
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_Check, {
                                                                      class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                                                        "mr-2 h-4 w-4",
                                                                        value === item.nama ? "opacity-100" : "opacity-0"
                                                                      )
                                                                    }, null, 8, ["class"]),
                                                                    createTextVNode(" " + toDisplayString(item.nama), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["value", "onSelect"]);
                                                              }), 64))
                                                            ];
                                                          }
                                                        }),
                                                        _: 2
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_CommandGroup, null, {
                                                          default: withCtx(() => [
                                                            (openBlock(), createBlock(Fragment, null, renderList(listJenisPayment, (item) => {
                                                              return createVNode(_component_CommandItem, {
                                                                key: item.nama,
                                                                value: item.nama,
                                                                onSelect: () => {
                                                                  unref(setFieldValue)("jenisPayment", item.nama);
                                                                  _ctx.openPayment = false;
                                                                }
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_Check, {
                                                                    class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                                                      "mr-2 h-4 w-4",
                                                                      value === item.nama ? "opacity-100" : "opacity-0"
                                                                    )
                                                                  }, null, 8, ["class"]),
                                                                  createTextVNode(" " + toDisplayString(item.nama), 1)
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
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_CommandInput, { placeholder: "Search payment..." }),
                                                  createVNode(_component_CommandEmpty, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("No payment found.")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_CommandList, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_CommandGroup, null, {
                                                        default: withCtx(() => [
                                                          (openBlock(), createBlock(Fragment, null, renderList(listJenisPayment, (item) => {
                                                            return createVNode(_component_CommandItem, {
                                                              key: item.nama,
                                                              value: item.nama,
                                                              onSelect: () => {
                                                                unref(setFieldValue)("jenisPayment", item.nama);
                                                                _ctx.openPayment = false;
                                                              }
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_Check, {
                                                                  class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                                                    "mr-2 h-4 w-4",
                                                                    value === item.nama ? "opacity-100" : "opacity-0"
                                                                  )
                                                                }, null, 8, ["class"]),
                                                                createTextVNode(" " + toDisplayString(item.nama), 1)
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_Command, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_CommandInput, { placeholder: "Search payment..." }),
                                                createVNode(_component_CommandEmpty, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("No payment found.")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_CommandList, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_CommandGroup, null, {
                                                      default: withCtx(() => [
                                                        (openBlock(), createBlock(Fragment, null, renderList(listJenisPayment, (item) => {
                                                          return createVNode(_component_CommandItem, {
                                                            key: item.nama,
                                                            value: item.nama,
                                                            onSelect: () => {
                                                              unref(setFieldValue)("jenisPayment", item.nama);
                                                              _ctx.openPayment = false;
                                                            }
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_Check, {
                                                                class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                                                  "mr-2 h-4 w-4",
                                                                  value === item.nama ? "opacity-100" : "opacity-0"
                                                                )
                                                              }, null, 8, ["class"]),
                                                              createTextVNode(" " + toDisplayString(item.nama), 1)
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$4$3), null, {
                                            default: withCtx(() => [
                                              createVNode(unref(_sfc_main$2$2), {
                                                variant: "outline",
                                                role: "combobox",
                                                "aria-expanded": _ctx.openPayment,
                                                class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-between", !value && "text-muted-foreground")
                                              }, {
                                                default: withCtx(() => {
                                                  var _a;
                                                  return [
                                                    createTextVNode(toDisplayString(value ? (_a = listJenisPayment.find((item) => item.nama === value)) == null ? void 0 : _a.nama : "Select Payment...") + " ", 1),
                                                    createVNode(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
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
                                      createVNode(_component_PopoverContent, { class: "p-0" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Command, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_CommandInput, { placeholder: "Search payment..." }),
                                              createVNode(_component_CommandEmpty, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("No payment found.")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_CommandList, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_CommandGroup, null, {
                                                    default: withCtx(() => [
                                                      (openBlock(), createBlock(Fragment, null, renderList(listJenisPayment, (item) => {
                                                        return createVNode(_component_CommandItem, {
                                                          key: item.nama,
                                                          value: item.nama,
                                                          onSelect: () => {
                                                            unref(setFieldValue)("jenisPayment", item.nama);
                                                            _ctx.openPayment = false;
                                                          }
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_Check, {
                                                              class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                                                "mr-2 h-4 w-4",
                                                                value === item.nama ? "opacity-100" : "opacity-0"
                                                              )
                                                            }, null, 8, ["class"]),
                                                            createTextVNode(" " + toDisplayString(item.nama), 1)
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$e), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$1$5), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Jenis Payment")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Popover, {
                                  open: _ctx.openPayment,
                                  "onUpdate:open": ($event) => _ctx.openPayment = $event
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$4$3), null, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$2$2), {
                                              variant: "outline",
                                              role: "combobox",
                                              "aria-expanded": _ctx.openPayment,
                                              class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-between", !value && "text-muted-foreground")
                                            }, {
                                              default: withCtx(() => {
                                                var _a;
                                                return [
                                                  createTextVNode(toDisplayString(value ? (_a = listJenisPayment.find((item) => item.nama === value)) == null ? void 0 : _a.nama : "Select Payment...") + " ", 1),
                                                  createVNode(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
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
                                    createVNode(_component_PopoverContent, { class: "p-0" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Command, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_CommandInput, { placeholder: "Search payment..." }),
                                            createVNode(_component_CommandEmpty, null, {
                                              default: withCtx(() => [
                                                createTextVNode("No payment found.")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_CommandList, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_CommandGroup, null, {
                                                  default: withCtx(() => [
                                                    (openBlock(), createBlock(Fragment, null, renderList(listJenisPayment, (item) => {
                                                      return createVNode(_component_CommandItem, {
                                                        key: item.nama,
                                                        value: item.nama,
                                                        onSelect: () => {
                                                          unref(setFieldValue)("jenisPayment", item.nama);
                                                          _ctx.openPayment = false;
                                                        }
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_Check, {
                                                            class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                                              "mr-2 h-4 w-4",
                                                              value === item.nama ? "opacity-100" : "opacity-0"
                                                            )
                                                          }, null, 8, ["class"]),
                                                          createTextVNode(" " + toDisplayString(item.nama), 1)
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
                                createVNode(unref(_sfc_main$e))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2$3), { class: "flex flex-col" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$1$5), null, {
                                default: withCtx(() => [
                                  createTextVNode("Jenis Payment")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Popover, {
                                open: _ctx.openPayment,
                                "onUpdate:open": ($event) => _ctx.openPayment = $event
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$4$3), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$2$2), {
                                            variant: "outline",
                                            role: "combobox",
                                            "aria-expanded": _ctx.openPayment,
                                            class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-between", !value && "text-muted-foreground")
                                          }, {
                                            default: withCtx(() => {
                                              var _a;
                                              return [
                                                createTextVNode(toDisplayString(value ? (_a = listJenisPayment.find((item) => item.nama === value)) == null ? void 0 : _a.nama : "Select Payment...") + " ", 1),
                                                createVNode(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
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
                                  createVNode(_component_PopoverContent, { class: "p-0" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Command, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_CommandInput, { placeholder: "Search payment..." }),
                                          createVNode(_component_CommandEmpty, null, {
                                            default: withCtx(() => [
                                              createTextVNode("No payment found.")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_CommandList, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_CommandGroup, null, {
                                                default: withCtx(() => [
                                                  (openBlock(), createBlock(Fragment, null, renderList(listJenisPayment, (item) => {
                                                    return createVNode(_component_CommandItem, {
                                                      key: item.nama,
                                                      value: item.nama,
                                                      onSelect: () => {
                                                        unref(setFieldValue)("jenisPayment", item.nama);
                                                        _ctx.openPayment = false;
                                                      }
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_Check, {
                                                          class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                                            "mr-2 h-4 w-4",
                                                            value === item.nama ? "opacity-100" : "opacity-0"
                                                          )
                                                        }, null, 8, ["class"]),
                                                        createTextVNode(" " + toDisplayString(item.nama), 1)
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
                              createVNode(unref(_sfc_main$e))
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$4$5), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$7$2), { "as-child": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$2$2), {
                                type: "button",
                                variant: "secondary",
                                onClick: closeDialog
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Close `);
                                  } else {
                                    return [
                                      createTextVNode(" Close ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$2$2), {
                                  type: "button",
                                  variant: "secondary",
                                  onClick: closeDialog
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Close ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (isSubmitting.value) {
                          _push4(`<span${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$2$2), { disabled: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Loader2, { class: "w-4 h-4 mr-2 animate-spin" }, null, _parent5, _scopeId4));
                                _push5(` Updating.. `);
                              } else {
                                return [
                                  createVNode(_component_Loader2, { class: "w-4 h-4 mr-2 animate-spin" }),
                                  createTextVNode(" Updating.. ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</span>`);
                        } else {
                          _push4(ssrRenderComponent(unref(_sfc_main$2$2), { type: "submit" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Update `);
                              } else {
                                return [
                                  createTextVNode("Update ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          createVNode(unref(_sfc_main$7$2), { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$2$2), {
                                type: "button",
                                variant: "secondary",
                                onClick: closeDialog
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Close ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          isSubmitting.value ? (openBlock(), createBlock("span", { key: 0 }, [
                            createVNode(unref(_sfc_main$2$2), { disabled: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_Loader2, { class: "w-4 h-4 mr-2 animate-spin" }),
                                createTextVNode(" Updating.. ")
                              ]),
                              _: 1
                            })
                          ])) : (openBlock(), createBlock(unref(_sfc_main$2$2), {
                            key: 1,
                            type: "submit"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Update ")
                            ]),
                            _: 1
                          }))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</form>`);
                } else {
                  return [
                    createVNode("form", {
                      class: "space-y-8",
                      onSubmit: withModifiers(unref(onSubmit), ["prevent"])
                    }, [
                      createVNode(unref(_sfc_main$3$2), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$1$4), null, {
                            default: withCtx(() => [
                              createTextVNode("Edit Data PO")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "max-h-[60vh] overflow-y-auto pr-2" }, [
                        createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                          createVNode(unref(Field), { name: "idProyek" }, {
                            default: withCtx(({ value }) => [
                              createVNode(unref(_sfc_main$2$3), { class: "flex flex-col" }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$1$5), null, {
                                    default: withCtx(() => [
                                      createTextVNode("Pilih Proyek")
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
                                          createVNode(unref(_sfc_main$4$3), null, {
                                            default: withCtx(() => [
                                              createVNode(unref(_sfc_main$2$2), {
                                                variant: "outline",
                                                role: "combobox",
                                                "aria-expanded": open.value,
                                                class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-between", !value && "text-muted-foreground")
                                              }, {
                                                default: withCtx(() => {
                                                  var _a;
                                                  return [
                                                    createTextVNode(toDisplayString(value ? (_a = proyekList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaPekerjaan : "Select Proyek...") + " ", 1),
                                                    createVNode(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
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
                                      createVNode(_component_PopoverContent, { class: "p-0" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Command, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_CommandInput, { placeholder: "Search Proyek..." }),
                                              createVNode(_component_CommandEmpty, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("No Proyek found.")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_CommandList, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_CommandGroup, null, {
                                                    default: withCtx(() => [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(proyekList.value, (item) => {
                                                        return openBlock(), createBlock(_component_CommandItem, {
                                                          key: item.id,
                                                          value: item.namaPekerjaan,
                                                          onSelect: () => {
                                                            unref(setFieldValue)("idProyek", item.id);
                                                            open.value = false;
                                                          }
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_Check, {
                                                              class: ("cn" in _ctx ? _ctx.cn : unref(cn))("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                            }, null, 8, ["class"]),
                                                            createTextVNode(" " + toDisplayString(item.namaPekerjaan), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["value", "onSelect"]);
                                                      }), 128))
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
                                  createVNode(unref(_sfc_main$e))
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Field), { name: "tanggal" }, {
                            default: withCtx(({ field, value }) => [
                              createVNode(unref(_sfc_main$2$3), { class: "flex flex-col" }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$1$5), null, {
                                    default: withCtx(() => [
                                      createTextVNode("Tanggal")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Popover, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$4$3), null, {
                                            default: withCtx(() => [
                                              createVNode(unref(_sfc_main$2$2), {
                                                variant: "outline",
                                                class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                                  "justify-start text-left font-normal",
                                                  !value && "text-muted-foreground"
                                                )
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                                  createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(dateMulai.value, unref(getLocalTimeZone)())) : "Pick a date"), 1)
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
                                            placeholder: _ctx.placeholder,
                                            "onUpdate:placeholder": ($event) => _ctx.placeholder = $event,
                                            modelValue: dateMulai.value,
                                            "onUpdate:modelValue": [
                                              ($event) => dateMulai.value = $event,
                                              (v) => {
                                                if (v) {
                                                  dateMulai.value = v;
                                                  unref(setFieldValue)("tanggal", unref(toDate)(v).toISOString());
                                                } else {
                                                  dateMulai.value = void 0;
                                                  unref(setFieldValue)("tanggal", void 0);
                                                }
                                              }
                                            ],
                                            "calendar-label": "Tanggal",
                                            "initial-focus": ""
                                          }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$e))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("input", mergeProps({ type: "hidden" }, field), null, 16)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Field), { name: "ppn" }, {
                            default: withCtx(({ componentField }) => [
                              createVNode(unref(_sfc_main$2$3), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$1$5), null, {
                                    default: withCtx(() => [
                                      createTextVNode("PPN %")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$4$3), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$8), mergeProps({ type: "number" }, componentField), null, 16)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$e))
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Field), { name: "penerima" }, {
                            default: withCtx(({ componentField }) => [
                              createVNode(unref(_sfc_main$2$3), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$1$5), null, {
                                    default: withCtx(() => [
                                      createTextVNode("Penerima")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$4$3), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$8), mergeProps({ type: "text" }, componentField), null, 16)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$e))
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Field), { name: "noTelepon" }, {
                            default: withCtx(({ componentField }) => [
                              createVNode(unref(_sfc_main$2$3), { class: "flex flex-col h-full" }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$1$5), null, {
                                    default: withCtx(() => [
                                      createTextVNode("No. Telepon")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$4$3), { class: "flex-1" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$8), mergeProps({ type: "text" }, componentField), null, 16)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$e))
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Field), { name: "tglPengiriman" }, {
                            default: withCtx(({ field, value }) => [
                              createVNode(unref(_sfc_main$2$3), { class: "flex flex-col h-full" }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$1$5), null, {
                                    default: withCtx(() => [
                                      createTextVNode("Tanggal Pengiriman")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$4$3), { class: "flex-1" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Popover, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                            default: withCtx(() => [
                                              createVNode(unref(_sfc_main$2$2), {
                                                variant: "outline",
                                                class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                                  "justify-start text-left font-normal w-full",
                                                  !value && "text-muted-foreground"
                                                )
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                                  createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(datePengiriman.value, unref(getLocalTimeZone)())) : "Pick a date"), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["class"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_PopoverContent, { class: "p-0" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_Calendar, {
                                                placeholder: _ctx.placeholder,
                                                "onUpdate:placeholder": ($event) => _ctx.placeholder = $event,
                                                modelValue: datePengiriman.value,
                                                "onUpdate:modelValue": [
                                                  ($event) => datePengiriman.value = $event,
                                                  (v) => {
                                                    if (v) {
                                                      datePengiriman.value = v;
                                                      unref(setFieldValue)("tglPengiriman", unref(toDate)(v).toISOString());
                                                    } else {
                                                      datePengiriman.value = void 0;
                                                      unref(setFieldValue)("tglPengiriman", void 0);
                                                    }
                                                  }
                                                ],
                                                "calendar-label": "tglPengiriman",
                                                "initial-focus": ""
                                              }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("input", mergeProps({ type: "hidden" }, field), null, 16),
                                  createVNode(unref(_sfc_main$e))
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Field), {
                            name: "tujuanPo",
                            class: "md:col-span-1"
                          }, {
                            default: withCtx(({ componentField }) => [
                              createVNode(unref(_sfc_main$2$3), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$1$5), null, {
                                    default: withCtx(() => [
                                      createTextVNode("Tujuan PO")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$4$3), null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Textarea, mergeProps(componentField, { rows: "3" }), null, 16)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$e))
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Field), {
                            name: "alamat",
                            class: "md:col-span-1"
                          }, {
                            default: withCtx(({ componentField }) => [
                              createVNode(unref(_sfc_main$2$3), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$1$5), null, {
                                    default: withCtx(() => [
                                      createTextVNode("Alamat")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$4$3), null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Textarea, mergeProps(componentField, { rows: "3" }), null, 16)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$e))
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Field), { name: "jenisPayment" }, {
                            default: withCtx(({ value }) => [
                              createVNode(unref(_sfc_main$2$3), { class: "flex flex-col" }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$1$5), null, {
                                    default: withCtx(() => [
                                      createTextVNode("Jenis Payment")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Popover, {
                                    open: _ctx.openPayment,
                                    "onUpdate:open": ($event) => _ctx.openPayment = $event
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$4$3), null, {
                                            default: withCtx(() => [
                                              createVNode(unref(_sfc_main$2$2), {
                                                variant: "outline",
                                                role: "combobox",
                                                "aria-expanded": _ctx.openPayment,
                                                class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-between", !value && "text-muted-foreground")
                                              }, {
                                                default: withCtx(() => {
                                                  var _a;
                                                  return [
                                                    createTextVNode(toDisplayString(value ? (_a = listJenisPayment.find((item) => item.nama === value)) == null ? void 0 : _a.nama : "Select Payment...") + " ", 1),
                                                    createVNode(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
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
                                      createVNode(_component_PopoverContent, { class: "p-0" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Command, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_CommandInput, { placeholder: "Search payment..." }),
                                              createVNode(_component_CommandEmpty, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("No payment found.")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_CommandList, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_CommandGroup, null, {
                                                    default: withCtx(() => [
                                                      (openBlock(), createBlock(Fragment, null, renderList(listJenisPayment, (item) => {
                                                        return createVNode(_component_CommandItem, {
                                                          key: item.nama,
                                                          value: item.nama,
                                                          onSelect: () => {
                                                            unref(setFieldValue)("jenisPayment", item.nama);
                                                            _ctx.openPayment = false;
                                                          }
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_Check, {
                                                              class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                                                "mr-2 h-4 w-4",
                                                                value === item.nama ? "opacity-100" : "opacity-0"
                                                              )
                                                            }, null, 8, ["class"]),
                                                            createTextVNode(" " + toDisplayString(item.nama), 1)
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
                                  createVNode(unref(_sfc_main$e))
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode(unref(_sfc_main$4$5), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$7$2), { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$2$2), {
                                type: "button",
                                variant: "secondary",
                                onClick: closeDialog
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Close ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          isSubmitting.value ? (openBlock(), createBlock("span", { key: 0 }, [
                            createVNode(unref(_sfc_main$2$2), { disabled: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_Loader2, { class: "w-4 h-4 mr-2 animate-spin" }),
                                createTextVNode(" Updating.. ")
                              ]),
                              _: 1
                            })
                          ])) : (openBlock(), createBlock(unref(_sfc_main$2$2), {
                            key: 1,
                            type: "submit"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Update ")
                            ]),
                            _: 1
                          }))
                        ]),
                        _: 1
                      })
                    ], 40, ["onSubmit"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$c), { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_TooltipProvider, null, {
                    default: withCtx(() => [
                      createVNode(_component_Tooltip, null, {
                        default: withCtx(() => [
                          createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$2$2), {
                                onClick: openDialog,
                                size: "sm"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(PencilIcon), { class: "w-4 h-4" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TooltipContent, null, {
                            default: withCtx(() => [
                              createVNode("p", null, "Edit Data")
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
              }),
              createVNode(unref(_sfc_main$6$2), { class: "sm:max-w-[800px] [&>button]:hidden" }, {
                default: withCtx(() => [
                  createVNode("form", {
                    class: "space-y-8",
                    onSubmit: withModifiers(unref(onSubmit), ["prevent"])
                  }, [
                    createVNode(unref(_sfc_main$3$2), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$1$4), null, {
                          default: withCtx(() => [
                            createTextVNode("Edit Data PO")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "max-h-[60vh] overflow-y-auto pr-2" }, [
                      createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                        createVNode(unref(Field), { name: "idProyek" }, {
                          default: withCtx(({ value }) => [
                            createVNode(unref(_sfc_main$2$3), { class: "flex flex-col" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$1$5), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Pilih Proyek")
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
                                        createVNode(unref(_sfc_main$4$3), null, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$2$2), {
                                              variant: "outline",
                                              role: "combobox",
                                              "aria-expanded": open.value,
                                              class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-between", !value && "text-muted-foreground")
                                            }, {
                                              default: withCtx(() => {
                                                var _a;
                                                return [
                                                  createTextVNode(toDisplayString(value ? (_a = proyekList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaPekerjaan : "Select Proyek...") + " ", 1),
                                                  createVNode(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
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
                                    createVNode(_component_PopoverContent, { class: "p-0" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Command, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_CommandInput, { placeholder: "Search Proyek..." }),
                                            createVNode(_component_CommandEmpty, null, {
                                              default: withCtx(() => [
                                                createTextVNode("No Proyek found.")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_CommandList, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_CommandGroup, null, {
                                                  default: withCtx(() => [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(proyekList.value, (item) => {
                                                      return openBlock(), createBlock(_component_CommandItem, {
                                                        key: item.id,
                                                        value: item.namaPekerjaan,
                                                        onSelect: () => {
                                                          unref(setFieldValue)("idProyek", item.id);
                                                          open.value = false;
                                                        }
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_Check, {
                                                            class: ("cn" in _ctx ? _ctx.cn : unref(cn))("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                          }, null, 8, ["class"]),
                                                          createTextVNode(" " + toDisplayString(item.namaPekerjaan), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["value", "onSelect"]);
                                                    }), 128))
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
                                createVNode(unref(_sfc_main$e))
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), { name: "tanggal" }, {
                          default: withCtx(({ field, value }) => [
                            createVNode(unref(_sfc_main$2$3), { class: "flex flex-col" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$1$5), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Tanggal")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Popover, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$4$3), null, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$2$2), {
                                              variant: "outline",
                                              class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                                "justify-start text-left font-normal",
                                                !value && "text-muted-foreground"
                                              )
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                                createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(dateMulai.value, unref(getLocalTimeZone)())) : "Pick a date"), 1)
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
                                          placeholder: _ctx.placeholder,
                                          "onUpdate:placeholder": ($event) => _ctx.placeholder = $event,
                                          modelValue: dateMulai.value,
                                          "onUpdate:modelValue": [
                                            ($event) => dateMulai.value = $event,
                                            (v) => {
                                              if (v) {
                                                dateMulai.value = v;
                                                unref(setFieldValue)("tanggal", unref(toDate)(v).toISOString());
                                              } else {
                                                dateMulai.value = void 0;
                                                unref(setFieldValue)("tanggal", void 0);
                                              }
                                            }
                                          ],
                                          "calendar-label": "Tanggal",
                                          "initial-focus": ""
                                        }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$e))
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("input", mergeProps({ type: "hidden" }, field), null, 16)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), { name: "ppn" }, {
                          default: withCtx(({ componentField }) => [
                            createVNode(unref(_sfc_main$2$3), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$1$5), null, {
                                  default: withCtx(() => [
                                    createTextVNode("PPN %")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4$3), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$8), mergeProps({ type: "number" }, componentField), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$e))
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), { name: "penerima" }, {
                          default: withCtx(({ componentField }) => [
                            createVNode(unref(_sfc_main$2$3), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$1$5), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Penerima")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4$3), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$8), mergeProps({ type: "text" }, componentField), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$e))
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), { name: "noTelepon" }, {
                          default: withCtx(({ componentField }) => [
                            createVNode(unref(_sfc_main$2$3), { class: "flex flex-col h-full" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$1$5), null, {
                                  default: withCtx(() => [
                                    createTextVNode("No. Telepon")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4$3), { class: "flex-1" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$8), mergeProps({ type: "text" }, componentField), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$e))
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), { name: "tglPengiriman" }, {
                          default: withCtx(({ field, value }) => [
                            createVNode(unref(_sfc_main$2$3), { class: "flex flex-col h-full" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$1$5), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Tanggal Pengiriman")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4$3), { class: "flex-1" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Popover, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$2$2), {
                                              variant: "outline",
                                              class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                                "justify-start text-left font-normal w-full",
                                                !value && "text-muted-foreground"
                                              )
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_RadixIconsCalendar, { class: "mr-2 h-4 w-4 opacity-50" }),
                                                createVNode("span", null, toDisplayString(value ? unref(df).format(unref(toDate)(datePengiriman.value, unref(getLocalTimeZone)())) : "Pick a date"), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["class"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_PopoverContent, { class: "p-0" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Calendar, {
                                              placeholder: _ctx.placeholder,
                                              "onUpdate:placeholder": ($event) => _ctx.placeholder = $event,
                                              modelValue: datePengiriman.value,
                                              "onUpdate:modelValue": [
                                                ($event) => datePengiriman.value = $event,
                                                (v) => {
                                                  if (v) {
                                                    datePengiriman.value = v;
                                                    unref(setFieldValue)("tglPengiriman", unref(toDate)(v).toISOString());
                                                  } else {
                                                    datePengiriman.value = void 0;
                                                    unref(setFieldValue)("tglPengiriman", void 0);
                                                  }
                                                }
                                              ],
                                              "calendar-label": "tglPengiriman",
                                              "initial-focus": ""
                                            }, null, 8, ["placeholder", "onUpdate:placeholder", "modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("input", mergeProps({ type: "hidden" }, field), null, 16),
                                createVNode(unref(_sfc_main$e))
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), {
                          name: "tujuanPo",
                          class: "md:col-span-1"
                        }, {
                          default: withCtx(({ componentField }) => [
                            createVNode(unref(_sfc_main$2$3), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$1$5), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Tujuan PO")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4$3), null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Textarea, mergeProps(componentField, { rows: "3" }), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$e))
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), {
                          name: "alamat",
                          class: "md:col-span-1"
                        }, {
                          default: withCtx(({ componentField }) => [
                            createVNode(unref(_sfc_main$2$3), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$1$5), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Alamat")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4$3), null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Textarea, mergeProps(componentField, { rows: "3" }), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$e))
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), { name: "jenisPayment" }, {
                          default: withCtx(({ value }) => [
                            createVNode(unref(_sfc_main$2$3), { class: "flex flex-col" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$1$5), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Jenis Payment")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Popover, {
                                  open: _ctx.openPayment,
                                  "onUpdate:open": ($event) => _ctx.openPayment = $event
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$4$3), null, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$2$2), {
                                              variant: "outline",
                                              role: "combobox",
                                              "aria-expanded": _ctx.openPayment,
                                              class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-between", !value && "text-muted-foreground")
                                            }, {
                                              default: withCtx(() => {
                                                var _a;
                                                return [
                                                  createTextVNode(toDisplayString(value ? (_a = listJenisPayment.find((item) => item.nama === value)) == null ? void 0 : _a.nama : "Select Payment...") + " ", 1),
                                                  createVNode(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
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
                                    createVNode(_component_PopoverContent, { class: "p-0" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Command, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_CommandInput, { placeholder: "Search payment..." }),
                                            createVNode(_component_CommandEmpty, null, {
                                              default: withCtx(() => [
                                                createTextVNode("No payment found.")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_CommandList, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_CommandGroup, null, {
                                                  default: withCtx(() => [
                                                    (openBlock(), createBlock(Fragment, null, renderList(listJenisPayment, (item) => {
                                                      return createVNode(_component_CommandItem, {
                                                        key: item.nama,
                                                        value: item.nama,
                                                        onSelect: () => {
                                                          unref(setFieldValue)("jenisPayment", item.nama);
                                                          _ctx.openPayment = false;
                                                        }
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_Check, {
                                                            class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                                              "mr-2 h-4 w-4",
                                                              value === item.nama ? "opacity-100" : "opacity-0"
                                                            )
                                                          }, null, 8, ["class"]),
                                                          createTextVNode(" " + toDisplayString(item.nama), 1)
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
                                createVNode(unref(_sfc_main$e))
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode(unref(_sfc_main$4$5), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$7$2), { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$2$2), {
                              type: "button",
                              variant: "secondary",
                              onClick: closeDialog
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Close ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        isSubmitting.value ? (openBlock(), createBlock("span", { key: 0 }, [
                          createVNode(unref(_sfc_main$2$2), { disabled: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_Loader2, { class: "w-4 h-4 mr-2 animate-spin" }),
                              createTextVNode(" Updating.. ")
                            ]),
                            _: 1
                          })
                        ])) : (openBlock(), createBlock(unref(_sfc_main$2$2), {
                          key: 1,
                          type: "submit"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Update ")
                          ]),
                          _: 1
                        }))
                      ]),
                      _: 1
                    })
                  ], 40, ["onSubmit"])
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/po/EditData.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DetailPo",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  emits: ["detailPo"],
  setup(__props, { emit: __emit }) {
    var _a;
    const props = __props;
    const emit = __emit;
    const config = useRuntimeConfig();
    const baseUrl = config.public.apiBase;
    const isDialogOpen = ref(false);
    function openDialog() {
      isDialogOpen.value = true;
      fetchData();
      fetchDataDetailPO();
    }
    function closeDialog() {
      isDialogOpen.value = false;
    }
    const headerPo = reactive({
      idPo: 0,
      noPo: "",
      tanggal: "",
      ppn: 0,
      // default 11%
      noTelepon: ""
    });
    const accessToken = useCookie("accessToken");
    const token = (_a = accessToken.value) == null ? void 0 : _a.token;
    async function fetchData() {
      var _a3, _b2, _c2, _d2, _e2, _f2, _g2;
      var _a2, _b, _c, _d, _e, _f, _g, _h;
      try {
        const response = await fetch(`${baseUrl}/po/${props.id}`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` }
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const fetchedData = await response.json();
        Object.assign(headerPo, {
          idPo: (_b2 = (_a3 = (_a2 = fetchedData.data) == null ? void 0 : _a2.idPo) != null ? _a3 : (_b = fetchedData.data) == null ? void 0 : _b.id) != null ? _b2 : "",
          noPo: (_d2 = (_c2 = (_c = fetchedData.data) == null ? void 0 : _c.noPo) != null ? _c2 : (_d = fetchedData.data) == null ? void 0 : _d.no_po) != null ? _d2 : "",
          tanggal: ((_e = fetchedData.data) == null ? void 0 : _e.tanggal) ? format(new Date(fetchedData.data.tanggal), "yyyy-MM-dd") : "",
          ppn: (_e2 = (_f = fetchedData.data) == null ? void 0 : _f.ppn) != null ? _e2 : 11,
          noTelepon: (_g2 = (_f2 = (_g = fetchedData.data) == null ? void 0 : _g.noTelepon) != null ? _f2 : (_h = fetchedData.data) == null ? void 0 : _h.no_telepon) != null ? _g2 : ""
        });
      } catch (err) {
        console.error("Gagal fetch PO:", err);
        toast({ title: "Error", description: "Gagal mengambil header PO", variant: "destructive" });
      }
    }
    const dataDetail = ref([
      { item: "", ukuran: "", banyak: 0, satuan: "", harga: 0, total: 0, refHarga: 0, idBarang: 0 }
    ]);
    async function fetchDataDetailPO() {
      var _a2;
      try {
        const response = await fetch(`${baseUrl}/detailPo?idPo=${props.id}`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` }
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const fetchedData = await response.json();
        dataDetail.value = ((_a2 = fetchedData.data) == null ? void 0 : _a2.length) ? fetchedData.data : [{ item: "", ukuran: "", banyak: 0, satuan: "", harga: 0, total: 0, refHarga: 0 }];
      } catch (err) {
        console.error("Gagal fetch Detail PO:", err);
        toast({ title: "Error", description: "Gagal mengambil Detail PO", variant: "destructive" });
      }
    }
    const masterBarang = ref([]);
    function addRow() {
      dataDetail.value.push({
        idBarang: 0,
        item: "",
        ukuran: "",
        banyak: 0,
        satuan: "",
        harga: 0,
        total: 0,
        refHarga: 0
      });
    }
    function removeRow(index, ev) {
      ev == null ? void 0 : ev.preventDefault();
      if (dataDetail.value.length > 1) dataDetail.value.splice(index, 1);
    }
    function calculateTotal(index) {
      const row = dataDetail.value[index];
      const banyak = Number(row.banyak) || 0;
      const harga = Number(row.harga) || 0;
      row.total = banyak * harga;
    }
    function handleHargaChange(index, val) {
      const row = dataDetail.value[index];
      if (val > row.refHarga) {
        toast({
          title: "Harga Melebihi Batas",
          description: `Harga tidak boleh melebihi harga referensi (${formatRupiah(row.refHarga)})`,
          variant: "destructive"
        });
        row.harga = row.refHarga;
      } else {
        row.harga = val;
      }
      calculateTotal(index);
    }
    const subtotal = computed(
      () => dataDetail.value.reduce((sum, row) => sum + (Number(row.total) || 0), 0)
    );
    const totalPpn = computed(() => subtotal.value * Number(headerPo.ppn) / 100);
    const grandTotal = computed(() => subtotal.value + totalPpn.value);
    const isValid = computed(
      () => dataDetail.value.some((d) => d.item && Number(d.banyak) > 0 && Number(d.harga) > 0)
    );
    const currentUser = useCookie("currentUser");
    const username = computed(() => {
      var _a2;
      return ((_a2 = currentUser.value) == null ? void 0 : _a2.username) || "no-username@example.com";
    });
    const openPopover = ref({});
    function handleBarangSelect(index, barang) {
      const row = dataDetail.value[index];
      row.idBarang = barang.id;
      row.item = barang.namaBarang;
      row.ukuran = barang.spesifikasi;
      row.satuan = barang.unit;
      row.refHarga = barang.harga;
      row.harga = barang.harga;
      calculateTotal(index);
      openPopover.value[index] = false;
    }
    const isLoading = ref(false);
    async function handleSubmit() {
      isLoading.value = true;
      if (!isValid.value) {
        toast({
          title: "Data belum lengkap",
          description: "Isi minimal 1 baris dengan item, banyak, dan harga sebelum menyimpan.",
          variant: "destructive"
        });
        return;
      }
      const payload = {
        idPo: headerPo.idPo,
        ppn: Number(headerPo.ppn),
        dataDetail: dataDetail.value.filter((d) => d.item && Number(d.banyak) > 0 && Number(d.harga) > 0).map((d) => ({
          idBarang: d.idBarang,
          item: d.item,
          ukuran: d.ukuran,
          banyak: Number(d.banyak),
          satuan: d.satuan,
          harga: Number(d.harga),
          total: Number(d.total)
        })),
        subtotal: subtotal.value,
        totalPpn: totalPpn.value,
        grandTotal: grandTotal.value,
        createdBy: username.value
      };
      console.log(JSON.stringify(payload));
      const response = await fetch(`${baseUrl}/detailPo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        toast({ title: "Success", description: "Data berhasil disimpan." });
        isLoading.value = false;
        emit("detailPo", payload);
        closeDialog();
      } else {
        toast({ title: "Error", description: "Gagal menyimpan data. Silakan coba lagi." });
      }
    }
    function formatRupiah(value) {
      const val = typeof value === "object" ? value.value : value;
      return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(val || 0);
    }
    const searchQuery = ref("");
    const filteredBarang = computed(() => {
      if (!searchQuery.value) return masterBarang.value;
      return masterBarang.value.filter(
        (b) => {
          var _a2;
          return (_a2 = b.namaBarang) == null ? void 0 : _a2.toLowerCase().includes(searchQuery.value.toLowerCase());
        }
      );
    });
    watch(searchQuery, (v) => {
      console.log("searchQuery berubah:", v);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Popover = _sfc_main$2$4;
      const _component_PopoverTrigger = _sfc_main$d;
      const _component_ChevronsUpDown = resolveComponent("ChevronsUpDown");
      const _component_PopoverContent = _sfc_main$1$6;
      const _component_Check = resolveComponent("Check");
      _push(ssrRenderComponent(unref(_sfc_main$8$1), mergeProps({
        open: isDialogOpen.value,
        onOpenChange: ($event) => isDialogOpen.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$c), { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$2$2), {
                    size: "sm",
                    onClick: openDialog
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(PlusSquareIcon), { class: "w-4 h-4" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(PlusSquareIcon), { class: "w-4 h-4" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$2$2), {
                      size: "sm",
                      onClick: openDialog
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(PlusSquareIcon), { class: "w-4 h-4" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$6$2), { class: "sm:max-w-[90vw] w-full max-h-[90vh] flex flex-col overflow-hidden" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3$2), { class: "border-b pb-2 shrink-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$1$4), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Detail Purchase Order (PO)`);
                            } else {
                              return [
                                createTextVNode("Detail Purchase Order (PO)")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$1$4), null, {
                            default: withCtx(() => [
                              createTextVNode("Detail Purchase Order (PO)")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<form id="poForm" class="flex-1 overflow-y-auto p-4 space-y-6"${_scopeId2}><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId2}><div${_scopeId2}><label class="text-sm font-medium text-gray-600"${_scopeId2}>No. PO</label>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$8), {
                    modelValue: headerPo.idPo,
                    "onUpdate:modelValue": ($event) => headerPo.idPo = $event,
                    class: "hidden"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$8), {
                    modelValue: headerPo.noPo,
                    "onUpdate:modelValue": ($event) => headerPo.noPo = $event,
                    disabled: "",
                    class: "bg-gray-50"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}><label class="text-sm font-medium text-gray-600"${_scopeId2}>Tanggal</label>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$8), {
                    modelValue: headerPo.tanggal,
                    "onUpdate:modelValue": ($event) => headerPo.tanggal = $event,
                    disabled: "",
                    class: "bg-gray-50"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}><label class="text-sm font-medium text-gray-600"${_scopeId2}>PPN (%)</label>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$8), {
                    type: "number",
                    modelValue: headerPo.ppn,
                    "onUpdate:modelValue": ($event) => headerPo.ppn = $event,
                    disabled: "",
                    class: "bg-white"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}><label class="text-sm font-medium text-gray-600"${_scopeId2}>No. Telepon</label>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$8), {
                    modelValue: headerPo.noTelepon,
                    "onUpdate:modelValue": ($event) => headerPo.noTelepon = $event,
                    disabled: "",
                    class: "bg-gray-50"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="border rounded-xl overflow-hidden shadow-sm"${_scopeId2}><table class="min-w-full text-sm"${_scopeId2}><thead class="bg-gray-100 text-gray-700"${_scopeId2}><tr${_scopeId2}><th class="px-3 py-2 text-left w-12"${_scopeId2}>No</th><th class="px-3 py-2 text-left"${_scopeId2}>Item</th><th class="px-3 py-2 text-left"${_scopeId2}>Ukuran / Type</th><th class="px-3 py-2 text-left w-24"${_scopeId2}>Banyak</th><th class="px-3 py-2 text-left w-24"${_scopeId2}>Satuan</th><th class="px-3 py-2 text-left w-32"${_scopeId2}>Ref. Harga</th><th class="px-3 py-2 text-left w-32"${_scopeId2}>Harga</th><th class="px-3 py-2 text-left"${_scopeId2}>Total</th><th class="px-3 py-2 text-center w-12"${_scopeId2}>\u{1F5D1}</th></tr></thead><tbody${_scopeId2}><!--[-->`);
                  ssrRenderList(dataDetail.value, (row, i) => {
                    _push3(`<tr class="border-t hover:bg-gray-50 transition"${_scopeId2}><td class="px-3 py-2"${_scopeId2}>${ssrInterpolate(i + 1)}</td><td class="px-3 py-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Popover, {
                      open: openPopover.value[i],
                      "onUpdate:open": [
                        ($event) => openPopover.value[i] = $event,
                        (val) => {
                          openPopover.value[i] = val;
                          if (val) searchQuery.value = "";
                        }
                      ]
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_PopoverTrigger, { "as-child": "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$2$2), {
                                  variant: "outline",
                                  role: "combobox",
                                  "aria-expanded": openPopover.value[i],
                                  class: "w-full justify-between"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(row.item || "Pilih Barang...")} `);
                                      _push6(ssrRenderComponent(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(row.item || "Pilih Barang...") + " ", 1),
                                        createVNode(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$2$2), {
                                    variant: "outline",
                                    role: "combobox",
                                    "aria-expanded": openPopover.value[i],
                                    class: "w-full justify-between"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(row.item || "Pilih Barang...") + " ", 1),
                                      createVNode(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                                    ]),
                                    _: 2
                                  }, 1032, ["aria-expanded"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_PopoverContent, { class: "p-0 w-[300px]" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="border-b p-2"${_scopeId4}><input${ssrRenderAttr("value", searchQuery.value)} placeholder="Cari barang..." class="w-full border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring focus:ring-blue-200"${_scopeId4}></div><div class="max-h-[200px] overflow-auto"${_scopeId4}><!--[-->`);
                                ssrRenderList(filteredBarang.value, (barang) => {
                                  _push5(`<div class="px-3 py-1 hover:bg-gray-100 cursor-pointer flex items-center text-sm"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_Check, {
                                    class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                      "mr-2 h-4 w-4 text-green-600",
                                      row.item === barang.namaBarang ? "opacity-100" : "opacity-0"
                                    )
                                  }, null, _parent5, _scopeId4));
                                  _push5(` ${ssrInterpolate(barang.namaBarang)}</div>`);
                                });
                                _push5(`<!--]-->`);
                                if (filteredBarang.value.length === 0) {
                                  _push5(`<div class="p-2 text-gray-400 text-sm text-center"${_scopeId4}> Barang tidak ditemukan. </div>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "border-b p-2" }, [
                                    withDirectives(createVNode("input", {
                                      "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                                      placeholder: "Cari barang...",
                                      class: "w-full border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring focus:ring-blue-200"
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelText, searchQuery.value]
                                    ])
                                  ]),
                                  createVNode("div", { class: "max-h-[200px] overflow-auto" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(filteredBarang.value, (barang) => {
                                      return openBlock(), createBlock("div", {
                                        key: barang.namaBarang,
                                        class: "px-3 py-1 hover:bg-gray-100 cursor-pointer flex items-center text-sm",
                                        onClick: ($event) => handleBarangSelect(i, barang)
                                      }, [
                                        createVNode(_component_Check, {
                                          class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                            "mr-2 h-4 w-4 text-green-600",
                                            row.item === barang.namaBarang ? "opacity-100" : "opacity-0"
                                          )
                                        }, null, 8, ["class"]),
                                        createTextVNode(" " + toDisplayString(barang.namaBarang), 1)
                                      ], 8, ["onClick"]);
                                    }), 128)),
                                    filteredBarang.value.length === 0 ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "p-2 text-gray-400 text-sm text-center"
                                    }, " Barang tidak ditemukan. ")) : createCommentVNode("", true)
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$2$2), {
                                  variant: "outline",
                                  role: "combobox",
                                  "aria-expanded": openPopover.value[i],
                                  class: "w-full justify-between"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(row.item || "Pilih Barang...") + " ", 1),
                                    createVNode(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                                  ]),
                                  _: 2
                                }, 1032, ["aria-expanded"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_PopoverContent, { class: "p-0 w-[300px]" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "border-b p-2" }, [
                                  withDirectives(createVNode("input", {
                                    "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                                    placeholder: "Cari barang...",
                                    class: "w-full border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring focus:ring-blue-200"
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, searchQuery.value]
                                  ])
                                ]),
                                createVNode("div", { class: "max-h-[200px] overflow-auto" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(filteredBarang.value, (barang) => {
                                    return openBlock(), createBlock("div", {
                                      key: barang.namaBarang,
                                      class: "px-3 py-1 hover:bg-gray-100 cursor-pointer flex items-center text-sm",
                                      onClick: ($event) => handleBarangSelect(i, barang)
                                    }, [
                                      createVNode(_component_Check, {
                                        class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                          "mr-2 h-4 w-4 text-green-600",
                                          row.item === barang.namaBarang ? "opacity-100" : "opacity-0"
                                        )
                                      }, null, 8, ["class"]),
                                      createTextVNode(" " + toDisplayString(barang.namaBarang), 1)
                                    ], 8, ["onClick"]);
                                  }), 128)),
                                  filteredBarang.value.length === 0 ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "p-2 text-gray-400 text-sm text-center"
                                  }, " Barang tidak ditemukan. ")) : createCommentVNode("", true)
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$8), {
                      type: "number",
                      modelValue: row.idBarang,
                      class: "hidden"
                    }, null, _parent3, _scopeId2));
                    _push3(`</td><td class="px-3 py-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$8), {
                      modelValue: row.ukuran,
                      "onUpdate:modelValue": ($event) => row.ukuran = $event,
                      disabled: ""
                    }, null, _parent3, _scopeId2));
                    _push3(`</td><td class="px-3 py-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$8), {
                      type: "number",
                      modelValue: row.banyak,
                      "onUpdate:modelValue": (val) => {
                        row.banyak = val;
                        calculateTotal(i);
                      }
                    }, null, _parent3, _scopeId2));
                    _push3(`</td><td class="px-3 py-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$8), {
                      modelValue: row.satuan,
                      "onUpdate:modelValue": ($event) => row.satuan = $event,
                      disabled: ""
                    }, null, _parent3, _scopeId2));
                    _push3(`</td><td class="px-3 py-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$8), {
                      modelValue: row.refHarga,
                      disabled: ""
                    }, null, _parent3, _scopeId2));
                    _push3(`</td><td class="px-3 py-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$8), {
                      type: "number",
                      modelValue: row.harga,
                      "onUpdate:modelValue": (val) => handleHargaChange(i, val)
                    }, null, _parent3, _scopeId2));
                    _push3(`</td><td class="px-3 py-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$8), {
                      modelValue: row.total,
                      disabled: "",
                      class: "bg-gray-50"
                    }, null, _parent3, _scopeId2));
                    _push3(`</td><td class="px-3 py-2 text-center"${_scopeId2}><button type="button" class="text-red-500 hover:text-red-700"${_scopeId2}> \u2715 </button></td></tr>`);
                  });
                  _push3(`<!--]--></tbody></table><div class="flex flex-col items-end p-4 bg-gray-50 border-t text-sm"${_scopeId2}><div class="flex justify-between w-64"${_scopeId2}><span${_scopeId2}>Subtotal:</span><span class="font-semibold"${_scopeId2}>${ssrInterpolate(formatRupiah(subtotal.value))}</span></div><div class="flex justify-between w-64"${_scopeId2}><span${_scopeId2}>PPN (${ssrInterpolate(headerPo.ppn)}%):</span><span class="font-semibold"${_scopeId2}>${ssrInterpolate(formatRupiah(totalPpn.value))}</span></div><div class="flex justify-between w-64 border-t pt-2 mt-1"${_scopeId2}><span${_scopeId2}>Total Akhir:</span><span class="font-bold text-green-600"${_scopeId2}>${ssrInterpolate(formatRupiah(grandTotal.value))}</span></div></div></div><div class="flex justify-between items-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$2$2), {
                    type: "button",
                    variant: "outline",
                    onClick: addRow
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`+ Tambah Baris`);
                      } else {
                        return [
                          createTextVNode("+ Tambah Baris")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$4$5), { class: "border-t pt-3 mt-2 shrink-0 flex justify-between items-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$7$2), { "as-child": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$2$2), {
                                type: "button",
                                variant: "secondary",
                                onClick: closeDialog
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Close`);
                                  } else {
                                    return [
                                      createTextVNode("Close")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$2$2), {
                                  type: "button",
                                  variant: "secondary",
                                  onClick: closeDialog
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Close")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$2$2), {
                          type: "submit",
                          form: "poForm",
                          disabled: isLoading.value || !isValid.value
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (!isLoading.value) {
                                _push5(`<span${_scopeId4}>Simpan</span>`);
                              } else {
                                _push5(`<span class="flex items-center gap-2"${_scopeId4}><svg class="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${_scopeId4}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"${_scopeId4}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 018 8h-4l3.5 3.5L20 12h-4a8 8 0 01-8 8v-4l-3.5 3.5L8 20v-4a8 8 0 01-8-8z"${_scopeId4}></path></svg> Menyimpan... </span>`);
                              }
                            } else {
                              return [
                                !isLoading.value ? (openBlock(), createBlock("span", { key: 0 }, "Simpan")) : (openBlock(), createBlock("span", {
                                  key: 1,
                                  class: "flex items-center gap-2"
                                }, [
                                  (openBlock(), createBlock("svg", {
                                    class: "animate-spin h-4 w-4 text-white",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24"
                                  }, [
                                    createVNode("circle", {
                                      class: "opacity-25",
                                      cx: "12",
                                      cy: "12",
                                      r: "10",
                                      stroke: "currentColor",
                                      "stroke-width": "4"
                                    }),
                                    createVNode("path", {
                                      class: "opacity-75",
                                      fill: "currentColor",
                                      d: "M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 018 8h-4l3.5 3.5L20 12h-4a8 8 0 01-8 8v-4l-3.5 3.5L8 20v-4a8 8 0 01-8-8z"
                                    })
                                  ])),
                                  createTextVNode(" Menyimpan... ")
                                ]))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$7$2), { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$2$2), {
                                type: "button",
                                variant: "secondary",
                                onClick: closeDialog
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Close")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$2$2), {
                            type: "submit",
                            form: "poForm",
                            disabled: isLoading.value || !isValid.value
                          }, {
                            default: withCtx(() => [
                              !isLoading.value ? (openBlock(), createBlock("span", { key: 0 }, "Simpan")) : (openBlock(), createBlock("span", {
                                key: 1,
                                class: "flex items-center gap-2"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "animate-spin h-4 w-4 text-white",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("circle", {
                                    class: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    "stroke-width": "4"
                                  }),
                                  createVNode("path", {
                                    class: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 018 8h-4l3.5 3.5L20 12h-4a8 8 0 01-8 8v-4l-3.5 3.5L8 20v-4a8 8 0 01-8-8z"
                                  })
                                ])),
                                createTextVNode(" Menyimpan... ")
                              ]))
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</form>`);
                } else {
                  return [
                    createVNode(unref(_sfc_main$3$2), { class: "border-b pb-2 shrink-0" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$1$4), null, {
                          default: withCtx(() => [
                            createTextVNode("Detail Purchase Order (PO)")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("form", {
                      id: "poForm",
                      class: "flex-1 overflow-y-auto p-4 space-y-6",
                      onSubmit: withModifiers(handleSubmit, ["prevent"])
                    }, [
                      createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                        createVNode("div", null, [
                          createVNode("label", { class: "text-sm font-medium text-gray-600" }, "No. PO"),
                          createVNode(unref(_sfc_main$8), {
                            modelValue: headerPo.idPo,
                            "onUpdate:modelValue": ($event) => headerPo.idPo = $event,
                            class: "hidden"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(unref(_sfc_main$8), {
                            modelValue: headerPo.noPo,
                            "onUpdate:modelValue": ($event) => headerPo.noPo = $event,
                            disabled: "",
                            class: "bg-gray-50"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "text-sm font-medium text-gray-600" }, "Tanggal"),
                          createVNode(unref(_sfc_main$8), {
                            modelValue: headerPo.tanggal,
                            "onUpdate:modelValue": ($event) => headerPo.tanggal = $event,
                            disabled: "",
                            class: "bg-gray-50"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "text-sm font-medium text-gray-600" }, "PPN (%)"),
                          createVNode(unref(_sfc_main$8), {
                            type: "number",
                            modelValue: headerPo.ppn,
                            "onUpdate:modelValue": ($event) => headerPo.ppn = $event,
                            disabled: "",
                            class: "bg-white"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "text-sm font-medium text-gray-600" }, "No. Telepon"),
                          createVNode(unref(_sfc_main$8), {
                            modelValue: headerPo.noTelepon,
                            "onUpdate:modelValue": ($event) => headerPo.noTelepon = $event,
                            disabled: "",
                            class: "bg-gray-50"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "border rounded-xl overflow-hidden shadow-sm" }, [
                        createVNode("table", { class: "min-w-full text-sm" }, [
                          createVNode("thead", { class: "bg-gray-100 text-gray-700" }, [
                            createVNode("tr", null, [
                              createVNode("th", { class: "px-3 py-2 text-left w-12" }, "No"),
                              createVNode("th", { class: "px-3 py-2 text-left" }, "Item"),
                              createVNode("th", { class: "px-3 py-2 text-left" }, "Ukuran / Type"),
                              createVNode("th", { class: "px-3 py-2 text-left w-24" }, "Banyak"),
                              createVNode("th", { class: "px-3 py-2 text-left w-24" }, "Satuan"),
                              createVNode("th", { class: "px-3 py-2 text-left w-32" }, "Ref. Harga"),
                              createVNode("th", { class: "px-3 py-2 text-left w-32" }, "Harga"),
                              createVNode("th", { class: "px-3 py-2 text-left" }, "Total"),
                              createVNode("th", { class: "px-3 py-2 text-center w-12" }, "\u{1F5D1}")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(dataDetail.value, (row, i) => {
                              return openBlock(), createBlock("tr", {
                                key: i,
                                class: "border-t hover:bg-gray-50 transition"
                              }, [
                                createVNode("td", { class: "px-3 py-2" }, toDisplayString(i + 1), 1),
                                createVNode("td", { class: "px-3 py-2" }, [
                                  createVNode(_component_Popover, {
                                    open: openPopover.value[i],
                                    "onUpdate:open": [
                                      ($event) => openPopover.value[i] = $event,
                                      (val) => {
                                        openPopover.value[i] = val;
                                        if (val) searchQuery.value = "";
                                      }
                                    ]
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$2$2), {
                                            variant: "outline",
                                            role: "combobox",
                                            "aria-expanded": openPopover.value[i],
                                            class: "w-full justify-between"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(row.item || "Pilih Barang...") + " ", 1),
                                              createVNode(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                                            ]),
                                            _: 2
                                          }, 1032, ["aria-expanded"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_PopoverContent, { class: "p-0 w-[300px]" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "border-b p-2" }, [
                                            withDirectives(createVNode("input", {
                                              "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                                              placeholder: "Cari barang...",
                                              class: "w-full border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring focus:ring-blue-200"
                                            }, null, 8, ["onUpdate:modelValue"]), [
                                              [vModelText, searchQuery.value]
                                            ])
                                          ]),
                                          createVNode("div", { class: "max-h-[200px] overflow-auto" }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(filteredBarang.value, (barang) => {
                                              return openBlock(), createBlock("div", {
                                                key: barang.namaBarang,
                                                class: "px-3 py-1 hover:bg-gray-100 cursor-pointer flex items-center text-sm",
                                                onClick: ($event) => handleBarangSelect(i, barang)
                                              }, [
                                                createVNode(_component_Check, {
                                                  class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                                    "mr-2 h-4 w-4 text-green-600",
                                                    row.item === barang.namaBarang ? "opacity-100" : "opacity-0"
                                                  )
                                                }, null, 8, ["class"]),
                                                createTextVNode(" " + toDisplayString(barang.namaBarang), 1)
                                              ], 8, ["onClick"]);
                                            }), 128)),
                                            filteredBarang.value.length === 0 ? (openBlock(), createBlock("div", {
                                              key: 0,
                                              class: "p-2 text-gray-400 text-sm text-center"
                                            }, " Barang tidak ditemukan. ")) : createCommentVNode("", true)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["open", "onUpdate:open"]),
                                  createVNode(unref(_sfc_main$8), {
                                    type: "number",
                                    modelValue: row.idBarang,
                                    class: "hidden"
                                  }, null, 8, ["modelValue"])
                                ]),
                                createVNode("td", { class: "px-3 py-2" }, [
                                  createVNode(unref(_sfc_main$8), {
                                    modelValue: row.ukuran,
                                    "onUpdate:modelValue": ($event) => row.ukuran = $event,
                                    disabled: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("td", { class: "px-3 py-2" }, [
                                  createVNode(unref(_sfc_main$8), {
                                    type: "number",
                                    modelValue: row.banyak,
                                    "onUpdate:modelValue": (val) => {
                                      row.banyak = val;
                                      calculateTotal(i);
                                    }
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("td", { class: "px-3 py-2" }, [
                                  createVNode(unref(_sfc_main$8), {
                                    modelValue: row.satuan,
                                    "onUpdate:modelValue": ($event) => row.satuan = $event,
                                    disabled: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("td", { class: "px-3 py-2" }, [
                                  createVNode(unref(_sfc_main$8), {
                                    modelValue: row.refHarga,
                                    disabled: ""
                                  }, null, 8, ["modelValue"])
                                ]),
                                createVNode("td", { class: "px-3 py-2" }, [
                                  createVNode(unref(_sfc_main$8), {
                                    type: "number",
                                    modelValue: row.harga,
                                    "onUpdate:modelValue": (val) => handleHargaChange(i, val)
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("td", { class: "px-3 py-2" }, [
                                  createVNode(unref(_sfc_main$8), {
                                    modelValue: row.total,
                                    disabled: "",
                                    class: "bg-gray-50"
                                  }, null, 8, ["modelValue"])
                                ]),
                                createVNode("td", { class: "px-3 py-2 text-center" }, [
                                  createVNode("button", {
                                    type: "button",
                                    class: "text-red-500 hover:text-red-700",
                                    onClick: ($event) => removeRow(i, $event)
                                  }, " \u2715 ", 8, ["onClick"])
                                ])
                              ]);
                            }), 128))
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-col items-end p-4 bg-gray-50 border-t text-sm" }, [
                          createVNode("div", { class: "flex justify-between w-64" }, [
                            createVNode("span", null, "Subtotal:"),
                            createVNode("span", { class: "font-semibold" }, toDisplayString(formatRupiah(subtotal.value)), 1)
                          ]),
                          createVNode("div", { class: "flex justify-between w-64" }, [
                            createVNode("span", null, "PPN (" + toDisplayString(headerPo.ppn) + "%):", 1),
                            createVNode("span", { class: "font-semibold" }, toDisplayString(formatRupiah(totalPpn.value)), 1)
                          ]),
                          createVNode("div", { class: "flex justify-between w-64 border-t pt-2 mt-1" }, [
                            createVNode("span", null, "Total Akhir:"),
                            createVNode("span", { class: "font-bold text-green-600" }, toDisplayString(formatRupiah(grandTotal.value)), 1)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "flex justify-between items-center" }, [
                        createVNode(unref(_sfc_main$2$2), {
                          type: "button",
                          variant: "outline",
                          onClick: addRow
                        }, {
                          default: withCtx(() => [
                            createTextVNode("+ Tambah Baris")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(unref(_sfc_main$4$5), { class: "border-t pt-3 mt-2 shrink-0 flex justify-between items-center" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$7$2), { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$2$2), {
                                type: "button",
                                variant: "secondary",
                                onClick: closeDialog
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Close")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$2$2), {
                            type: "submit",
                            form: "poForm",
                            disabled: isLoading.value || !isValid.value
                          }, {
                            default: withCtx(() => [
                              !isLoading.value ? (openBlock(), createBlock("span", { key: 0 }, "Simpan")) : (openBlock(), createBlock("span", {
                                key: 1,
                                class: "flex items-center gap-2"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "animate-spin h-4 w-4 text-white",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("circle", {
                                    class: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    "stroke-width": "4"
                                  }),
                                  createVNode("path", {
                                    class: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 018 8h-4l3.5 3.5L20 12h-4a8 8 0 01-8 8v-4l-3.5 3.5L8 20v-4a8 8 0 01-8-8z"
                                  })
                                ])),
                                createTextVNode(" Menyimpan... ")
                              ]))
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ]),
                        _: 1
                      })
                    ], 32)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$c), { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$2$2), {
                    size: "sm",
                    onClick: openDialog
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(PlusSquareIcon), { class: "w-4 h-4" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$6$2), { class: "sm:max-w-[90vw] w-full max-h-[90vh] flex flex-col overflow-hidden" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$3$2), { class: "border-b pb-2 shrink-0" }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$1$4), null, {
                        default: withCtx(() => [
                          createTextVNode("Detail Purchase Order (PO)")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("form", {
                    id: "poForm",
                    class: "flex-1 overflow-y-auto p-4 space-y-6",
                    onSubmit: withModifiers(handleSubmit, ["prevent"])
                  }, [
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                      createVNode("div", null, [
                        createVNode("label", { class: "text-sm font-medium text-gray-600" }, "No. PO"),
                        createVNode(unref(_sfc_main$8), {
                          modelValue: headerPo.idPo,
                          "onUpdate:modelValue": ($event) => headerPo.idPo = $event,
                          class: "hidden"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(unref(_sfc_main$8), {
                          modelValue: headerPo.noPo,
                          "onUpdate:modelValue": ($event) => headerPo.noPo = $event,
                          disabled: "",
                          class: "bg-gray-50"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "text-sm font-medium text-gray-600" }, "Tanggal"),
                        createVNode(unref(_sfc_main$8), {
                          modelValue: headerPo.tanggal,
                          "onUpdate:modelValue": ($event) => headerPo.tanggal = $event,
                          disabled: "",
                          class: "bg-gray-50"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "text-sm font-medium text-gray-600" }, "PPN (%)"),
                        createVNode(unref(_sfc_main$8), {
                          type: "number",
                          modelValue: headerPo.ppn,
                          "onUpdate:modelValue": ($event) => headerPo.ppn = $event,
                          disabled: "",
                          class: "bg-white"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "text-sm font-medium text-gray-600" }, "No. Telepon"),
                        createVNode(unref(_sfc_main$8), {
                          modelValue: headerPo.noTelepon,
                          "onUpdate:modelValue": ($event) => headerPo.noTelepon = $event,
                          disabled: "",
                          class: "bg-gray-50"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode("div", { class: "border rounded-xl overflow-hidden shadow-sm" }, [
                      createVNode("table", { class: "min-w-full text-sm" }, [
                        createVNode("thead", { class: "bg-gray-100 text-gray-700" }, [
                          createVNode("tr", null, [
                            createVNode("th", { class: "px-3 py-2 text-left w-12" }, "No"),
                            createVNode("th", { class: "px-3 py-2 text-left" }, "Item"),
                            createVNode("th", { class: "px-3 py-2 text-left" }, "Ukuran / Type"),
                            createVNode("th", { class: "px-3 py-2 text-left w-24" }, "Banyak"),
                            createVNode("th", { class: "px-3 py-2 text-left w-24" }, "Satuan"),
                            createVNode("th", { class: "px-3 py-2 text-left w-32" }, "Ref. Harga"),
                            createVNode("th", { class: "px-3 py-2 text-left w-32" }, "Harga"),
                            createVNode("th", { class: "px-3 py-2 text-left" }, "Total"),
                            createVNode("th", { class: "px-3 py-2 text-center w-12" }, "\u{1F5D1}")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(dataDetail.value, (row, i) => {
                            return openBlock(), createBlock("tr", {
                              key: i,
                              class: "border-t hover:bg-gray-50 transition"
                            }, [
                              createVNode("td", { class: "px-3 py-2" }, toDisplayString(i + 1), 1),
                              createVNode("td", { class: "px-3 py-2" }, [
                                createVNode(_component_Popover, {
                                  open: openPopover.value[i],
                                  "onUpdate:open": [
                                    ($event) => openPopover.value[i] = $event,
                                    (val) => {
                                      openPopover.value[i] = val;
                                      if (val) searchQuery.value = "";
                                    }
                                  ]
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$2$2), {
                                          variant: "outline",
                                          role: "combobox",
                                          "aria-expanded": openPopover.value[i],
                                          class: "w-full justify-between"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(row.item || "Pilih Barang...") + " ", 1),
                                            createVNode(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                                          ]),
                                          _: 2
                                        }, 1032, ["aria-expanded"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_PopoverContent, { class: "p-0 w-[300px]" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "border-b p-2" }, [
                                          withDirectives(createVNode("input", {
                                            "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                                            placeholder: "Cari barang...",
                                            class: "w-full border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring focus:ring-blue-200"
                                          }, null, 8, ["onUpdate:modelValue"]), [
                                            [vModelText, searchQuery.value]
                                          ])
                                        ]),
                                        createVNode("div", { class: "max-h-[200px] overflow-auto" }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(filteredBarang.value, (barang) => {
                                            return openBlock(), createBlock("div", {
                                              key: barang.namaBarang,
                                              class: "px-3 py-1 hover:bg-gray-100 cursor-pointer flex items-center text-sm",
                                              onClick: ($event) => handleBarangSelect(i, barang)
                                            }, [
                                              createVNode(_component_Check, {
                                                class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                                  "mr-2 h-4 w-4 text-green-600",
                                                  row.item === barang.namaBarang ? "opacity-100" : "opacity-0"
                                                )
                                              }, null, 8, ["class"]),
                                              createTextVNode(" " + toDisplayString(barang.namaBarang), 1)
                                            ], 8, ["onClick"]);
                                          }), 128)),
                                          filteredBarang.value.length === 0 ? (openBlock(), createBlock("div", {
                                            key: 0,
                                            class: "p-2 text-gray-400 text-sm text-center"
                                          }, " Barang tidak ditemukan. ")) : createCommentVNode("", true)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["open", "onUpdate:open"]),
                                createVNode(unref(_sfc_main$8), {
                                  type: "number",
                                  modelValue: row.idBarang,
                                  class: "hidden"
                                }, null, 8, ["modelValue"])
                              ]),
                              createVNode("td", { class: "px-3 py-2" }, [
                                createVNode(unref(_sfc_main$8), {
                                  modelValue: row.ukuran,
                                  "onUpdate:modelValue": ($event) => row.ukuran = $event,
                                  disabled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("td", { class: "px-3 py-2" }, [
                                createVNode(unref(_sfc_main$8), {
                                  type: "number",
                                  modelValue: row.banyak,
                                  "onUpdate:modelValue": (val) => {
                                    row.banyak = val;
                                    calculateTotal(i);
                                  }
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("td", { class: "px-3 py-2" }, [
                                createVNode(unref(_sfc_main$8), {
                                  modelValue: row.satuan,
                                  "onUpdate:modelValue": ($event) => row.satuan = $event,
                                  disabled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("td", { class: "px-3 py-2" }, [
                                createVNode(unref(_sfc_main$8), {
                                  modelValue: row.refHarga,
                                  disabled: ""
                                }, null, 8, ["modelValue"])
                              ]),
                              createVNode("td", { class: "px-3 py-2" }, [
                                createVNode(unref(_sfc_main$8), {
                                  type: "number",
                                  modelValue: row.harga,
                                  "onUpdate:modelValue": (val) => handleHargaChange(i, val)
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("td", { class: "px-3 py-2" }, [
                                createVNode(unref(_sfc_main$8), {
                                  modelValue: row.total,
                                  disabled: "",
                                  class: "bg-gray-50"
                                }, null, 8, ["modelValue"])
                              ]),
                              createVNode("td", { class: "px-3 py-2 text-center" }, [
                                createVNode("button", {
                                  type: "button",
                                  class: "text-red-500 hover:text-red-700",
                                  onClick: ($event) => removeRow(i, $event)
                                }, " \u2715 ", 8, ["onClick"])
                              ])
                            ]);
                          }), 128))
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-col items-end p-4 bg-gray-50 border-t text-sm" }, [
                        createVNode("div", { class: "flex justify-between w-64" }, [
                          createVNode("span", null, "Subtotal:"),
                          createVNode("span", { class: "font-semibold" }, toDisplayString(formatRupiah(subtotal.value)), 1)
                        ]),
                        createVNode("div", { class: "flex justify-between w-64" }, [
                          createVNode("span", null, "PPN (" + toDisplayString(headerPo.ppn) + "%):", 1),
                          createVNode("span", { class: "font-semibold" }, toDisplayString(formatRupiah(totalPpn.value)), 1)
                        ]),
                        createVNode("div", { class: "flex justify-between w-64 border-t pt-2 mt-1" }, [
                          createVNode("span", null, "Total Akhir:"),
                          createVNode("span", { class: "font-bold text-green-600" }, toDisplayString(formatRupiah(grandTotal.value)), 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-between items-center" }, [
                      createVNode(unref(_sfc_main$2$2), {
                        type: "button",
                        variant: "outline",
                        onClick: addRow
                      }, {
                        default: withCtx(() => [
                          createTextVNode("+ Tambah Baris")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(unref(_sfc_main$4$5), { class: "border-t pt-3 mt-2 shrink-0 flex justify-between items-center" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$7$2), { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$2$2), {
                              type: "button",
                              variant: "secondary",
                              onClick: closeDialog
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Close")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$2$2), {
                          type: "submit",
                          form: "poForm",
                          disabled: isLoading.value || !isValid.value
                        }, {
                          default: withCtx(() => [
                            !isLoading.value ? (openBlock(), createBlock("span", { key: 0 }, "Simpan")) : (openBlock(), createBlock("span", {
                              key: 1,
                              class: "flex items-center gap-2"
                            }, [
                              (openBlock(), createBlock("svg", {
                                class: "animate-spin h-4 w-4 text-white",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("circle", {
                                  class: "opacity-25",
                                  cx: "12",
                                  cy: "12",
                                  r: "10",
                                  stroke: "currentColor",
                                  "stroke-width": "4"
                                }),
                                createVNode("path", {
                                  class: "opacity-75",
                                  fill: "currentColor",
                                  d: "M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 018 8h-4l3.5 3.5L20 12h-4a8 8 0 01-8 8v-4l-3.5 3.5L8 20v-4a8 8 0 01-8-8z"
                                })
                              ])),
                              createTextVNode(" Menyimpan... ")
                            ]))
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ]),
                      _: 1
                    })
                  ], 32)
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/po/DetailPo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ListData",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const baseUrl = config.public.apiBase;
    const isLoading = ref(false);
    const searchQuery = ref("");
    const currentPage = ref(1);
    const itemsPerPage = ref(10);
    const data = ref([]);
    const filteredData = computed(() => {
      return data.value.filter(
        (item) => item.namaPekerjaan.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });
    const totalPages = computed(() => {
      return Math.ceil(filteredData.value.length / itemsPerPage.value);
    });
    const paginatedData = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      return filteredData.value.slice(start, start + itemsPerPage.value);
    });
    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };
    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };
    function formatTanggal(tanggal) {
      return formatDate(tanggal, "dd/M/yyyy");
    }
    const accessToken = useCookie("accessToken");
    const token = accessToken.value.token;
    async function fetchData() {
      isLoading.value = true;
      try {
        const timestamp = (/* @__PURE__ */ new Date()).getTime();
        const response = await fetch(`${baseUrl}/po`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const fetchedData = await response.json();
        console.log("Data yang diterima dari server:", fetchedData);
        if (Array.isArray(fetchedData.data)) {
          data.value = fetchedData.data;
        } else {
          console.error("Data yang diterima bukan array:", fetchedData);
          data.value = [];
        }
      } catch (error) {
        console.error("Gagal mengambil data:", error);
        data.value = [];
      } finally {
        isLoading.value = false;
      }
    }
    ref(null);
    function handleDataEdited() {
      console.log("Event dataEdited diterima, menunggu 500ms sebelum refresh data...");
      setTimeout(() => {
        console.log("Melakukan fetch data setelah edit...");
        fetchData();
      }, 500);
    }
    function handleDetailPo() {
      console.log("Event detailPo diterima, menunggu 500ms sebelum refresh data...");
      setTimeout(() => {
        console.log("Melakukan fetch data setelah DetilPo...");
        fetchData();
      }, 500);
    }
    function formatRupiah(value) {
      const val = typeof value === "object" ? value.value : value;
      return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(val || 0);
    }
    function handleDataDeleted() {
      setTimeout(() => {
        console.log("Melakukan fetch data setelah delete...");
        fetchData();
      }, 500);
    }
    const downloadingId = ref(null);
    const downloadPdf = async (item) => {
      try {
        downloadingId.value = item.id;
        const res = await fetch(`${baseUrl}/po/generatePO/${item.id}/pdf`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (!res.ok) throw new Error("Gagal mengunduh file");
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const a = (void 0).createElement("a");
        a.href = url;
        a.download = `PO_${item.noPo}.pdf`;
        a.click();
        URL.revokeObjectURL(url);
      } catch (err) {
        console.error("Download gagal:", err);
        alert("Gagal mengunduh file PO!");
      } finally {
        downloadingId.value = null;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = _sfc_main$5$1;
      const _component_CardHeader = _sfc_main$1$1;
      const _component_CardTitle = _sfc_main$7;
      const _component_Input = _sfc_main$8;
      const _component_CardContent = _sfc_main$4$1;
      const _component_Table = _sfc_main$7$1;
      const _component_TableHeader = _sfc_main$9;
      const _component_TableRow = _sfc_main$3$1;
      const _component_TableHead = _sfc_main$1$2;
      const _component_TableBody = _sfc_main$6$1;
      const _component_TableCell = _sfc_main$4$2;
      const _component_TooltipProvider = _sfc_main$a;
      const _component_Tooltip = _sfc_main$2$1;
      const _component_TooltipTrigger = _sfc_main$b;
      const _component_Button = _sfc_main$2$2;
      const _component_TooltipContent = _sfc_main$1$3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Card, { class: "w-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Input, {
                          type: "text",
                          modelValue: searchQuery.value,
                          "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                          placeholder: "Search..."
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Input, {
                            type: "text",
                            modelValue: searchQuery.value,
                            "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                            placeholder: "Search..."
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, null, {
                      default: withCtx(() => [
                        createVNode(_component_Input, {
                          type: "text",
                          modelValue: searchQuery.value,
                          "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                          placeholder: "Search..."
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                  _push3(ssrRenderComponent(_sfc_main$5, { onDataAdded: fetchData }, null, _parent3, _scopeId2));
                  if (isLoading.value) {
                    _push3(`<div class="flex justify-center items-center p-8"${_scopeId2}><div class="animate-spin h-8 w-8 border-2 border-primary rounded-full border-t-transparent"${_scopeId2}></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Table, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_TableHeader, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_TableRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_TableHead, { class: "w-[100px]" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` No `);
                                        } else {
                                          return [
                                            createTextVNode(" No ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_TableHead, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Nama Proyek`);
                                        } else {
                                          return [
                                            createTextVNode("Nama Proyek")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_TableHead, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`No PO`);
                                        } else {
                                          return [
                                            createTextVNode("No PO")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_TableHead, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Tanggal`);
                                        } else {
                                          return [
                                            createTextVNode("Tanggal")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_TableHead, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Tujuan PO`);
                                        } else {
                                          return [
                                            createTextVNode("Tujuan PO")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_TableHead, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Tanggal Pengiriman`);
                                        } else {
                                          return [
                                            createTextVNode("Tanggal Pengiriman")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_TableHead, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`PPN %`);
                                        } else {
                                          return [
                                            createTextVNode("PPN %")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_TableHead, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Grand Total`);
                                        } else {
                                          return [
                                            createTextVNode("Grand Total")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_TableHead, { class: "text-center" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Action `);
                                        } else {
                                          return [
                                            createTextVNode(" Action ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_TableHead, { class: "w-[100px]" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" No ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Nama Proyek")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("No PO")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Tanggal")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Tujuan PO")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Tanggal Pengiriman")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("PPN %")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Grand Total")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableHead, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Action ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_TableRow, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_TableHead, { class: "w-[100px]" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" No ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Nama Proyek")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("No PO")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Tanggal")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Tujuan PO")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Tanggal Pengiriman")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("PPN %")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Grand Total")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableHead, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Action ")
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TableBody, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(paginatedData.value, (item, index) => {
                                _push5(ssrRenderComponent(_component_TableRow, {
                                  key: item.id
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_TableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate((currentPage.value - 1) * itemsPerPage.value + index + 1)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString((currentPage.value - 1) * itemsPerPage.value + index + 1), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, { class: "font-medium" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.namaPekerjaan)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.namaPekerjaan), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, { class: "font-medium" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.noPo)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.noPo), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(formatTanggal(item.tanggal))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(formatTanggal(item.tanggal)), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, { class: "font-medium" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.tujuanPo)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.tujuanPo), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(formatTanggal(item.tglPengiriman))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(formatTanggal(item.tglPengiriman)), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, { class: "font-medium" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.ppn)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.ppn), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, { class: "font-medium" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          var _a, _b;
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(formatRupiah((_a = item.grandTotal) != null ? _a : 0))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(formatRupiah((_b = item.grandTotal) != null ? _b : 0)), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, { class: "text-right" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex items-center justify-center gap-2"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_sfc_main$2, {
                                              id: item.id,
                                              onDetailPo: handleDetailPo
                                            }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_sfc_main$3, {
                                              id: item.id,
                                              onDataEdited: handleDataEdited
                                            }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_sfc_main$4, {
                                              item,
                                              onDataDeleted: handleDataDeleted
                                            }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_TooltipProvider, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_Tooltip, null, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_TooltipTrigger, { "as-child": "" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(ssrRenderComponent(_component_Button, {
                                                                disabled: downloadingId.value === item.id,
                                                                onClick: ($event) => downloadPdf(item),
                                                                size: "sm"
                                                              }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    if (downloadingId.value === item.id) {
                                                                      _push11(ssrRenderComponent(unref(Loader2), { class: "w-4 h-4 animate-spin" }, null, _parent11, _scopeId10));
                                                                    } else {
                                                                      _push11(ssrRenderComponent(unref(FileDown), { class: "w-4 h-4" }, null, _parent11, _scopeId10));
                                                                    }
                                                                  } else {
                                                                    return [
                                                                      downloadingId.value === item.id ? (openBlock(), createBlock(unref(Loader2), {
                                                                        key: 0,
                                                                        class: "w-4 h-4 animate-spin"
                                                                      })) : (openBlock(), createBlock(unref(FileDown), {
                                                                        key: 1,
                                                                        class: "w-4 h-4"
                                                                      }))
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                            } else {
                                                              return [
                                                                createVNode(_component_Button, {
                                                                  disabled: downloadingId.value === item.id,
                                                                  onClick: ($event) => downloadPdf(item),
                                                                  size: "sm"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    downloadingId.value === item.id ? (openBlock(), createBlock(unref(Loader2), {
                                                                      key: 0,
                                                                      class: "w-4 h-4 animate-spin"
                                                                    })) : (openBlock(), createBlock(unref(FileDown), {
                                                                      key: 1,
                                                                      class: "w-4 h-4"
                                                                    }))
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["disabled", "onClick"])
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_TooltipContent, null, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              if (_ctx.isDownloading) {
                                                                _push10(`<span${_scopeId9}>Mengunduh...</span>`);
                                                              } else {
                                                                _push10(`<span${_scopeId9}>Download PDF</span>`);
                                                              }
                                                            } else {
                                                              return [
                                                                _ctx.isDownloading ? (openBlock(), createBlock("span", { key: 0 }, "Mengunduh...")) : (openBlock(), createBlock("span", { key: 1 }, "Download PDF"))
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_Button, {
                                                                disabled: downloadingId.value === item.id,
                                                                onClick: ($event) => downloadPdf(item),
                                                                size: "sm"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  downloadingId.value === item.id ? (openBlock(), createBlock(unref(Loader2), {
                                                                    key: 0,
                                                                    class: "w-4 h-4 animate-spin"
                                                                  })) : (openBlock(), createBlock(unref(FileDown), {
                                                                    key: 1,
                                                                    class: "w-4 h-4"
                                                                  }))
                                                                ]),
                                                                _: 2
                                                              }, 1032, ["disabled", "onClick"])
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_TooltipContent, null, {
                                                            default: withCtx(() => [
                                                              _ctx.isDownloading ? (openBlock(), createBlock("span", { key: 0 }, "Mengunduh...")) : (openBlock(), createBlock("span", { key: 1 }, "Download PDF"))
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_Tooltip, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_Button, {
                                                              disabled: downloadingId.value === item.id,
                                                              onClick: ($event) => downloadPdf(item),
                                                              size: "sm"
                                                            }, {
                                                              default: withCtx(() => [
                                                                downloadingId.value === item.id ? (openBlock(), createBlock(unref(Loader2), {
                                                                  key: 0,
                                                                  class: "w-4 h-4 animate-spin"
                                                                })) : (openBlock(), createBlock(unref(FileDown), {
                                                                  key: 1,
                                                                  class: "w-4 h-4"
                                                                }))
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["disabled", "onClick"])
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_TooltipContent, null, {
                                                          default: withCtx(() => [
                                                            _ctx.isDownloading ? (openBlock(), createBlock("span", { key: 0 }, "Mengunduh...")) : (openBlock(), createBlock("span", { key: 1 }, "Download PDF"))
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`</div>`);
                                          } else {
                                            return [
                                              createVNode("div", { class: "flex items-center justify-center gap-2" }, [
                                                createVNode(_sfc_main$2, {
                                                  id: item.id,
                                                  onDetailPo: handleDetailPo
                                                }, null, 8, ["id"]),
                                                createVNode(_sfc_main$3, {
                                                  id: item.id,
                                                  onDataEdited: handleDataEdited
                                                }, null, 8, ["id"]),
                                                createVNode(_sfc_main$4, {
                                                  item,
                                                  onDataDeleted: handleDataDeleted
                                                }, null, 8, ["item"]),
                                                createVNode(_component_TooltipProvider, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_Tooltip, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_Button, {
                                                              disabled: downloadingId.value === item.id,
                                                              onClick: ($event) => downloadPdf(item),
                                                              size: "sm"
                                                            }, {
                                                              default: withCtx(() => [
                                                                downloadingId.value === item.id ? (openBlock(), createBlock(unref(Loader2), {
                                                                  key: 0,
                                                                  class: "w-4 h-4 animate-spin"
                                                                })) : (openBlock(), createBlock(unref(FileDown), {
                                                                  key: 1,
                                                                  class: "w-4 h-4"
                                                                }))
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["disabled", "onClick"])
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_TooltipContent, null, {
                                                          default: withCtx(() => [
                                                            _ctx.isDownloading ? (openBlock(), createBlock("span", { key: 0 }, "Mengunduh...")) : (openBlock(), createBlock("span", { key: 1 }, "Download PDF"))
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_TableCell, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString((currentPage.value - 1) * itemsPerPage.value + index + 1), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, { class: "font-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.namaPekerjaan), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, { class: "font-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.noPo), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(formatTanggal(item.tanggal)), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, { class: "font-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.tujuanPo), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(formatTanggal(item.tglPengiriman)), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, { class: "font-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.ppn), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, { class: "font-medium" }, {
                                          default: withCtx(() => {
                                            var _a;
                                            return [
                                              createTextVNode(toDisplayString(formatRupiah((_a = item.grandTotal) != null ? _a : 0)), 1)
                                            ];
                                          }),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, { class: "text-right" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex items-center justify-center gap-2" }, [
                                              createVNode(_sfc_main$2, {
                                                id: item.id,
                                                onDetailPo: handleDetailPo
                                              }, null, 8, ["id"]),
                                              createVNode(_sfc_main$3, {
                                                id: item.id,
                                                onDataEdited: handleDataEdited
                                              }, null, 8, ["id"]),
                                              createVNode(_sfc_main$4, {
                                                item,
                                                onDataDeleted: handleDataDeleted
                                              }, null, 8, ["item"]),
                                              createVNode(_component_TooltipProvider, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_Tooltip, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_Button, {
                                                            disabled: downloadingId.value === item.id,
                                                            onClick: ($event) => downloadPdf(item),
                                                            size: "sm"
                                                          }, {
                                                            default: withCtx(() => [
                                                              downloadingId.value === item.id ? (openBlock(), createBlock(unref(Loader2), {
                                                                key: 0,
                                                                class: "w-4 h-4 animate-spin"
                                                              })) : (openBlock(), createBlock(unref(FileDown), {
                                                                key: 1,
                                                                class: "w-4 h-4"
                                                              }))
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["disabled", "onClick"])
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_TooltipContent, null, {
                                                        default: withCtx(() => [
                                                          _ctx.isDownloading ? (openBlock(), createBlock("span", { key: 0 }, "Mengunduh...")) : (openBlock(), createBlock("span", { key: 1 }, "Download PDF"))
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(paginatedData.value, (item, index) => {
                                  return openBlock(), createBlock(_component_TableRow, {
                                    key: item.id
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString((currentPage.value - 1) * itemsPerPage.value + index + 1), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, { class: "font-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.namaPekerjaan), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, { class: "font-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.noPo), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(formatTanggal(item.tanggal)), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, { class: "font-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.tujuanPo), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(formatTanggal(item.tglPengiriman)), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, { class: "font-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.ppn), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, { class: "font-medium" }, {
                                        default: withCtx(() => {
                                          var _a;
                                          return [
                                            createTextVNode(toDisplayString(formatRupiah((_a = item.grandTotal) != null ? _a : 0)), 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "flex items-center justify-center gap-2" }, [
                                            createVNode(_sfc_main$2, {
                                              id: item.id,
                                              onDetailPo: handleDetailPo
                                            }, null, 8, ["id"]),
                                            createVNode(_sfc_main$3, {
                                              id: item.id,
                                              onDataEdited: handleDataEdited
                                            }, null, 8, ["id"]),
                                            createVNode(_sfc_main$4, {
                                              item,
                                              onDataDeleted: handleDataDeleted
                                            }, null, 8, ["item"]),
                                            createVNode(_component_TooltipProvider, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_Tooltip, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_Button, {
                                                          disabled: downloadingId.value === item.id,
                                                          onClick: ($event) => downloadPdf(item),
                                                          size: "sm"
                                                        }, {
                                                          default: withCtx(() => [
                                                            downloadingId.value === item.id ? (openBlock(), createBlock(unref(Loader2), {
                                                              key: 0,
                                                              class: "w-4 h-4 animate-spin"
                                                            })) : (openBlock(), createBlock(unref(FileDown), {
                                                              key: 1,
                                                              class: "w-4 h-4"
                                                            }))
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["disabled", "onClick"])
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_TooltipContent, null, {
                                                      default: withCtx(() => [
                                                        _ctx.isDownloading ? (openBlock(), createBlock("span", { key: 0 }, "Mengunduh...")) : (openBlock(), createBlock("span", { key: 1 }, "Download PDF"))
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ])
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_TableHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_TableRow, null, {
                                default: withCtx(() => [
                                  createVNode(_component_TableHead, { class: "w-[100px]" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" No ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Nama Proyek")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("No PO")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Tanggal")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Tujuan PO")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Tanggal Pengiriman")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("PPN %")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Grand Total")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Action ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableBody, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(paginatedData.value, (item, index) => {
                                return openBlock(), createBlock(_component_TableRow, {
                                  key: item.id
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString((currentPage.value - 1) * itemsPerPage.value + index + 1), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "font-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.namaPekerjaan), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "font-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.noPo), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(formatTanggal(item.tanggal)), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "font-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.tujuanPo), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(formatTanggal(item.tglPengiriman)), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "font-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.ppn), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "font-medium" }, {
                                      default: withCtx(() => {
                                        var _a;
                                        return [
                                          createTextVNode(toDisplayString(formatRupiah((_a = item.grandTotal) != null ? _a : 0)), 1)
                                        ];
                                      }),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex items-center justify-center gap-2" }, [
                                          createVNode(_sfc_main$2, {
                                            id: item.id,
                                            onDetailPo: handleDetailPo
                                          }, null, 8, ["id"]),
                                          createVNode(_sfc_main$3, {
                                            id: item.id,
                                            onDataEdited: handleDataEdited
                                          }, null, 8, ["id"]),
                                          createVNode(_sfc_main$4, {
                                            item,
                                            onDataDeleted: handleDataDeleted
                                          }, null, 8, ["item"]),
                                          createVNode(_component_TooltipProvider, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_Tooltip, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_Button, {
                                                        disabled: downloadingId.value === item.id,
                                                        onClick: ($event) => downloadPdf(item),
                                                        size: "sm"
                                                      }, {
                                                        default: withCtx(() => [
                                                          downloadingId.value === item.id ? (openBlock(), createBlock(unref(Loader2), {
                                                            key: 0,
                                                            class: "w-4 h-4 animate-spin"
                                                          })) : (openBlock(), createBlock(unref(FileDown), {
                                                            key: 1,
                                                            class: "w-4 h-4"
                                                          }))
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["disabled", "onClick"])
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_TooltipContent, null, {
                                                    default: withCtx(() => [
                                                      _ctx.isDownloading ? (openBlock(), createBlock("span", { key: 0 }, "Mengunduh...")) : (openBlock(), createBlock("span", { key: 1 }, "Download PDF"))
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ])
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
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_sfc_main$5, { onDataAdded: fetchData }),
                    isLoading.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex justify-center items-center p-8"
                    }, [
                      createVNode("div", { class: "animate-spin h-8 w-8 border-2 border-primary rounded-full border-t-transparent" })
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px" }, [
                      createVNode(_component_Table, null, {
                        default: withCtx(() => [
                          createVNode(_component_TableHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_TableRow, null, {
                                default: withCtx(() => [
                                  createVNode(_component_TableHead, { class: "w-[100px]" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" No ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Nama Proyek")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("No PO")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Tanggal")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Tujuan PO")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Tanggal Pengiriman")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("PPN %")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Grand Total")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Action ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableBody, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(paginatedData.value, (item, index) => {
                                return openBlock(), createBlock(_component_TableRow, {
                                  key: item.id
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString((currentPage.value - 1) * itemsPerPage.value + index + 1), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "font-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.namaPekerjaan), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "font-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.noPo), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(formatTanggal(item.tanggal)), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "font-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.tujuanPo), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(formatTanggal(item.tglPengiriman)), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "font-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.ppn), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "font-medium" }, {
                                      default: withCtx(() => {
                                        var _a;
                                        return [
                                          createTextVNode(toDisplayString(formatRupiah((_a = item.grandTotal) != null ? _a : 0)), 1)
                                        ];
                                      }),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex items-center justify-center gap-2" }, [
                                          createVNode(_sfc_main$2, {
                                            id: item.id,
                                            onDetailPo: handleDetailPo
                                          }, null, 8, ["id"]),
                                          createVNode(_sfc_main$3, {
                                            id: item.id,
                                            onDataEdited: handleDataEdited
                                          }, null, 8, ["id"]),
                                          createVNode(_sfc_main$4, {
                                            item,
                                            onDataDeleted: handleDataDeleted
                                          }, null, 8, ["item"]),
                                          createVNode(_component_TooltipProvider, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_Tooltip, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_Button, {
                                                        disabled: downloadingId.value === item.id,
                                                        onClick: ($event) => downloadPdf(item),
                                                        size: "sm"
                                                      }, {
                                                        default: withCtx(() => [
                                                          downloadingId.value === item.id ? (openBlock(), createBlock(unref(Loader2), {
                                                            key: 0,
                                                            class: "w-4 h-4 animate-spin"
                                                          })) : (openBlock(), createBlock(unref(FileDown), {
                                                            key: 1,
                                                            class: "w-4 h-4"
                                                          }))
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["disabled", "onClick"])
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_TooltipContent, null, {
                                                    default: withCtx(() => [
                                                      _ctx.isDownloading ? (openBlock(), createBlock("span", { key: 0 }, "Mengunduh...")) : (openBlock(), createBlock("span", { key: 1 }, "Download PDF"))
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ])
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
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, null, {
                    default: withCtx(() => [
                      createVNode(_component_Input, {
                        type: "text",
                        modelValue: searchQuery.value,
                        "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                        placeholder: "Search..."
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$5, { onDataAdded: fetchData }),
                  isLoading.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex justify-center items-center p-8"
                  }, [
                    createVNode("div", { class: "animate-spin h-8 w-8 border-2 border-primary rounded-full border-t-transparent" })
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px" }, [
                    createVNode(_component_Table, null, {
                      default: withCtx(() => [
                        createVNode(_component_TableHeader, null, {
                          default: withCtx(() => [
                            createVNode(_component_TableRow, null, {
                              default: withCtx(() => [
                                createVNode(_component_TableHead, { class: "w-[100px]" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" No ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Nama Proyek")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("No PO")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Tanggal")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Tujuan PO")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Tanggal Pengiriman")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("PPN %")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Grand Total")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Action ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableBody, null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(paginatedData.value, (item, index) => {
                              return openBlock(), createBlock(_component_TableRow, {
                                key: item.id
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_TableCell, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString((currentPage.value - 1) * itemsPerPage.value + index + 1), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_TableCell, { class: "font-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.namaPekerjaan), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_TableCell, { class: "font-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.noPo), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_TableCell, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(formatTanggal(item.tanggal)), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_TableCell, { class: "font-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.tujuanPo), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_TableCell, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(formatTanggal(item.tglPengiriman)), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_TableCell, { class: "font-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.ppn), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_TableCell, { class: "font-medium" }, {
                                    default: withCtx(() => {
                                      var _a;
                                      return [
                                        createTextVNode(toDisplayString(formatRupiah((_a = item.grandTotal) != null ? _a : 0)), 1)
                                      ];
                                    }),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_TableCell, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex items-center justify-center gap-2" }, [
                                        createVNode(_sfc_main$2, {
                                          id: item.id,
                                          onDetailPo: handleDetailPo
                                        }, null, 8, ["id"]),
                                        createVNode(_sfc_main$3, {
                                          id: item.id,
                                          onDataEdited: handleDataEdited
                                        }, null, 8, ["id"]),
                                        createVNode(_sfc_main$4, {
                                          item,
                                          onDataDeleted: handleDataDeleted
                                        }, null, 8, ["item"]),
                                        createVNode(_component_TooltipProvider, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_Tooltip, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_Button, {
                                                      disabled: downloadingId.value === item.id,
                                                      onClick: ($event) => downloadPdf(item),
                                                      size: "sm"
                                                    }, {
                                                      default: withCtx(() => [
                                                        downloadingId.value === item.id ? (openBlock(), createBlock(unref(Loader2), {
                                                          key: 0,
                                                          class: "w-4 h-4 animate-spin"
                                                        })) : (openBlock(), createBlock(unref(FileDown), {
                                                          key: 1,
                                                          class: "w-4 h-4"
                                                        }))
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["disabled", "onClick"])
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_TooltipContent, null, {
                                                  default: withCtx(() => [
                                                    _ctx.isDownloading ? (openBlock(), createBlock("span", { key: 0 }, "Mengunduh...")) : (openBlock(), createBlock("span", { key: 1 }, "Download PDF"))
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ])
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
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><div class="mt-4 flex float-right">`);
      _push(ssrRenderComponent(_component_Button, {
        class: "mr-2",
        onClick: prevPage,
        disabled: currentPage.value === 1
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Previous `);
          } else {
            return [
              createTextVNode("Previous ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span>Page ${ssrInterpolate(currentPage.value)} of ${ssrInterpolate(totalPages.value)}</span>`);
      _push(ssrRenderComponent(_component_Button, {
        class: "ml-2",
        onClick: nextPage,
        disabled: currentPage.value === totalPages.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Next `);
          } else {
            return [
              createTextVNode("Next ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/po/ListData.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "po",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col gap-4" }, _attrs))}><div class="flex flex-wrap items-center justify-between gap-2"><h2 class="text-2xl font-bold tracking-tight">Purchase Order (PO)</h2></div><div>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(mon-project)/po.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=po-BaylVJsY.mjs.map
