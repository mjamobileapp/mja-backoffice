import { defineComponent, mergeProps, ref, computed, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createCommentVNode, unref, withModifiers, resolveComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$5, a as _sfc_main$1$1, b as _sfc_main$6, c as _sfc_main$4$1 } from './CardTitle-C5Xy3z8Z.mjs';
import { _ as _sfc_main$7 } from './Input-CDkjoebz.mjs';
import { _ as _sfc_main$7$1, a as _sfc_main$8, b as _sfc_main$3$1, c as _sfc_main$1$2, d as _sfc_main$6$1, e as _sfc_main$4$2 } from './TableHeader-DPsbKB96.mjs';
import { d as useRuntimeConfig, e as useCookie, a as _sfc_main$2$1, t as toast } from './server.mjs';
import { _ as _sfc_main$2$2, a as _sfc_main$1$4, b as _sfc_main$4$3, d as _sfc_main$a } from './FormMessage-D5Wcp1o-.mjs';
import { useForm, Field } from 'vee-validate';
import { _ as _sfc_main$b } from './Textarea-U1r39FPM.mjs';
import { _ as _sfc_main$8$1, a as _sfc_main$9, b as _sfc_main$6$2, c as _sfc_main$3$2, d as _sfc_main$1$3, e as _sfc_main$4$4, f as _sfc_main$7$2 } from './DialogTrigger-BW6jyQ7n.mjs';
import { toTypedSchema } from '@vee-validate/zod';
import { Loader2, PencilIcon, TrashIcon } from 'lucide-vue-next';
import * as z from 'zod';
import { DateFormatter } from '@internationalized/date';
import { _ as _sfc_main$2$3, a as _sfc_main$d, b as _sfc_main$1$5 } from './TooltipTrigger-BcDIeLJj.mjs';
import { _ as _sfc_main$c } from './TooltipProvider-CFR98U-_.mjs';
import { _ as _sfc_main$8$2, a as _sfc_main$e, b as _sfc_main$5$1, c as _sfc_main$2$4, d as _sfc_main$1$6, e as _sfc_main$4$5, f as _sfc_main$3$3, g as _sfc_main$6$3, h as _sfc_main$7$3 } from './AlertDialogTrigger-DibbDHY2.mjs';
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
    new DateFormatter("en-US", {
      dateStyle: "long"
    });
    const profileFormSchema = toTypedSchema(
      z.object({
        namaBarang: z.string(),
        spesifikasi: z.string(),
        harga: z.number(),
        unit: z.string()
      })
    );
    ref("");
    const isSubmitting = ref(false);
    const { handleSubmit, resetForm, setFieldValue } = useForm({
      validationSchema: profileFormSchema
    });
    const isDialogOpen = ref(false);
    function openDialog() {
      isDialogOpen.value = true;
    }
    function closeDialog() {
      isDialogOpen.value = false;
      resetForm();
    }
    const accessToken = useCookie("accessToken");
    const token = accessToken.value.token;
    const onSubmit = handleSubmit(async (values) => {
      isSubmitting.value = true;
      const dataForm = {
        namaBarang: values.namaBarang,
        spesifikasi: values.spesifikasi,
        harga: values.harga,
        unit: values.unit,
        createdBy: username.value,
        createdDate: /* @__PURE__ */ new Date()
      };
      isDialogOpen.value = false;
      console.log(JSON.stringify(dataForm));
      try {
        const response = await fetch(`${baseUrl}/masterReferensiBarang`, {
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
          console.log("[AddData] Emitting dataAdded...");
          emit("dataAdded");
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
      const _component_FormControl = _sfc_main$4$3;
      const _component_FormMessage = _sfc_main$a;
      const _component_Textarea = _sfc_main$b;
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
                              _push5(`Add Referensi Barang`);
                            } else {
                              return [
                                createTextVNode("Add Referensi Barang")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$1$3), null, {
                            default: withCtx(() => [
                              createTextVNode("Add Referensi Barang")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="max-h-[60vh] overflow-y-auto pr-4 space-y-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_FormField, { name: "namaBarang" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormItem, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormLabel, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Nama Barang`);
                                  } else {
                                    return [
                                      createTextVNode("Nama Barang")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormControl, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$7), mergeProps({ type: "text" }, componentField), null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$7), mergeProps({ type: "text" }, componentField), null, 16)
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
                                    createTextVNode("Nama Barang")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$7), mergeProps({ type: "text" }, componentField), null, 16)
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
                                  createTextVNode("Nama Barang")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$7), mergeProps({ type: "text" }, componentField), null, 16)
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
                  _push3(ssrRenderComponent(_component_FormField, { name: "spesifikasi" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormItem, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormLabel, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Spesifikasi`);
                                  } else {
                                    return [
                                      createTextVNode("Spesifikasi")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormControl, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$7), mergeProps({ type: "text" }, componentField), null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$7), mergeProps({ type: "text" }, componentField), null, 16)
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
                                    createTextVNode("Spesifikasi")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$7), mergeProps({ type: "text" }, componentField), null, 16)
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
                                  createTextVNode("Spesifikasi")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$7), mergeProps({ type: "text" }, componentField), null, 16)
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
                  _push3(ssrRenderComponent(_component_FormField, { name: "harga" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormItem, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormLabel, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Harga`);
                                  } else {
                                    return [
                                      createTextVNode("Harga")
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
                                    createTextVNode("Harga")
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
                                  createTextVNode("Harga")
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
                  _push3(ssrRenderComponent(_component_FormField, { name: "unit" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormItem, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormLabel, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Unit`);
                                  } else {
                                    return [
                                      createTextVNode("Unit")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormControl, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Textarea, mergeProps(componentField, { class: "min-h-[80px]" }), null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_Textarea, mergeProps(componentField, { class: "min-h-[80px]" }), null, 16)
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
                                    createTextVNode("Unit")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Textarea, mergeProps(componentField, { class: "min-h-[80px]" }), null, 16)
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
                                  createTextVNode("Unit")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Textarea, mergeProps(componentField, { class: "min-h-[80px]" }), null, 16)
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
                  _push3(ssrRenderComponent(unref(_sfc_main$4$4), null, {
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
                          _push4(`</span>`);
                        } else {
                          _push4(ssrRenderComponent(unref(_sfc_main$2$1), { type: "submit" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Save `);
                              } else {
                                return [
                                  createTextVNode("Save ")
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
                                createVNode(unref(Loader2), { class: "w-4 h-4 mr-2 animate-spin" }),
                                createTextVNode(" Saving.. ")
                              ]),
                              _: 1
                            })
                          ])) : (openBlock(), createBlock(unref(_sfc_main$2$1), {
                            key: 1,
                            type: "submit"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Save ")
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
                              createTextVNode("Add Referensi Barang")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "max-h-[60vh] overflow-y-auto pr-4 space-y-6" }, [
                        createVNode(_component_FormField, { name: "namaBarang" }, {
                          default: withCtx(({ componentField }) => [
                            createVNode(_component_FormItem, null, {
                              default: withCtx(() => [
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Nama Barang")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$7), mergeProps({ type: "text" }, componentField), null, 16)
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
                        createVNode(_component_FormField, { name: "spesifikasi" }, {
                          default: withCtx(({ componentField }) => [
                            createVNode(_component_FormItem, null, {
                              default: withCtx(() => [
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Spesifikasi")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$7), mergeProps({ type: "text" }, componentField), null, 16)
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
                        createVNode(_component_FormField, { name: "harga" }, {
                          default: withCtx(({ componentField }) => [
                            createVNode(_component_FormItem, null, {
                              default: withCtx(() => [
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Harga")
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
                        createVNode(_component_FormField, { name: "unit" }, {
                          default: withCtx(({ componentField }) => [
                            createVNode(_component_FormItem, null, {
                              default: withCtx(() => [
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Unit")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Textarea, mergeProps(componentField, { class: "min-h-[80px]" }), null, 16)
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
                      createVNode(unref(_sfc_main$4$4), null, {
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
                                createVNode(unref(Loader2), { class: "w-4 h-4 mr-2 animate-spin" }),
                                createTextVNode(" Saving.. ")
                              ]),
                              _: 1
                            })
                          ])) : (openBlock(), createBlock(unref(_sfc_main$2$1), {
                            key: 1,
                            type: "submit"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Save ")
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
                            createTextVNode("Add Referensi Barang")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "max-h-[60vh] overflow-y-auto pr-4 space-y-6" }, [
                      createVNode(_component_FormField, { name: "namaBarang" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(_component_FormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Nama Barang")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$7), mergeProps({ type: "text" }, componentField), null, 16)
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
                      createVNode(_component_FormField, { name: "spesifikasi" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(_component_FormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Spesifikasi")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$7), mergeProps({ type: "text" }, componentField), null, 16)
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
                      createVNode(_component_FormField, { name: "harga" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(_component_FormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Harga")
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
                      createVNode(_component_FormField, { name: "unit" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(_component_FormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Unit")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Textarea, mergeProps(componentField, { class: "min-h-[80px]" }), null, 16)
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
                    createVNode(unref(_sfc_main$4$4), null, {
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
                              createVNode(unref(Loader2), { class: "w-4 h-4 mr-2 animate-spin" }),
                              createTextVNode(" Saving.. ")
                            ]),
                            _: 1
                          })
                        ])) : (openBlock(), createBlock(unref(_sfc_main$2$1), {
                          key: 1,
                          type: "submit"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Save ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/referensi-barang/AddData.vue");
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
        const response = await fetch(`${baseUrl}/masterReferensiBarang/${props.item.id}`, {
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
      const _component_TooltipProvider = _sfc_main$c;
      const _component_Tooltip = _sfc_main$2$3;
      const _component_TooltipTrigger = _sfc_main$d;
      const _component_Button = _sfc_main$2$1;
      const _component_TooltipContent = _sfc_main$1$5;
      _push(ssrRenderComponent(unref(_sfc_main$8$2), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$e), null, {
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
            _push2(ssrRenderComponent(unref(_sfc_main$5$1), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$2$4), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$1$6), null, {
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
                        _push4(ssrRenderComponent(unref(_sfc_main$4$5), null, {
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
                          createVNode(unref(_sfc_main$1$6), null, {
                            default: withCtx(() => [
                              createTextVNode("Apakah anda yakin menghapus data ini? ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$4$5), null, {
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
                  _push3(ssrRenderComponent(unref(_sfc_main$3$3), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$6$3), null, {
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
                          createVNode(unref(_sfc_main$6$3), null, {
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
                    createVNode(unref(_sfc_main$2$4), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$1$6), null, {
                          default: withCtx(() => [
                            createTextVNode("Apakah anda yakin menghapus data ini? ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$4$5), null, {
                          default: withCtx(() => [
                            createTextVNode(" data yg dihapus tidak bisa dikembalikan kembali, jadi pastikan anda yakin untuk menghapus data ini. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$3$3), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$6$3), null, {
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
              createVNode(unref(_sfc_main$e), null, {
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
              createVNode(unref(_sfc_main$5$1), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$2$4), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$1$6), null, {
                        default: withCtx(() => [
                          createTextVNode("Apakah anda yakin menghapus data ini? ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$4$5), null, {
                        default: withCtx(() => [
                          createTextVNode(" data yg dihapus tidak bisa dikembalikan kembali, jadi pastikan anda yakin untuk menghapus data ini. ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$3$3), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$6$3), null, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/referensi-barang/DeleteData.vue");
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
    new DateFormatter("en-US", {
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
        namaBarang: z.string(),
        spesifikasi: z.string(),
        harga: z.number(),
        unit: z.string()
      })
    );
    const { handleSubmit, resetForm, setValues, values } = useForm({
      validationSchema: profileFormSchema,
      initialValues: {
        namaBarang: "",
        spesifikasi: "",
        harga: 0,
        unit: ""
      }
    });
    const isDialogOpen = ref(false);
    async function fetchData() {
      try {
        const response = await fetch(`${baseUrl}/masterReferensiBarang/${props.id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.ok) {
          const { data } = await response.json();
          console.log(data);
          const hargaNumber = parseFloat(data.harga);
          setValues({
            namaBarang: data.namaBarang,
            spesifikasi: data.spesifikasi,
            // Kirim sebagai number agar validasi Zod/VeeValidate 'number' berhasil
            harga: hargaNumber,
            unit: data.unit
          });
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
    }
    function closeDialog() {
      isDialogOpen.value = false;
      resetForm();
    }
    const isSubmitting = ref(false);
    const accessToken = useCookie("accessToken");
    const token = accessToken.value.token;
    const onSubmit = handleSubmit(async () => {
      isSubmitting.value = true;
      try {
        const dataForm = {
          namaBarang: values.namaBarang,
          spesifikasi: values.spesifikasi,
          harga: values.harga,
          unit: values.unit,
          createdBy: username.value,
          createdDate: /* @__PURE__ */ new Date()
        };
        console.log(JSON.stringify(dataForm));
        const response = await fetch(`${baseUrl}/masterReferensiBarang/${props.id}`, {
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
      const _component_TooltipProvider = _sfc_main$c;
      const _component_Tooltip = _sfc_main$2$3;
      const _component_TooltipTrigger = _sfc_main$d;
      const _component_TooltipContent = _sfc_main$1$5;
      const _component_Textarea = _sfc_main$b;
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
                              _push5(`Edit Data masterReferensiBarang`);
                            } else {
                              return [
                                createTextVNode("Edit Data masterReferensiBarang")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$1$3), null, {
                            default: withCtx(() => [
                              createTextVNode("Edit Data masterReferensiBarang")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="max-h-[60vh] overflow-y-auto pr-4 space-y-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "namaBarang" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2$2), null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$1$4), null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Nama Barang`);
                                  } else {
                                    return [
                                      createTextVNode("Nama Barang")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$4$3), null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$7), mergeProps({ type: "text" }, componentField), null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$7), mergeProps({ type: "text" }, componentField), null, 16)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$a), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$1$4), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Nama Barang")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4$3), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$7), mergeProps({ type: "text" }, componentField), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$a))
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
                                  createTextVNode("Nama Barang")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$4$3), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$7), mergeProps({ type: "text" }, componentField), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$a))
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Field), { name: "spesifikasi" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2$2), null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$1$4), null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Spesifikasi`);
                                  } else {
                                    return [
                                      createTextVNode("Spesifikasi")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$4$3), null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$7), mergeProps({ type: "text" }, componentField), null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$7), mergeProps({ type: "text" }, componentField), null, 16)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$a), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$1$4), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Spesifikasi")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4$3), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$7), mergeProps({ type: "text" }, componentField), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$a))
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
                                  createTextVNode("Spesifikasi")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$4$3), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$7), mergeProps({ type: "text" }, componentField), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$a))
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Field), { name: "harga" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2$2), null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$1$4), null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Harga`);
                                  } else {
                                    return [
                                      createTextVNode("Harga")
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
                              _push5(ssrRenderComponent(unref(_sfc_main$a), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$1$4), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Harga")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4$3), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$7), mergeProps({ type: "number" }, componentField), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$a))
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
                                  createTextVNode("Harga")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$4$3), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$7), mergeProps({ type: "number" }, componentField), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$a))
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Field), { name: "unit" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2$2), null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$1$4), null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Unit`);
                                  } else {
                                    return [
                                      createTextVNode("Unit")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$4$3), null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Textarea, mergeProps(componentField, { class: "min-h-[80px]" }), null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_Textarea, mergeProps(componentField, { class: "min-h-[80px]" }), null, 16)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$a), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$1$4), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Unit")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4$3), null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Textarea, mergeProps(componentField, { class: "min-h-[80px]" }), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$a))
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
                                  createTextVNode("Unit")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$4$3), null, {
                                default: withCtx(() => [
                                  createVNode(_component_Textarea, mergeProps(componentField, { class: "min-h-[80px]" }), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$a))
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$4$4), null, {
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
                              createTextVNode("Edit Data masterReferensiBarang")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "max-h-[60vh] overflow-y-auto pr-4 space-y-6" }, [
                        createVNode(unref(Field), { name: "namaBarang" }, {
                          default: withCtx(({ componentField }) => [
                            createVNode(unref(_sfc_main$2$2), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$1$4), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Nama Barang")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4$3), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$7), mergeProps({ type: "text" }, componentField), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$a))
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), { name: "spesifikasi" }, {
                          default: withCtx(({ componentField }) => [
                            createVNode(unref(_sfc_main$2$2), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$1$4), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Spesifikasi")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4$3), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$7), mergeProps({ type: "text" }, componentField), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$a))
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), { name: "harga" }, {
                          default: withCtx(({ componentField }) => [
                            createVNode(unref(_sfc_main$2$2), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$1$4), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Harga")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4$3), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$7), mergeProps({ type: "number" }, componentField), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$a))
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), { name: "unit" }, {
                          default: withCtx(({ componentField }) => [
                            createVNode(unref(_sfc_main$2$2), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$1$4), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Unit")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4$3), null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Textarea, mergeProps(componentField, { class: "min-h-[80px]" }), null, 16)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$a))
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(unref(_sfc_main$4$4), null, {
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
                            createTextVNode("Edit Data masterReferensiBarang")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "max-h-[60vh] overflow-y-auto pr-4 space-y-6" }, [
                      createVNode(unref(Field), { name: "namaBarang" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(unref(_sfc_main$2$2), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$1$4), null, {
                                default: withCtx(() => [
                                  createTextVNode("Nama Barang")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$4$3), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$7), mergeProps({ type: "text" }, componentField), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$a))
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Field), { name: "spesifikasi" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(unref(_sfc_main$2$2), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$1$4), null, {
                                default: withCtx(() => [
                                  createTextVNode("Spesifikasi")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$4$3), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$7), mergeProps({ type: "text" }, componentField), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$a))
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Field), { name: "harga" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(unref(_sfc_main$2$2), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$1$4), null, {
                                default: withCtx(() => [
                                  createTextVNode("Harga")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$4$3), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$7), mergeProps({ type: "number" }, componentField), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$a))
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Field), { name: "unit" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(unref(_sfc_main$2$2), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$1$4), null, {
                                default: withCtx(() => [
                                  createTextVNode("Unit")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$4$3), null, {
                                default: withCtx(() => [
                                  createVNode(_component_Textarea, mergeProps(componentField, { class: "min-h-[80px]" }), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$a))
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(unref(_sfc_main$4$4), null, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/referensi-barang/EditData.vue");
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
        (item) => item.namaBarang.toLowerCase().includes(searchQuery.value.toLowerCase())
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
    const accessToken = useCookie("accessToken");
    const token = accessToken.value.token;
    async function fetchData() {
      isLoading.value = true;
      try {
        const timestamp = (/* @__PURE__ */ new Date()).getTime();
        const response = await fetch(`${baseUrl}/masterReferensiBarang`, {
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
    const editItem = ref(null);
    function handleDataEdited(editedItem) {
      console.log(editItem);
      const index = data.value.findIndex((item) => item.id === editedItem.id);
      if (index !== -1) {
        data.value[index] = editedItem;
      }
      editItem.value = null;
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
                                          _push7(`Nama Barang`);
                                        } else {
                                          return [
                                            createTextVNode("Nama Barang")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_TableHead, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Spesifikasi`);
                                        } else {
                                          return [
                                            createTextVNode("Spesifikasi")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_TableHead, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Harga`);
                                        } else {
                                          return [
                                            createTextVNode("Harga")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_TableHead, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Unit`);
                                        } else {
                                          return [
                                            createTextVNode("Unit")
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
                                          createTextVNode("Nama Barang")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Spesifikasi")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Harga")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Unit")
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
                                        createTextVNode("Nama Barang")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Spesifikasi")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Harga")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Unit")
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
                                            _push7(`${ssrInterpolate(item.namaBarang)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.namaBarang), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, { class: "font-medium" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.spesifikasi)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.spesifikasi), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, { class: "font-medium" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.harga)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.harga), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, { class: "font-medium" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.unit)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.unit), 1)
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
                                            createTextVNode(toDisplayString(item.namaBarang), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, { class: "font-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.spesifikasi), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, { class: "font-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.harga), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, { class: "font-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.unit), 1)
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
                                          createTextVNode(toDisplayString(item.namaBarang), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, { class: "font-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.spesifikasi), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, { class: "font-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.harga), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, { class: "font-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.unit), 1)
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
                                      createTextVNode("Nama Barang")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Spesifikasi")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Harga")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Unit")
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
                                        createTextVNode(toDisplayString(item.namaBarang), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "font-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.spesifikasi), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "font-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.harga), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "font-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.unit), 1)
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
                                      createTextVNode("Nama Barang")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Spesifikasi")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Harga")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Unit")
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
                                        createTextVNode(toDisplayString(item.namaBarang), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "font-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.spesifikasi), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "font-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.harga), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "font-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.unit), 1)
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
                                    createTextVNode("Nama Barang")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Spesifikasi")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Harga")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Unit")
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
                                      createTextVNode(toDisplayString(item.namaBarang), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_TableCell, { class: "font-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.spesifikasi), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_TableCell, { class: "font-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.harga), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_TableCell, { class: "font-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.unit), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/referensi-barang/ListData.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "referensi-barang",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col gap-4" }, _attrs))}><div class="flex flex-wrap items-center justify-between gap-2"><h2 class="text-2xl font-bold tracking-tight">Master Referensi Barang</h2></div><div>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(mon-project)/referensi-barang.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=referensi-barang-DG8MEtP2.mjs.map
