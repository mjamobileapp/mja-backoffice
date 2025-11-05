import { defineComponent, mergeProps, ref, computed, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createCommentVNode, resolveComponent, unref, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$5, a as _sfc_main$1$1, b as _sfc_main$6, c as _sfc_main$4$1 } from './CardTitle-C5Xy3z8Z.mjs';
import { _ as _sfc_main$7 } from './Input-CDkjoebz.mjs';
import { _ as _sfc_main$7$1, a as _sfc_main$8, b as _sfc_main$3$1, c as _sfc_main$1$2, d as _sfc_main$6$1, e as _sfc_main$4$2 } from './TableHeader-DPsbKB96.mjs';
import { d as useRuntimeConfig, e as useCookie, a as _sfc_main$2$1, t as toast, c as cn } from './server.mjs';
import { _ as _sfc_main$2$2, a as _sfc_main$1$4, b as _sfc_main$4$3, d as _sfc_main$b } from './FormMessage-D5Wcp1o-.mjs';
import { useForm, Field } from 'vee-validate';
import { _ as _sfc_main$2$3, a as _sfc_main$a, b as _sfc_main$1$5 } from './PopoverTrigger-ldvWFHWS.mjs';
import { _ as _sfc_main$8$2, a as _sfc_main$4$4, b as _sfc_main$6$3, c as _sfc_main$2$4, d as _sfc_main$5$1, e as _sfc_main$3$3 } from './CommandShortcut-RFMOhYmh.mjs';
import { _ as _sfc_main$b$1 } from './CalendarPrevButton-B7sdA_QV.mjs';
import { _ as _sfc_main$c } from './Textarea-U1r39FPM.mjs';
import { _ as _sfc_main$8$1, a as _sfc_main$9, b as _sfc_main$6$2, c as _sfc_main$3$2, d as _sfc_main$1$3, e as _sfc_main$4$5, f as _sfc_main$7$2 } from './DialogTrigger-BW6jyQ7n.mjs';
import { toTypedSchema } from '@vee-validate/zod';
import { Loader2, PencilIcon, TrashIcon } from 'lucide-vue-next';
import * as z from 'zod';
import { DateFormatter, getLocalTimeZone, CalendarDate } from '@internationalized/date';
import { toDate, formatDate } from 'date-fns';
import { _ as _sfc_main$2$5, a as _sfc_main$e, b as _sfc_main$1$6 } from './TooltipTrigger-BcDIeLJj.mjs';
import { _ as _sfc_main$d } from './TooltipProvider-CFR98U-_.mjs';
import { _ as _sfc_main$8$3, a as _sfc_main$f, b as _sfc_main$5$2, c as _sfc_main$2$6, d as _sfc_main$1$7, e as _sfc_main$4$6, f as _sfc_main$3$4, g as _sfc_main$6$4, h as _sfc_main$7$3 } from './AlertDialogTrigger-DibbDHY2.mjs';
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
import 'radix-vue';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './Label-BBvFeqSn.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
    const kontrakSubkonList = ref([]);
    const profileFormSchema = toTypedSchema(
      z.object({
        idSubkon: z.number(),
        keterangan: z.string(),
        nilai: z.number(),
        tanggal: z.string().datetime()
      })
    );
    ref("");
    const isSubmitting = ref(false);
    const { handleSubmit, resetForm, setFieldValue } = useForm({
      validationSchema: profileFormSchema
      // initialValues: {
      //   idSubkon: 0,
      //   noKontrak: '',
      //   nilaiKontrak: 0,
      //   tglMulai: '',
      //   tglSelesai: '',
      // },
    });
    const isDialogOpen = ref(false);
    async function openDialog() {
      isDialogOpen.value = true;
      await fetchDataKontrakSukon();
    }
    const open = ref(false);
    function closeDialog() {
      isDialogOpen.value = false;
      open.value = false;
      resetForm();
    }
    const accessToken = useCookie("accessToken");
    const token = accessToken.value.token;
    async function fetchDataKontrakSukon() {
      try {
        const response = await fetch(`${baseUrl}/kontrakSubkon`, {
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
          kontrakSubkonList.value = fetchedData.data;
        } else {
          console.error("Data yang diterima bukan array:", fetchedData);
          kontrakSubkonList.value = [];
        }
      } catch (error) {
        console.error("Gagal mengambil data:", error);
        kontrakSubkonList.value = [];
      }
    }
    const onSubmit = handleSubmit(async (values) => {
      isSubmitting.value = true;
      const dataForm = {
        idSubkon: values.idSubkon,
        keterangan: values.keterangan,
        nilai: values.nilai,
        tanggal: values.tanggal,
        createdBy: username.value,
        createdDate: /* @__PURE__ */ new Date()
      };
      isDialogOpen.value = false;
      console.log(JSON.stringify(dataForm));
      try {
        const response = await fetch(`${baseUrl}/pembayaranSubkon`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(dataForm)
        });
        console.log(await response.json());
        if (response.ok) {
          toast({
            title: "Success",
            description: "Data berhasil disimpan."
          });
          console.log("[AddData] Emitting dataAdded...");
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
      const _component_FormItem = _sfc_main$2$2;
      const _component_FormLabel = _sfc_main$1$4;
      const _component_Popover = _sfc_main$2$3;
      const _component_PopoverTrigger = _sfc_main$a;
      const _component_FormControl = _sfc_main$4$3;
      const _component_ChevronsUpDown = resolveComponent("ChevronsUpDown");
      const _component_PopoverContent = _sfc_main$1$5;
      const _component_Command = _sfc_main$8$2;
      const _component_CommandInput = _sfc_main$4$4;
      const _component_CommandEmpty = _sfc_main$6$3;
      const _component_CommandList = _sfc_main$2$4;
      const _component_CommandGroup = _sfc_main$5$1;
      const _component_CommandItem = _sfc_main$3$3;
      const _component_Check = resolveComponent("Check");
      const _component_FormMessage = _sfc_main$b;
      const _component_RadixIconsCalendar = resolveComponent("RadixIconsCalendar");
      const _component_Calendar = _sfc_main$b$1;
      const _component_Textarea = _sfc_main$c;
      _push(ssrRenderComponent(unref(_sfc_main$8$1), mergeProps({
        open: isDialogOpen.value,
        onOpenChange: ($event) => isDialogOpen.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$9), { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$2$1), { onClick: openDialog }, {
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
                    createVNode(unref(_sfc_main$2$1), { onClick: openDialog }, {
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
                        _push4(ssrRenderComponent(unref(_sfc_main$1$3), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Add Data Pembayaran Subkon`);
                            } else {
                              return [
                                createTextVNode("Add Data Pembayaran Subkon")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$1$3), null, {
                            default: withCtx(() => [
                              createTextVNode("Add Data Pembayaran Subkon")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="max-h-[60vh] overflow-y-auto pr-2 space-y-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_FormField, { name: "idSubkon" }, {
                    default: withCtx(({ value }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormItem, { class: "flex flex-col" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormLabel, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Pilih Subkon`);
                                  } else {
                                    return [
                                      createTextVNode("Pilih Subkon")
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
                                                _push8(ssrRenderComponent(unref(_sfc_main$2$1), {
                                                  variant: "outline",
                                                  role: "combobox",
                                                  "aria-expanded": open.value,
                                                  class: unref(cn)("justify-between", !value && "text-muted-foreground")
                                                }, {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    var _a, _b;
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(value ? (_a = kontrakSubkonList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaSubkon : "Select Subkon...")} `);
                                                      _push9(ssrRenderComponent(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(value ? (_b = kontrakSubkonList.value.find((item) => item.id === value)) == null ? void 0 : _b.namaSubkon : "Select Subkon...") + " ", 1),
                                                        createVNode(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(unref(_sfc_main$2$1), {
                                                    variant: "outline",
                                                    role: "combobox",
                                                    "aria-expanded": open.value,
                                                    class: unref(cn)("justify-between", !value && "text-muted-foreground")
                                                  }, {
                                                    default: withCtx(() => {
                                                      var _a;
                                                      return [
                                                        createTextVNode(toDisplayString(value ? (_a = kontrakSubkonList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaSubkon : "Select Subkon...") + " ", 1),
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
                                            createVNode(_component_FormControl, null, {
                                              default: withCtx(() => [
                                                createVNode(unref(_sfc_main$2$1), {
                                                  variant: "outline",
                                                  role: "combobox",
                                                  "aria-expanded": open.value,
                                                  class: unref(cn)("justify-between", !value && "text-muted-foreground")
                                                }, {
                                                  default: withCtx(() => {
                                                    var _a;
                                                    return [
                                                      createTextVNode(toDisplayString(value ? (_a = kontrakSubkonList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaSubkon : "Select Subkon...") + " ", 1),
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
                                                _push8(ssrRenderComponent(_component_CommandInput, { placeholder: "Search Subkon..." }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_CommandEmpty, null, {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`No Subkon found.`);
                                                    } else {
                                                      return [
                                                        createTextVNode("No Subkon found.")
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
                                                            ssrRenderList(kontrakSubkonList.value, (item) => {
                                                              _push10(ssrRenderComponent(_component_CommandItem, {
                                                                key: item.id,
                                                                value: item.namaSubkon,
                                                                onSelect: () => {
                                                                  unref(setFieldValue)("idSubkon", item.id);
                                                                  open.value = false;
                                                                }
                                                              }, {
                                                                default: withCtx((_9, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(_component_Check, {
                                                                      class: unref(cn)("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                                    }, null, _parent11, _scopeId10));
                                                                    _push11(` ${ssrInterpolate(item.namaSubkon)} - ${ssrInterpolate(item.namaPekerjaan)}`);
                                                                  } else {
                                                                    return [
                                                                      createVNode(_component_Check, {
                                                                        class: unref(cn)("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                                      }, null, 8, ["class"]),
                                                                      createTextVNode(" " + toDisplayString(item.namaSubkon) + " - " + toDisplayString(item.namaPekerjaan), 1)
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                            });
                                                            _push10(`<!--]-->`);
                                                          } else {
                                                            return [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(kontrakSubkonList.value, (item) => {
                                                                return openBlock(), createBlock(_component_CommandItem, {
                                                                  key: item.id,
                                                                  value: item.namaSubkon,
                                                                  onSelect: () => {
                                                                    unref(setFieldValue)("idSubkon", item.id);
                                                                    open.value = false;
                                                                  }
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_Check, {
                                                                      class: unref(cn)("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                                    }, null, 8, ["class"]),
                                                                    createTextVNode(" " + toDisplayString(item.namaSubkon) + " - " + toDisplayString(item.namaPekerjaan), 1)
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
                                                            (openBlock(true), createBlock(Fragment, null, renderList(kontrakSubkonList.value, (item) => {
                                                              return openBlock(), createBlock(_component_CommandItem, {
                                                                key: item.id,
                                                                value: item.namaSubkon,
                                                                onSelect: () => {
                                                                  unref(setFieldValue)("idSubkon", item.id);
                                                                  open.value = false;
                                                                }
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_Check, {
                                                                    class: unref(cn)("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                                  }, null, 8, ["class"]),
                                                                  createTextVNode(" " + toDisplayString(item.namaSubkon) + " - " + toDisplayString(item.namaPekerjaan), 1)
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
                                                  createVNode(_component_CommandInput, { placeholder: "Search Subkon..." }),
                                                  createVNode(_component_CommandEmpty, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("No Subkon found.")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_CommandList, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_CommandGroup, null, {
                                                        default: withCtx(() => [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(kontrakSubkonList.value, (item) => {
                                                            return openBlock(), createBlock(_component_CommandItem, {
                                                              key: item.id,
                                                              value: item.namaSubkon,
                                                              onSelect: () => {
                                                                unref(setFieldValue)("idSubkon", item.id);
                                                                open.value = false;
                                                              }
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_Check, {
                                                                  class: unref(cn)("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                                }, null, 8, ["class"]),
                                                                createTextVNode(" " + toDisplayString(item.namaSubkon) + " - " + toDisplayString(item.namaPekerjaan), 1)
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
                                                createVNode(_component_CommandInput, { placeholder: "Search Subkon..." }),
                                                createVNode(_component_CommandEmpty, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("No Subkon found.")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_CommandList, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_CommandGroup, null, {
                                                      default: withCtx(() => [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(kontrakSubkonList.value, (item) => {
                                                          return openBlock(), createBlock(_component_CommandItem, {
                                                            key: item.id,
                                                            value: item.namaSubkon,
                                                            onSelect: () => {
                                                              unref(setFieldValue)("idSubkon", item.id);
                                                              open.value = false;
                                                            }
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_Check, {
                                                                class: unref(cn)("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                              }, null, 8, ["class"]),
                                                              createTextVNode(" " + toDisplayString(item.namaSubkon) + " - " + toDisplayString(item.namaPekerjaan), 1)
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
                                              createVNode(unref(_sfc_main$2$1), {
                                                variant: "outline",
                                                role: "combobox",
                                                "aria-expanded": open.value,
                                                class: unref(cn)("justify-between", !value && "text-muted-foreground")
                                              }, {
                                                default: withCtx(() => {
                                                  var _a;
                                                  return [
                                                    createTextVNode(toDisplayString(value ? (_a = kontrakSubkonList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaSubkon : "Select Subkon...") + " ", 1),
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
                                              createVNode(_component_CommandInput, { placeholder: "Search Subkon..." }),
                                              createVNode(_component_CommandEmpty, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("No Subkon found.")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_CommandList, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_CommandGroup, null, {
                                                    default: withCtx(() => [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(kontrakSubkonList.value, (item) => {
                                                        return openBlock(), createBlock(_component_CommandItem, {
                                                          key: item.id,
                                                          value: item.namaSubkon,
                                                          onSelect: () => {
                                                            unref(setFieldValue)("idSubkon", item.id);
                                                            open.value = false;
                                                          }
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_Check, {
                                                              class: unref(cn)("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                            }, null, 8, ["class"]),
                                                            createTextVNode(" " + toDisplayString(item.namaSubkon) + " - " + toDisplayString(item.namaPekerjaan), 1)
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
                                    createTextVNode("Pilih Subkon")
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
                                            createVNode(unref(_sfc_main$2$1), {
                                              variant: "outline",
                                              role: "combobox",
                                              "aria-expanded": open.value,
                                              class: unref(cn)("justify-between", !value && "text-muted-foreground")
                                            }, {
                                              default: withCtx(() => {
                                                var _a;
                                                return [
                                                  createTextVNode(toDisplayString(value ? (_a = kontrakSubkonList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaSubkon : "Select Subkon...") + " ", 1),
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
                                            createVNode(_component_CommandInput, { placeholder: "Search Subkon..." }),
                                            createVNode(_component_CommandEmpty, null, {
                                              default: withCtx(() => [
                                                createTextVNode("No Subkon found.")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_CommandList, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_CommandGroup, null, {
                                                  default: withCtx(() => [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(kontrakSubkonList.value, (item) => {
                                                      return openBlock(), createBlock(_component_CommandItem, {
                                                        key: item.id,
                                                        value: item.namaSubkon,
                                                        onSelect: () => {
                                                          unref(setFieldValue)("idSubkon", item.id);
                                                          open.value = false;
                                                        }
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_Check, {
                                                            class: unref(cn)("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                          }, null, 8, ["class"]),
                                                          createTextVNode(" " + toDisplayString(item.namaSubkon) + " - " + toDisplayString(item.namaPekerjaan), 1)
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
                                  createTextVNode("Pilih Subkon")
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
                                          createVNode(unref(_sfc_main$2$1), {
                                            variant: "outline",
                                            role: "combobox",
                                            "aria-expanded": open.value,
                                            class: unref(cn)("justify-between", !value && "text-muted-foreground")
                                          }, {
                                            default: withCtx(() => {
                                              var _a;
                                              return [
                                                createTextVNode(toDisplayString(value ? (_a = kontrakSubkonList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaSubkon : "Select Subkon...") + " ", 1),
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
                                          createVNode(_component_CommandInput, { placeholder: "Search Subkon..." }),
                                          createVNode(_component_CommandEmpty, null, {
                                            default: withCtx(() => [
                                              createTextVNode("No Subkon found.")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_CommandList, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_CommandGroup, null, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(kontrakSubkonList.value, (item) => {
                                                    return openBlock(), createBlock(_component_CommandItem, {
                                                      key: item.id,
                                                      value: item.namaSubkon,
                                                      onSelect: () => {
                                                        unref(setFieldValue)("idSubkon", item.id);
                                                        open.value = false;
                                                      }
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_Check, {
                                                          class: unref(cn)("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                        }, null, 8, ["class"]),
                                                        createTextVNode(" " + toDisplayString(item.namaSubkon) + " - " + toDisplayString(item.namaPekerjaan), 1)
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
                                                _push8(ssrRenderComponent(unref(_sfc_main$2$1), {
                                                  variant: "outline",
                                                  class: unref(cn)("justify-start text-left font-normal", !value && "text-muted-foreground")
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
                                                  createVNode(unref(_sfc_main$2$1), {
                                                    variant: "outline",
                                                    class: unref(cn)("justify-start text-left font-normal", !value && "text-muted-foreground")
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
                                                createVNode(unref(_sfc_main$2$1), {
                                                  variant: "outline",
                                                  class: unref(cn)("justify-start text-left font-normal", !value && "text-muted-foreground")
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
                                              createVNode(unref(_sfc_main$2$1), {
                                                variant: "outline",
                                                class: unref(cn)("justify-start text-left font-normal", !value && "text-muted-foreground")
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
                                            createVNode(unref(_sfc_main$2$1), {
                                              variant: "outline",
                                              class: unref(cn)("justify-start text-left font-normal", !value && "text-muted-foreground")
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
                                          createVNode(unref(_sfc_main$2$1), {
                                            variant: "outline",
                                            class: unref(cn)("justify-start text-left font-normal", !value && "text-muted-foreground")
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
                  _push3(ssrRenderComponent(_component_FormField, { name: "nilai" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormItem, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormLabel, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Nilai / Jumlah Pembayaran`);
                                  } else {
                                    return [
                                      createTextVNode("Nilai / Jumlah Pembayaran")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormControl, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$7), mergeProps({ type: "number" }, componentField), null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$7), mergeProps({ type: "number" }, componentField), null, 16)
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
                                    createTextVNode("Nilai / Jumlah Pembayaran")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$7), mergeProps({ type: "number" }, componentField), null, 16)
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
                                  createTextVNode("Nilai / Jumlah Pembayaran")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$7), mergeProps({ type: "number" }, componentField), null, 16)
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
                  _push3(ssrRenderComponent(_component_FormField, { name: "keterangan" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormItem, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormLabel, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Keterangan`);
                                  } else {
                                    return [
                                      createTextVNode("Keterangan")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormControl, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Textarea, mergeProps({ type: "text" }, componentField), null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_Textarea, mergeProps({ type: "text" }, componentField), null, 16)
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
                                    createTextVNode("Keterangan")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Textarea, mergeProps({ type: "text" }, componentField), null, 16)
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
                                  createTextVNode("Keterangan")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Textarea, mergeProps({ type: "text" }, componentField), null, 16)
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
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$4$5), { class: "flex justify-between items-center pt-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$7$2), { "as-child": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$2$1), {
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
                                createVNode(unref(_sfc_main$2$1), {
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
                          _push4(ssrRenderComponent(unref(_sfc_main$2$1), { disabled: "" }, {
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
                          _push4(ssrRenderComponent(unref(_sfc_main$2$1), { type: "submit" }, {
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
                              createVNode(unref(_sfc_main$2$1), {
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
                          isSubmitting.value ? (openBlock(), createBlock(unref(_sfc_main$2$1), {
                            key: 0,
                            disabled: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Loader2), { class: "w-4 h-4 mr-2 animate-spin" }),
                              createTextVNode(" Saving.. ")
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock(unref(_sfc_main$2$1), {
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
                          createVNode(unref(_sfc_main$1$3), null, {
                            default: withCtx(() => [
                              createTextVNode("Add Data Pembayaran Subkon")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "max-h-[60vh] overflow-y-auto pr-2 space-y-6" }, [
                        createVNode(_component_FormField, { name: "idSubkon" }, {
                          default: withCtx(({ value }) => [
                            createVNode(_component_FormItem, { class: "flex flex-col" }, {
                              default: withCtx(() => [
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Pilih Subkon")
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
                                            createVNode(unref(_sfc_main$2$1), {
                                              variant: "outline",
                                              role: "combobox",
                                              "aria-expanded": open.value,
                                              class: unref(cn)("justify-between", !value && "text-muted-foreground")
                                            }, {
                                              default: withCtx(() => {
                                                var _a;
                                                return [
                                                  createTextVNode(toDisplayString(value ? (_a = kontrakSubkonList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaSubkon : "Select Subkon...") + " ", 1),
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
                                            createVNode(_component_CommandInput, { placeholder: "Search Subkon..." }),
                                            createVNode(_component_CommandEmpty, null, {
                                              default: withCtx(() => [
                                                createTextVNode("No Subkon found.")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_CommandList, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_CommandGroup, null, {
                                                  default: withCtx(() => [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(kontrakSubkonList.value, (item) => {
                                                      return openBlock(), createBlock(_component_CommandItem, {
                                                        key: item.id,
                                                        value: item.namaSubkon,
                                                        onSelect: () => {
                                                          unref(setFieldValue)("idSubkon", item.id);
                                                          open.value = false;
                                                        }
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_Check, {
                                                            class: unref(cn)("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                          }, null, 8, ["class"]),
                                                          createTextVNode(" " + toDisplayString(item.namaSubkon) + " - " + toDisplayString(item.namaPekerjaan), 1)
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
                                            createVNode(unref(_sfc_main$2$1), {
                                              variant: "outline",
                                              class: unref(cn)("justify-start text-left font-normal", !value && "text-muted-foreground")
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
                        createVNode(_component_FormField, { name: "nilai" }, {
                          default: withCtx(({ componentField }) => [
                            createVNode(_component_FormItem, null, {
                              default: withCtx(() => [
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Nilai / Jumlah Pembayaran")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$7), mergeProps({ type: "number" }, componentField), null, 16)
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
                        createVNode(_component_FormField, { name: "keterangan" }, {
                          default: withCtx(({ componentField }) => [
                            createVNode(_component_FormItem, null, {
                              default: withCtx(() => [
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Keterangan")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Textarea, mergeProps({ type: "text" }, componentField), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_FormMessage)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(unref(_sfc_main$4$5), { class: "flex justify-between items-center pt-4" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$7$2), { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$2$1), {
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
                          isSubmitting.value ? (openBlock(), createBlock(unref(_sfc_main$2$1), {
                            key: 0,
                            disabled: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Loader2), { class: "w-4 h-4 mr-2 animate-spin" }),
                              createTextVNode(" Saving.. ")
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock(unref(_sfc_main$2$1), {
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
              createVNode(unref(_sfc_main$9), { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$2$1), { onClick: openDialog }, {
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
                        createVNode(unref(_sfc_main$1$3), null, {
                          default: withCtx(() => [
                            createTextVNode("Add Data Pembayaran Subkon")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "max-h-[60vh] overflow-y-auto pr-2 space-y-6" }, [
                      createVNode(_component_FormField, { name: "idSubkon" }, {
                        default: withCtx(({ value }) => [
                          createVNode(_component_FormItem, { class: "flex flex-col" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Pilih Subkon")
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
                                          createVNode(unref(_sfc_main$2$1), {
                                            variant: "outline",
                                            role: "combobox",
                                            "aria-expanded": open.value,
                                            class: unref(cn)("justify-between", !value && "text-muted-foreground")
                                          }, {
                                            default: withCtx(() => {
                                              var _a;
                                              return [
                                                createTextVNode(toDisplayString(value ? (_a = kontrakSubkonList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaSubkon : "Select Subkon...") + " ", 1),
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
                                          createVNode(_component_CommandInput, { placeholder: "Search Subkon..." }),
                                          createVNode(_component_CommandEmpty, null, {
                                            default: withCtx(() => [
                                              createTextVNode("No Subkon found.")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_CommandList, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_CommandGroup, null, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(kontrakSubkonList.value, (item) => {
                                                    return openBlock(), createBlock(_component_CommandItem, {
                                                      key: item.id,
                                                      value: item.namaSubkon,
                                                      onSelect: () => {
                                                        unref(setFieldValue)("idSubkon", item.id);
                                                        open.value = false;
                                                      }
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_Check, {
                                                          class: unref(cn)("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                        }, null, 8, ["class"]),
                                                        createTextVNode(" " + toDisplayString(item.namaSubkon) + " - " + toDisplayString(item.namaPekerjaan), 1)
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
                                          createVNode(unref(_sfc_main$2$1), {
                                            variant: "outline",
                                            class: unref(cn)("justify-start text-left font-normal", !value && "text-muted-foreground")
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
                      createVNode(_component_FormField, { name: "nilai" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(_component_FormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Nilai / Jumlah Pembayaran")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$7), mergeProps({ type: "number" }, componentField), null, 16)
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
                      createVNode(_component_FormField, { name: "keterangan" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(_component_FormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Keterangan")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Textarea, mergeProps({ type: "text" }, componentField), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_FormMessage)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(unref(_sfc_main$4$5), { class: "flex justify-between items-center pt-4" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$7$2), { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$2$1), {
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
                        isSubmitting.value ? (openBlock(), createBlock(unref(_sfc_main$2$1), {
                          key: 0,
                          disabled: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Loader2), { class: "w-4 h-4 mr-2 animate-spin" }),
                            createTextVNode(" Saving.. ")
                          ]),
                          _: 1
                        })) : (openBlock(), createBlock(unref(_sfc_main$2$1), {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pembayaran-subkon/AddData.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
        const response = await fetch(`${baseUrl}/pembayaranSubkon/${props.item.id}`, {
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
      const _component_TooltipProvider = _sfc_main$d;
      const _component_Tooltip = _sfc_main$2$5;
      const _component_TooltipTrigger = _sfc_main$e;
      const _component_Button = _sfc_main$2$1;
      const _component_TooltipContent = _sfc_main$1$6;
      _push(ssrRenderComponent(unref(_sfc_main$8$3), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$f), null, {
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
            _push2(ssrRenderComponent(unref(_sfc_main$5$2), null, {
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
              createVNode(unref(_sfc_main$f), null, {
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
              createVNode(unref(_sfc_main$5$2), null, {
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pembayaran-subkon/DeleteData.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
        idSubkon: z.number(),
        keterangan: z.string(),
        nilai: z.number(),
        tanggal: z.string().datetime()
      })
    );
    const { handleSubmit, resetForm, setValues, values, setFieldValue } = useForm({
      validationSchema: profileFormSchema,
      initialValues: {
        idSubkon: 0,
        nilai: 0,
        tanggal: "",
        keterangan: ""
        // Use prop value directly as fallback
      }
    });
    const isDialogOpen = ref(false);
    const dateMulai = ref();
    ref();
    const kontrakSubkonList = ref([]);
    async function fetchDatakontrakSubkon() {
      try {
        const response = await fetch(`${baseUrl}/kontrakSubkon`, {
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
          kontrakSubkonList.value = fetchedData.data;
        } else {
          console.error("Data yang diterima bukan array:", fetchedData);
          kontrakSubkonList.value = [];
        }
      } catch (error) {
        console.error("Gagal mengambil data:", error);
        kontrakSubkonList.value = [];
      }
    }
    async function fetchData() {
      try {
        const response = await fetch(`${baseUrl}/pembayaranSubkon/${props.id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.ok) {
          const { data } = await response.json();
          console.log(data);
          const nilaiNumber = parseFloat(data.nilai);
          const tanggalString = data.tanggal;
          const dateObj = tanggalString ? toDate(tanggalString) : void 0;
          if (dateObj && isNaN(dateObj.getTime())) {
            throw new Error("Invalid dateMulai value received from API.");
          }
          setValues({
            idSubkon: data.idSubkon,
            // Kirim sebagai number agar validasi Zod/VeeValidate 'number' berhasil
            nilai: nilaiNumber,
            keterangan: data.keterangan,
            // Kirim Date Object yang sudah valid atau undefined/null
            tanggal: dateObj ? dateObj.toISOString() : void 0
          });
          if (dateObj) {
            dateMulai.value = new CalendarDate(
              dateObj.getFullYear(),
              dateObj.getMonth() + 1,
              // Month + 1 karena CalendarDate berbasis 1
              dateObj.getDate()
            );
          }
        } else {
          console.error("Gagal mengambil data. Status:", response.status);
        }
      } catch (error) {
        console.error("Fetch error:", error.message);
      }
    }
    async function openDialog() {
      isDialogOpen.value = true;
      await fetchData();
      await fetchDatakontrakSubkon();
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
          idSubkon: values.idSubkon,
          nilai: values.nilai,
          tanggal: values.tanggal,
          keterangan: values.keterangan,
          createdBy: username.value,
          createdDate: /* @__PURE__ */ new Date()
        };
        const response = await fetch(`${baseUrl}/pembayaranSubkon/${props.id}`, {
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
      const _component_TooltipProvider = _sfc_main$d;
      const _component_Tooltip = _sfc_main$2$5;
      const _component_TooltipTrigger = _sfc_main$e;
      const _component_TooltipContent = _sfc_main$1$6;
      const _component_Popover = _sfc_main$2$3;
      const _component_PopoverTrigger = _sfc_main$a;
      const _component_ChevronsUpDown = resolveComponent("ChevronsUpDown");
      const _component_PopoverContent = _sfc_main$1$5;
      const _component_Command = _sfc_main$8$2;
      const _component_CommandInput = _sfc_main$4$4;
      const _component_CommandEmpty = _sfc_main$6$3;
      const _component_CommandList = _sfc_main$2$4;
      const _component_CommandGroup = _sfc_main$5$1;
      const _component_CommandItem = _sfc_main$3$3;
      const _component_Check = resolveComponent("Check");
      const _component_RadixIconsCalendar = resolveComponent("RadixIconsCalendar");
      const _component_Calendar = _sfc_main$b$1;
      const _component_Textarea = _sfc_main$c;
      const _component_Loader2 = resolveComponent("Loader2");
      _push(ssrRenderComponent(unref(_sfc_main$8$1), mergeProps({
        open: isDialogOpen.value,
        onOpenChange: ($event) => isDialogOpen.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$9), { "as-child": "" }, {
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
                                    _push6(ssrRenderComponent(unref(_sfc_main$2$1), {
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
                                      createVNode(unref(_sfc_main$2$1), {
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
                                    createVNode(unref(_sfc_main$2$1), {
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
                                  createVNode(unref(_sfc_main$2$1), {
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
                                createVNode(unref(_sfc_main$2$1), {
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
                        _push4(ssrRenderComponent(unref(_sfc_main$1$3), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Edit Data Pembayaran Subkon`);
                            } else {
                              return [
                                createTextVNode("Edit Data Pembayaran Subkon")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$1$3), null, {
                            default: withCtx(() => [
                              createTextVNode("Edit Data Pembayaran Subkon")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="max-h-[60vh] overflow-y-auto pr-2 space-y-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "idSubkon" }, {
                    default: withCtx(({ value }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2$2), { class: "flex flex-col" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$1$4), null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Pilih Subkon`);
                                  } else {
                                    return [
                                      createTextVNode("Pilih Subkon")
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
                                                _push8(ssrRenderComponent(unref(_sfc_main$2$1), {
                                                  variant: "outline",
                                                  role: "combobox",
                                                  "aria-expanded": open.value,
                                                  class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-between", !value && "text-muted-foreground")
                                                }, {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    var _a, _b;
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(value ? (_a = kontrakSubkonList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaSubkon : "Select kontrakSubkon...")} `);
                                                      _push9(ssrRenderComponent(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(value ? (_b = kontrakSubkonList.value.find((item) => item.id === value)) == null ? void 0 : _b.namaSubkon : "Select kontrakSubkon...") + " ", 1),
                                                        createVNode(_component_ChevronsUpDown, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(unref(_sfc_main$2$1), {
                                                    variant: "outline",
                                                    role: "combobox",
                                                    "aria-expanded": open.value,
                                                    class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-between", !value && "text-muted-foreground")
                                                  }, {
                                                    default: withCtx(() => {
                                                      var _a;
                                                      return [
                                                        createTextVNode(toDisplayString(value ? (_a = kontrakSubkonList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaSubkon : "Select kontrakSubkon...") + " ", 1),
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
                                                createVNode(unref(_sfc_main$2$1), {
                                                  variant: "outline",
                                                  role: "combobox",
                                                  "aria-expanded": open.value,
                                                  class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-between", !value && "text-muted-foreground")
                                                }, {
                                                  default: withCtx(() => {
                                                    var _a;
                                                    return [
                                                      createTextVNode(toDisplayString(value ? (_a = kontrakSubkonList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaSubkon : "Select kontrakSubkon...") + " ", 1),
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
                                                _push8(ssrRenderComponent(_component_CommandInput, { placeholder: "Search kontrakSubkon..." }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_CommandEmpty, null, {
                                                  default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`No Kontrak Subkon found.`);
                                                    } else {
                                                      return [
                                                        createTextVNode("No Kontrak Subkon found.")
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
                                                            ssrRenderList(kontrakSubkonList.value, (item) => {
                                                              _push10(ssrRenderComponent(_component_CommandItem, {
                                                                key: item.id,
                                                                value: item.namaSubkon,
                                                                onSelect: () => {
                                                                  unref(setFieldValue)("idSubkon", item.id);
                                                                  open.value = false;
                                                                }
                                                              }, {
                                                                default: withCtx((_9, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(_component_Check, {
                                                                      class: ("cn" in _ctx ? _ctx.cn : unref(cn))("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                                    }, null, _parent11, _scopeId10));
                                                                    _push11(` ${ssrInterpolate(item.namaSubkon)}`);
                                                                  } else {
                                                                    return [
                                                                      createVNode(_component_Check, {
                                                                        class: ("cn" in _ctx ? _ctx.cn : unref(cn))("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                                      }, null, 8, ["class"]),
                                                                      createTextVNode(" " + toDisplayString(item.namaSubkon), 1)
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                            });
                                                            _push10(`<!--]-->`);
                                                          } else {
                                                            return [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(kontrakSubkonList.value, (item) => {
                                                                return openBlock(), createBlock(_component_CommandItem, {
                                                                  key: item.id,
                                                                  value: item.namaSubkon,
                                                                  onSelect: () => {
                                                                    unref(setFieldValue)("idSubkon", item.id);
                                                                    open.value = false;
                                                                  }
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_Check, {
                                                                      class: ("cn" in _ctx ? _ctx.cn : unref(cn))("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                                    }, null, 8, ["class"]),
                                                                    createTextVNode(" " + toDisplayString(item.namaSubkon), 1)
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
                                                            (openBlock(true), createBlock(Fragment, null, renderList(kontrakSubkonList.value, (item) => {
                                                              return openBlock(), createBlock(_component_CommandItem, {
                                                                key: item.id,
                                                                value: item.namaSubkon,
                                                                onSelect: () => {
                                                                  unref(setFieldValue)("idSubkon", item.id);
                                                                  open.value = false;
                                                                }
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_Check, {
                                                                    class: ("cn" in _ctx ? _ctx.cn : unref(cn))("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                                  }, null, 8, ["class"]),
                                                                  createTextVNode(" " + toDisplayString(item.namaSubkon), 1)
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
                                                  createVNode(_component_CommandInput, { placeholder: "Search kontrakSubkon..." }),
                                                  createVNode(_component_CommandEmpty, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("No Kontrak Subkon found.")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_CommandList, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_CommandGroup, null, {
                                                        default: withCtx(() => [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(kontrakSubkonList.value, (item) => {
                                                            return openBlock(), createBlock(_component_CommandItem, {
                                                              key: item.id,
                                                              value: item.namaSubkon,
                                                              onSelect: () => {
                                                                unref(setFieldValue)("idSubkon", item.id);
                                                                open.value = false;
                                                              }
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_Check, {
                                                                  class: ("cn" in _ctx ? _ctx.cn : unref(cn))("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                                }, null, 8, ["class"]),
                                                                createTextVNode(" " + toDisplayString(item.namaSubkon), 1)
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
                                                createVNode(_component_CommandInput, { placeholder: "Search kontrakSubkon..." }),
                                                createVNode(_component_CommandEmpty, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("No Kontrak Subkon found.")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_CommandList, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_CommandGroup, null, {
                                                      default: withCtx(() => [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(kontrakSubkonList.value, (item) => {
                                                          return openBlock(), createBlock(_component_CommandItem, {
                                                            key: item.id,
                                                            value: item.namaSubkon,
                                                            onSelect: () => {
                                                              unref(setFieldValue)("idSubkon", item.id);
                                                              open.value = false;
                                                            }
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_Check, {
                                                                class: ("cn" in _ctx ? _ctx.cn : unref(cn))("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                              }, null, 8, ["class"]),
                                                              createTextVNode(" " + toDisplayString(item.namaSubkon), 1)
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
                                              createVNode(unref(_sfc_main$2$1), {
                                                variant: "outline",
                                                role: "combobox",
                                                "aria-expanded": open.value,
                                                class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-between", !value && "text-muted-foreground")
                                              }, {
                                                default: withCtx(() => {
                                                  var _a;
                                                  return [
                                                    createTextVNode(toDisplayString(value ? (_a = kontrakSubkonList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaSubkon : "Select kontrakSubkon...") + " ", 1),
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
                                              createVNode(_component_CommandInput, { placeholder: "Search kontrakSubkon..." }),
                                              createVNode(_component_CommandEmpty, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("No Kontrak Subkon found.")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_CommandList, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_CommandGroup, null, {
                                                    default: withCtx(() => [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(kontrakSubkonList.value, (item) => {
                                                        return openBlock(), createBlock(_component_CommandItem, {
                                                          key: item.id,
                                                          value: item.namaSubkon,
                                                          onSelect: () => {
                                                            unref(setFieldValue)("idSubkon", item.id);
                                                            open.value = false;
                                                          }
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_Check, {
                                                              class: ("cn" in _ctx ? _ctx.cn : unref(cn))("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                            }, null, 8, ["class"]),
                                                            createTextVNode(" " + toDisplayString(item.namaSubkon), 1)
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
                              _push5(ssrRenderComponent(unref(_sfc_main$b), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$1$4), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Pilih Subkon")
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
                                            createVNode(unref(_sfc_main$2$1), {
                                              variant: "outline",
                                              role: "combobox",
                                              "aria-expanded": open.value,
                                              class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-between", !value && "text-muted-foreground")
                                            }, {
                                              default: withCtx(() => {
                                                var _a;
                                                return [
                                                  createTextVNode(toDisplayString(value ? (_a = kontrakSubkonList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaSubkon : "Select kontrakSubkon...") + " ", 1),
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
                                            createVNode(_component_CommandInput, { placeholder: "Search kontrakSubkon..." }),
                                            createVNode(_component_CommandEmpty, null, {
                                              default: withCtx(() => [
                                                createTextVNode("No Kontrak Subkon found.")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_CommandList, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_CommandGroup, null, {
                                                  default: withCtx(() => [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(kontrakSubkonList.value, (item) => {
                                                      return openBlock(), createBlock(_component_CommandItem, {
                                                        key: item.id,
                                                        value: item.namaSubkon,
                                                        onSelect: () => {
                                                          unref(setFieldValue)("idSubkon", item.id);
                                                          open.value = false;
                                                        }
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_Check, {
                                                            class: ("cn" in _ctx ? _ctx.cn : unref(cn))("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                          }, null, 8, ["class"]),
                                                          createTextVNode(" " + toDisplayString(item.namaSubkon), 1)
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
                                createVNode(unref(_sfc_main$b))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2$2), { class: "flex flex-col" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$1$4), null, {
                                default: withCtx(() => [
                                  createTextVNode("Pilih Subkon")
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
                                          createVNode(unref(_sfc_main$2$1), {
                                            variant: "outline",
                                            role: "combobox",
                                            "aria-expanded": open.value,
                                            class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-between", !value && "text-muted-foreground")
                                          }, {
                                            default: withCtx(() => {
                                              var _a;
                                              return [
                                                createTextVNode(toDisplayString(value ? (_a = kontrakSubkonList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaSubkon : "Select kontrakSubkon...") + " ", 1),
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
                                          createVNode(_component_CommandInput, { placeholder: "Search kontrakSubkon..." }),
                                          createVNode(_component_CommandEmpty, null, {
                                            default: withCtx(() => [
                                              createTextVNode("No Kontrak Subkon found.")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_CommandList, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_CommandGroup, null, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(kontrakSubkonList.value, (item) => {
                                                    return openBlock(), createBlock(_component_CommandItem, {
                                                      key: item.id,
                                                      value: item.namaSubkon,
                                                      onSelect: () => {
                                                        unref(setFieldValue)("idSubkon", item.id);
                                                        open.value = false;
                                                      }
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_Check, {
                                                          class: ("cn" in _ctx ? _ctx.cn : unref(cn))("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                        }, null, 8, ["class"]),
                                                        createTextVNode(" " + toDisplayString(item.namaSubkon), 1)
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
                              createVNode(unref(_sfc_main$b))
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
                        _push4(ssrRenderComponent(unref(_sfc_main$2$2), { class: "flex flex-col" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$1$4), null, {
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
                                                _push8(ssrRenderComponent(unref(_sfc_main$2$1), {
                                                  variant: "outline",
                                                  class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-start text-left font-normal", !value && "text-muted-foreground")
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
                                                  createVNode(unref(_sfc_main$2$1), {
                                                    variant: "outline",
                                                    class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-start text-left font-normal", !value && "text-muted-foreground")
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
                                                createVNode(unref(_sfc_main$2$1), {
                                                  variant: "outline",
                                                  class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-start text-left font-normal", !value && "text-muted-foreground")
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
                                              createVNode(unref(_sfc_main$2$1), {
                                                variant: "outline",
                                                class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-start text-left font-normal", !value && "text-muted-foreground")
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
                              _push5(ssrRenderComponent(unref(_sfc_main$b), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$1$4), null, {
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
                                            createVNode(unref(_sfc_main$2$1), {
                                              variant: "outline",
                                              class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-start text-left font-normal", !value && "text-muted-foreground")
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
                                createVNode(unref(_sfc_main$b))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(`<input${ssrRenderAttrs(mergeProps({ type: "hidden" }, field))}${_scopeId3}>`);
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2$2), { class: "flex flex-col" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$1$4), null, {
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
                                          createVNode(unref(_sfc_main$2$1), {
                                            variant: "outline",
                                            class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-start text-left font-normal", !value && "text-muted-foreground")
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
                              createVNode(unref(_sfc_main$b))
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("input", mergeProps({ type: "hidden" }, field), null, 16)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Field), { name: "nilai" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2$2), null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$1$4), null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Nilai / Jumlah Pembayaran`);
                                  } else {
                                    return [
                                      createTextVNode("Nilai / Jumlah Pembayaran")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$4$3), null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$7), mergeProps({ type: "number" }, componentField), null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$7), mergeProps({ type: "number" }, componentField), null, 16)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$b), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$1$4), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Nilai / Jumlah Pembayaran")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4$3), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$7), mergeProps({ type: "number" }, componentField), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$b))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2$2), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$1$4), null, {
                                default: withCtx(() => [
                                  createTextVNode("Nilai / Jumlah Pembayaran")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$4$3), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$7), mergeProps({ type: "number" }, componentField), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$b))
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Field), { name: "keterangan" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2$2), null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$1$4), null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Keterangan`);
                                  } else {
                                    return [
                                      createTextVNode("Keterangan")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$4$3), null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Textarea, mergeProps({ type: "text" }, componentField), null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_Textarea, mergeProps({ type: "text" }, componentField), null, 16)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$b), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$1$4), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Keterangan")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4$3), null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Textarea, mergeProps({ type: "text" }, componentField), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$b))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2$2), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$1$4), null, {
                                default: withCtx(() => [
                                  createTextVNode("Keterangan")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$4$3), null, {
                                default: withCtx(() => [
                                  createVNode(_component_Textarea, mergeProps({ type: "text" }, componentField), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$b))
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$4$5), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$7$2), { "as-child": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$2$1), {
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
                                createVNode(unref(_sfc_main$2$1), {
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
                          _push4(ssrRenderComponent(unref(_sfc_main$2$1), { disabled: "" }, {
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
                          _push4(ssrRenderComponent(unref(_sfc_main$2$1), { type: "submit" }, {
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
                              createVNode(unref(_sfc_main$2$1), {
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
                            createVNode(unref(_sfc_main$2$1), { disabled: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_Loader2, { class: "w-4 h-4 mr-2 animate-spin" }),
                                createTextVNode(" Updating.. ")
                              ]),
                              _: 1
                            })
                          ])) : (openBlock(), createBlock(unref(_sfc_main$2$1), {
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
                          createVNode(unref(_sfc_main$1$3), null, {
                            default: withCtx(() => [
                              createTextVNode("Edit Data Pembayaran Subkon")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "max-h-[60vh] overflow-y-auto pr-2 space-y-6" }, [
                        createVNode(unref(Field), { name: "idSubkon" }, {
                          default: withCtx(({ value }) => [
                            createVNode(unref(_sfc_main$2$2), { class: "flex flex-col" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$1$4), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Pilih Subkon")
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
                                            createVNode(unref(_sfc_main$2$1), {
                                              variant: "outline",
                                              role: "combobox",
                                              "aria-expanded": open.value,
                                              class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-between", !value && "text-muted-foreground")
                                            }, {
                                              default: withCtx(() => {
                                                var _a;
                                                return [
                                                  createTextVNode(toDisplayString(value ? (_a = kontrakSubkonList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaSubkon : "Select kontrakSubkon...") + " ", 1),
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
                                            createVNode(_component_CommandInput, { placeholder: "Search kontrakSubkon..." }),
                                            createVNode(_component_CommandEmpty, null, {
                                              default: withCtx(() => [
                                                createTextVNode("No Kontrak Subkon found.")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_CommandList, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_CommandGroup, null, {
                                                  default: withCtx(() => [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(kontrakSubkonList.value, (item) => {
                                                      return openBlock(), createBlock(_component_CommandItem, {
                                                        key: item.id,
                                                        value: item.namaSubkon,
                                                        onSelect: () => {
                                                          unref(setFieldValue)("idSubkon", item.id);
                                                          open.value = false;
                                                        }
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_Check, {
                                                            class: ("cn" in _ctx ? _ctx.cn : unref(cn))("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                          }, null, 8, ["class"]),
                                                          createTextVNode(" " + toDisplayString(item.namaSubkon), 1)
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
                                createVNode(unref(_sfc_main$b))
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), { name: "tanggal" }, {
                          default: withCtx(({ field, value }) => [
                            createVNode(unref(_sfc_main$2$2), { class: "flex flex-col" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$1$4), null, {
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
                                            createVNode(unref(_sfc_main$2$1), {
                                              variant: "outline",
                                              class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-start text-left font-normal", !value && "text-muted-foreground")
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
                                createVNode(unref(_sfc_main$b))
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("input", mergeProps({ type: "hidden" }, field), null, 16)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), { name: "nilai" }, {
                          default: withCtx(({ componentField }) => [
                            createVNode(unref(_sfc_main$2$2), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$1$4), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Nilai / Jumlah Pembayaran")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4$3), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$7), mergeProps({ type: "number" }, componentField), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$b))
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), { name: "keterangan" }, {
                          default: withCtx(({ componentField }) => [
                            createVNode(unref(_sfc_main$2$2), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$1$4), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Keterangan")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4$3), null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Textarea, mergeProps({ type: "text" }, componentField), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$b))
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(unref(_sfc_main$4$5), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$7$2), { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$2$1), {
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
                            createVNode(unref(_sfc_main$2$1), { disabled: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_Loader2, { class: "w-4 h-4 mr-2 animate-spin" }),
                                createTextVNode(" Updating.. ")
                              ]),
                              _: 1
                            })
                          ])) : (openBlock(), createBlock(unref(_sfc_main$2$1), {
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
              createVNode(unref(_sfc_main$9), { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_TooltipProvider, null, {
                    default: withCtx(() => [
                      createVNode(_component_Tooltip, null, {
                        default: withCtx(() => [
                          createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$2$1), {
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
                        createVNode(unref(_sfc_main$1$3), null, {
                          default: withCtx(() => [
                            createTextVNode("Edit Data Pembayaran Subkon")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "max-h-[60vh] overflow-y-auto pr-2 space-y-6" }, [
                      createVNode(unref(Field), { name: "idSubkon" }, {
                        default: withCtx(({ value }) => [
                          createVNode(unref(_sfc_main$2$2), { class: "flex flex-col" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$1$4), null, {
                                default: withCtx(() => [
                                  createTextVNode("Pilih Subkon")
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
                                          createVNode(unref(_sfc_main$2$1), {
                                            variant: "outline",
                                            role: "combobox",
                                            "aria-expanded": open.value,
                                            class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-between", !value && "text-muted-foreground")
                                          }, {
                                            default: withCtx(() => {
                                              var _a;
                                              return [
                                                createTextVNode(toDisplayString(value ? (_a = kontrakSubkonList.value.find((item) => item.id === value)) == null ? void 0 : _a.namaSubkon : "Select kontrakSubkon...") + " ", 1),
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
                                          createVNode(_component_CommandInput, { placeholder: "Search kontrakSubkon..." }),
                                          createVNode(_component_CommandEmpty, null, {
                                            default: withCtx(() => [
                                              createTextVNode("No Kontrak Subkon found.")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_CommandList, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_CommandGroup, null, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(kontrakSubkonList.value, (item) => {
                                                    return openBlock(), createBlock(_component_CommandItem, {
                                                      key: item.id,
                                                      value: item.namaSubkon,
                                                      onSelect: () => {
                                                        unref(setFieldValue)("idSubkon", item.id);
                                                        open.value = false;
                                                      }
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_Check, {
                                                          class: ("cn" in _ctx ? _ctx.cn : unref(cn))("mr-2 h-4 w-4", value === item.id ? "opacity-100" : "opacity-0")
                                                        }, null, 8, ["class"]),
                                                        createTextVNode(" " + toDisplayString(item.namaSubkon), 1)
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
                              createVNode(unref(_sfc_main$b))
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Field), { name: "tanggal" }, {
                        default: withCtx(({ field, value }) => [
                          createVNode(unref(_sfc_main$2$2), { class: "flex flex-col" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$1$4), null, {
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
                                          createVNode(unref(_sfc_main$2$1), {
                                            variant: "outline",
                                            class: ("cn" in _ctx ? _ctx.cn : unref(cn))("justify-start text-left font-normal", !value && "text-muted-foreground")
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
                              createVNode(unref(_sfc_main$b))
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("input", mergeProps({ type: "hidden" }, field), null, 16)
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Field), { name: "nilai" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(unref(_sfc_main$2$2), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$1$4), null, {
                                default: withCtx(() => [
                                  createTextVNode("Nilai / Jumlah Pembayaran")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$4$3), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$7), mergeProps({ type: "number" }, componentField), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$b))
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Field), { name: "keterangan" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(unref(_sfc_main$2$2), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$1$4), null, {
                                default: withCtx(() => [
                                  createTextVNode("Keterangan")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$4$3), null, {
                                default: withCtx(() => [
                                  createVNode(_component_Textarea, mergeProps({ type: "text" }, componentField), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$b))
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(unref(_sfc_main$4$5), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$7$2), { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$2$1), {
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
                          createVNode(unref(_sfc_main$2$1), { disabled: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_Loader2, { class: "w-4 h-4 mr-2 animate-spin" }),
                              createTextVNode(" Updating.. ")
                            ]),
                            _: 1
                          })
                        ])) : (openBlock(), createBlock(unref(_sfc_main$2$1), {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pembayaran-subkon/EditData.vue");
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
        const response = await fetch(`${baseUrl}/pembayaranSubkon`, {
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
    function handleDataDeleted(deletedItemId) {
      data.value = data.value.filter((item) => item.id !== deletedItemId);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = _sfc_main$5;
      const _component_CardHeader = _sfc_main$1$1;
      const _component_CardTitle = _sfc_main$6;
      const _component_Input = _sfc_main$7;
      const _component_CardContent = _sfc_main$4$1;
      const _component_Table = _sfc_main$7$1;
      const _component_TableHeader = _sfc_main$8;
      const _component_TableRow = _sfc_main$3$1;
      const _component_TableHead = _sfc_main$1$2;
      const _component_TableBody = _sfc_main$6$1;
      const _component_TableCell = _sfc_main$4$2;
      const _component_Button = _sfc_main$2$1;
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
                  _push3(ssrRenderComponent(_sfc_main$4, { onDataAdded: fetchData }, null, _parent3, _scopeId2));
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
                                          _push7(`Nama Pekerjaan`);
                                        } else {
                                          return [
                                            createTextVNode("Nama Pekerjaan")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_TableHead, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Nama Subkon/Kontrak`);
                                        } else {
                                          return [
                                            createTextVNode("Nama Subkon/Kontrak")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_TableHead, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`No Kontrak`);
                                        } else {
                                          return [
                                            createTextVNode("No Kontrak")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_TableHead, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Tanggal Pembayaran`);
                                        } else {
                                          return [
                                            createTextVNode("Tanggal Pembayaran")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_TableHead, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Nilai`);
                                        } else {
                                          return [
                                            createTextVNode("Nilai")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_TableHead, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Keterangan`);
                                        } else {
                                          return [
                                            createTextVNode("Keterangan")
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
                                          createTextVNode("Nama Pekerjaan")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Nama Subkon/Kontrak")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("No Kontrak")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Tanggal Pembayaran")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Nilai")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Keterangan")
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
                                        createTextVNode("Nama Pekerjaan")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Nama Subkon/Kontrak")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("No Kontrak")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Tanggal Pembayaran")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Nilai")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Keterangan")
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
                                            _push7(`${ssrInterpolate(item.namaSubkon)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.namaSubkon), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, { class: "font-medium" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.noKontrak)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.noKontrak), 1)
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
                                            _push7(`${ssrInterpolate(item.nilai)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.nilai), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, { class: "font-medium" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.keterangan)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.keterangan), 1)
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
                                              onDataEdited: handleDataEdited
                                            }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_sfc_main$3, {
                                              item,
                                              onDataDeleted: handleDataDeleted
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div>`);
                                          } else {
                                            return [
                                              createVNode("div", { class: "flex items-center justify-center gap-2" }, [
                                                createVNode(_sfc_main$2, {
                                                  id: item.id,
                                                  onDataEdited: handleDataEdited
                                                }, null, 8, ["id"]),
                                                createVNode(_sfc_main$3, {
                                                  item,
                                                  onDataDeleted: handleDataDeleted
                                                }, null, 8, ["item"])
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
                                            createTextVNode(toDisplayString(item.namaSubkon), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, { class: "font-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.noKontrak), 1)
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
                                            createTextVNode(toDisplayString(item.nilai), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, { class: "font-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.keterangan), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, { class: "text-right" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex items-center justify-center gap-2" }, [
                                              createVNode(_sfc_main$2, {
                                                id: item.id,
                                                onDataEdited: handleDataEdited
                                              }, null, 8, ["id"]),
                                              createVNode(_sfc_main$3, {
                                                item,
                                                onDataDeleted: handleDataDeleted
                                              }, null, 8, ["item"])
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
                                          createTextVNode(toDisplayString(item.namaSubkon), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, { class: "font-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.noKontrak), 1)
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
                                          createTextVNode(toDisplayString(item.nilai), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, { class: "font-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.keterangan), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "flex items-center justify-center gap-2" }, [
                                            createVNode(_sfc_main$2, {
                                              id: item.id,
                                              onDataEdited: handleDataEdited
                                            }, null, 8, ["id"]),
                                            createVNode(_sfc_main$3, {
                                              item,
                                              onDataDeleted: handleDataDeleted
                                            }, null, 8, ["item"])
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
                                      createTextVNode("Nama Pekerjaan")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Nama Subkon/Kontrak")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("No Kontrak")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Tanggal Pembayaran")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Nilai")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Keterangan")
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
                                        createTextVNode(toDisplayString(item.namaSubkon), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "font-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.noKontrak), 1)
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
                                        createTextVNode(toDisplayString(item.nilai), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "font-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.keterangan), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex items-center justify-center gap-2" }, [
                                          createVNode(_sfc_main$2, {
                                            id: item.id,
                                            onDataEdited: handleDataEdited
                                          }, null, 8, ["id"]),
                                          createVNode(_sfc_main$3, {
                                            item,
                                            onDataDeleted: handleDataDeleted
                                          }, null, 8, ["item"])
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
                    createVNode(_sfc_main$4, { onDataAdded: fetchData }),
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
                                      createTextVNode("Nama Pekerjaan")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Nama Subkon/Kontrak")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("No Kontrak")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Tanggal Pembayaran")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Nilai")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Keterangan")
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
                                        createTextVNode(toDisplayString(item.namaSubkon), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "font-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.noKontrak), 1)
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
                                        createTextVNode(toDisplayString(item.nilai), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "font-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.keterangan), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex items-center justify-center gap-2" }, [
                                          createVNode(_sfc_main$2, {
                                            id: item.id,
                                            onDataEdited: handleDataEdited
                                          }, null, 8, ["id"]),
                                          createVNode(_sfc_main$3, {
                                            item,
                                            onDataDeleted: handleDataDeleted
                                          }, null, 8, ["item"])
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
                  createVNode(_sfc_main$4, { onDataAdded: fetchData }),
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
                                    createTextVNode("Nama Pekerjaan")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Nama Subkon/Kontrak")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("No Kontrak")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Tanggal Pembayaran")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Nilai")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Keterangan")
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
                                      createTextVNode(toDisplayString(item.namaSubkon), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_TableCell, { class: "font-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.noKontrak), 1)
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
                                      createTextVNode(toDisplayString(item.nilai), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_TableCell, { class: "font-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.keterangan), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_TableCell, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex items-center justify-center gap-2" }, [
                                        createVNode(_sfc_main$2, {
                                          id: item.id,
                                          onDataEdited: handleDataEdited
                                        }, null, 8, ["id"]),
                                        createVNode(_sfc_main$3, {
                                          item,
                                          onDataDeleted: handleDataDeleted
                                        }, null, 8, ["item"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pembayaran-subkon/ListData.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "pembayaran-subkon",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col gap-4" }, _attrs))}><div class="flex flex-wrap items-center justify-between gap-2"><h2 class="text-2xl font-bold tracking-tight">Pembayaran Subkon</h2></div><div>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(mon-project)/pembayaran-subkon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=pembayaran-subkon-CBH6cVjv.mjs.map
