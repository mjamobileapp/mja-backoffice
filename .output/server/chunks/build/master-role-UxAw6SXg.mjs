import { defineComponent, mergeProps, ref, computed, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createCommentVNode, resolveComponent, unref, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$5$1, a as _sfc_main$1$1, b as _sfc_main$6, c as _sfc_main$4$1 } from './CardTitle-C5Xy3z8Z.mjs';
import { _ as _sfc_main$7 } from './Input-CDkjoebz.mjs';
import { _ as _sfc_main$7$1, a as _sfc_main$8, b as _sfc_main$3$1, c as _sfc_main$1$2, d as _sfc_main$6$1, e as _sfc_main$4$2 } from './TableHeader-DPsbKB96.mjs';
import { d as useRuntimeConfig, e as useCookie, a as _sfc_main$2$1, t as toast } from './server.mjs';
import { _ as _sfc_main$2$2, a as _sfc_main$1$4, b as _sfc_main$4$3, d as _sfc_main$a } from './FormMessage-D5Wcp1o-.mjs';
import { useForm, Field } from 'vee-validate';
import { _ as _sfc_main$b } from './Textarea-U1r39FPM.mjs';
import { _ as _sfc_main$8$1, a as _sfc_main$9, b as _sfc_main$6$2, c as _sfc_main$3$2, d as _sfc_main$1$3, e as _sfc_main$4$4, f as _sfc_main$7$2 } from './DialogTrigger-BW6jyQ7n.mjs';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { ScanEyeIcon, PencilIcon, TrashIcon } from 'lucide-vue-next';
import { _ as _sfc_main$8$2, a as _sfc_main$d, b as _sfc_main$5$2, c as _sfc_main$2$3, d as _sfc_main$1$5, e as _sfc_main$4$5, f as _sfc_main$3$3, g as _sfc_main$6$3, h as _sfc_main$7$3 } from './AlertDialogTrigger-DibbDHY2.mjs';
import { _ as _sfc_main$c } from './Checkbox-DuA9XWkc.mjs';
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
import './Label-BBvFeqSn.mjs';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "AddData",
  __ssrInlineRender: true,
  emits: ["dataAdded"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const config = useRuntimeConfig();
    const baseUrl = config.public.apiBase;
    const accessToken = useCookie("accessToken");
    const token = accessToken.value.token;
    const formSchema = toTypedSchema(
      z.object({
        namaRole: z.string().min(2).max(50),
        description: z.string().min(2).max(200)
      })
    );
    const { handleSubmit, resetForm } = useForm({
      validationSchema: formSchema
    });
    const isDialogOpen = ref(false);
    function openDialog() {
      isDialogOpen.value = true;
    }
    function closeDialog() {
      isDialogOpen.value = false;
      resetForm();
    }
    const currentUser = useCookie("currentUser");
    const email = computed(() => {
      var _a;
      return ((_a = currentUser.value) == null ? void 0 : _a.email) || "no-email@example.com";
    });
    const isSubmitting = ref(false);
    const onSubmit = handleSubmit(async (values) => {
      isSubmitting.value = true;
      const dataForm = {
        namaRole: values.namaRole,
        description: values.description,
        createdBy: email.value,
        createdDate: /* @__PURE__ */ new Date()
      };
      isDialogOpen.value = false;
      try {
        const response = await fetch(`${baseUrl}/roles`, {
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
          setTimeout(() => {
            emit("dataAdded");
            isDialogOpen.value = false;
            resetForm();
          }, 300);
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
      const _component_DialogClose = _sfc_main$7$2;
      const _component_Loader2 = resolveComponent("Loader2");
      _push(ssrRenderComponent(unref(_sfc_main$8$1), mergeProps({
        open: unref(isDialogOpen),
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
                  _push3(ssrRenderComponent(unref(_sfc_main$3$2), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$1$3), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Add Data Master Role`);
                            } else {
                              return [
                                createTextVNode("Add Data Master Role")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$1$3), null, {
                            default: withCtx(() => [
                              createTextVNode("Add Data Master Role")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<form class="space-y-5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_FormField, { name: "namaRole" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormItem, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormLabel, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Nama Role`);
                                  } else {
                                    return [
                                      createTextVNode("Nama Role")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormControl, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$7), mergeProps({
                                      type: "text",
                                      placeholder: "Nama Role"
                                    }, componentField), null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$7), mergeProps({
                                        type: "text",
                                        placeholder: "Nama Role"
                                      }, componentField), null, 16)
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
                                    createTextVNode("Nama Role")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$7), mergeProps({
                                      type: "text",
                                      placeholder: "Nama Role"
                                    }, componentField), null, 16)
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
                                  createTextVNode("Nama Role")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$7), mergeProps({
                                    type: "text",
                                    placeholder: "Nama Role"
                                  }, componentField), null, 16)
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
                  _push3(ssrRenderComponent(_component_FormField, { name: "description" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormItem, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormLabel, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Deskripsi`);
                                  } else {
                                    return [
                                      createTextVNode("Deskripsi")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormControl, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Textarea, mergeProps({ placeholder: "deskripsi" }, componentField, { cols: "5" }), null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_Textarea, mergeProps({ placeholder: "deskripsi" }, componentField, { cols: "5" }), null, 16)
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
                                    createTextVNode("Deskripsi")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Textarea, mergeProps({ placeholder: "deskripsi" }, componentField, { cols: "5" }), null, 16)
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
                                  createTextVNode("Deskripsi")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Textarea, mergeProps({ placeholder: "deskripsi" }, componentField, { cols: "5" }), null, 16)
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
                  _push3(ssrRenderComponent(unref(_sfc_main$4$4), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogClose, { "as-child": "" }, {
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
                        if (unref(isSubmitting)) {
                          _push4(`<span${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$2$1), { disabled: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Loader2, { class: "w-4 h-4 mr-2 animate-spin" }, null, _parent5, _scopeId4));
                                _push5(` Saving.. `);
                              } else {
                                return [
                                  createVNode(_component_Loader2, { class: "w-4 h-4 mr-2 animate-spin" }),
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
                          createVNode(_component_DialogClose, { "as-child": "" }, {
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
                          unref(isSubmitting) ? (openBlock(), createBlock("span", { key: 0 }, [
                            createVNode(unref(_sfc_main$2$1), { disabled: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_Loader2, { class: "w-4 h-4 mr-2 animate-spin" }),
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
                    createVNode(unref(_sfc_main$3$2), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$1$3), null, {
                          default: withCtx(() => [
                            createTextVNode("Add Data Master Role")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("form", {
                      class: "space-y-5",
                      onSubmit: unref(onSubmit)
                    }, [
                      createVNode(_component_FormField, { name: "namaRole" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(_component_FormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Nama Role")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$7), mergeProps({
                                    type: "text",
                                    placeholder: "Nama Role"
                                  }, componentField), null, 16)
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
                      createVNode(_component_FormField, { name: "description" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(_component_FormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Deskripsi")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Textarea, mergeProps({ placeholder: "deskripsi" }, componentField, { cols: "5" }), null, 16)
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
                      createVNode(unref(_sfc_main$4$4), null, {
                        default: withCtx(() => [
                          createVNode(_component_DialogClose, { "as-child": "" }, {
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
                          unref(isSubmitting) ? (openBlock(), createBlock("span", { key: 0 }, [
                            createVNode(unref(_sfc_main$2$1), { disabled: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_Loader2, { class: "w-4 h-4 mr-2 animate-spin" }),
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
                  createVNode(unref(_sfc_main$3$2), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$1$3), null, {
                        default: withCtx(() => [
                          createTextVNode("Add Data Master Role")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("form", {
                    class: "space-y-5",
                    onSubmit: unref(onSubmit)
                  }, [
                    createVNode(_component_FormField, { name: "namaRole" }, {
                      default: withCtx(({ componentField }) => [
                        createVNode(_component_FormItem, null, {
                          default: withCtx(() => [
                            createVNode(_component_FormLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("Nama Role")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_FormControl, null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$7), mergeProps({
                                  type: "text",
                                  placeholder: "Nama Role"
                                }, componentField), null, 16)
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
                    createVNode(_component_FormField, { name: "description" }, {
                      default: withCtx(({ componentField }) => [
                        createVNode(_component_FormItem, null, {
                          default: withCtx(() => [
                            createVNode(_component_FormLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("Deskripsi")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_FormControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_Textarea, mergeProps({ placeholder: "deskripsi" }, componentField, { cols: "5" }), null, 16)
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
                    createVNode(unref(_sfc_main$4$4), null, {
                      default: withCtx(() => [
                        createVNode(_component_DialogClose, { "as-child": "" }, {
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
                        unref(isSubmitting) ? (openBlock(), createBlock("span", { key: 0 }, [
                          createVNode(unref(_sfc_main$2$1), { disabled: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_Loader2, { class: "w-4 h-4 mr-2 animate-spin" }),
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/master-role/AddData.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "EditData",
  __ssrInlineRender: true,
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  emits: ["dataUpdated"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const config = useRuntimeConfig();
    const baseUrl = config.public.apiBase;
    const accessToken = useCookie("accessToken");
    const token = accessToken.value.token;
    const formSchema = toTypedSchema(
      z.object({
        namaRole: z.string().min(2).max(50),
        description: z.string().min(2).max(200)
      })
    );
    const { handleSubmit, resetForm, setValues } = useForm({
      validationSchema: formSchema
    });
    const isDialogOpen = ref(false);
    const isLoading = ref(false);
    async function openDialog() {
      isDialogOpen.value = true;
      await fetchData();
    }
    function closeDialog() {
      isDialogOpen.value = false;
      resetForm();
    }
    async function fetchData() {
      try {
        isLoading.value = true;
        const response = await fetch(`${baseUrl}/roles/${props.id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const res = await response.json();
        setValues({
          namaRole: res.data.namaRole,
          description: res.data.description
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        toast({
          title: "Error",
          description: "Gagal mengambil data."
        });
        closeDialog();
      } finally {
        isLoading.value = false;
      }
    }
    const currentUser = useCookie("currentUser");
    const email = computed(() => {
      var _a;
      return ((_a = currentUser.value) == null ? void 0 : _a.email) || "no-email@example.com";
    });
    const isSubmitting = ref(false);
    const onSubmit = handleSubmit(async (values) => {
      isSubmitting.value = true;
      const dataForm = {
        namaRole: values.namaRole,
        description: values.description,
        createdBy: email.value,
        createdDate: /* @__PURE__ */ new Date()
      };
      try {
        const response = await fetch(`${baseUrl}/roles/${props.id}`, {
          method: "PUT",
          // atau PATCH
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(dataForm)
        });
        if (response.ok) {
          toast({
            title: "Success",
            description: "Data berhasil diperbarui."
          });
          setTimeout(() => {
            emit("dataUpdated");
            isDialogOpen.value = false;
            resetForm();
          }, 300);
        } else {
          toast({
            title: "Error",
            description: "Gagal memperbarui data. Silakan coba lagi."
          });
        }
      } catch (error) {
        console.error("Error updating data:", error);
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
      const _component_Loader2 = resolveComponent("Loader2");
      _push(ssrRenderComponent(unref(_sfc_main$8$1), mergeProps({
        open: unref(isDialogOpen),
        onOpenChange: ($event) => isDialogOpen.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$9), { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$2$1), {
                    class: "mr-2",
                    onClick: openDialog
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(PencilIcon), { class: "w-4 h-4 mr-2" }, null, _parent4, _scopeId3));
                        _push4(` Edit Data`);
                      } else {
                        return [
                          createVNode(unref(PencilIcon), { class: "w-4 h-4 mr-2" }),
                          createTextVNode(" Edit Data")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$2$1), {
                      class: "mr-2",
                      onClick: openDialog
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(PencilIcon), { class: "w-4 h-4 mr-2" }),
                        createTextVNode(" Edit Data")
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
                  _push3(ssrRenderComponent(unref(_sfc_main$3$2), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$1$3), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Edit Data Master Role`);
                            } else {
                              return [
                                createTextVNode("Edit Data Master Role")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$1$3), null, {
                            default: withCtx(() => [
                              createTextVNode("Edit Data Master Role")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (!unref(isLoading)) {
                    _push3(`<form class="space-y-5"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_FormField, { name: "namaRole" }, {
                      default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_FormItem, null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_FormLabel, null, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`Nama Role`);
                                    } else {
                                      return [
                                        createTextVNode("Nama Role")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_FormControl, null, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(_sfc_main$7), mergeProps({
                                        type: "text",
                                        placeholder: "Nama Role"
                                      }, componentField), null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(_sfc_main$7), mergeProps({
                                          type: "text",
                                          placeholder: "Nama Role"
                                        }, componentField), null, 16)
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
                                      createTextVNode("Nama Role")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_FormControl, null, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$7), mergeProps({
                                        type: "text",
                                        placeholder: "Nama Role"
                                      }, componentField), null, 16)
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
                                    createTextVNode("Nama Role")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$7), mergeProps({
                                      type: "text",
                                      placeholder: "Nama Role"
                                    }, componentField), null, 16)
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
                    _push3(ssrRenderComponent(_component_FormField, { name: "description" }, {
                      default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_FormItem, null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_FormLabel, null, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`Deskripsi`);
                                    } else {
                                      return [
                                        createTextVNode("Deskripsi")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_FormControl, null, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_Textarea, mergeProps({ placeholder: "Deskripsi" }, componentField, { cols: "5" }), null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_Textarea, mergeProps({ placeholder: "Deskripsi" }, componentField, { cols: "5" }), null, 16)
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
                                      createTextVNode("Deskripsi")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_FormControl, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Textarea, mergeProps({ placeholder: "Deskripsi" }, componentField, { cols: "5" }), null, 16)
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
                                    createTextVNode("Deskripsi")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Textarea, mergeProps({ placeholder: "Deskripsi" }, componentField, { cols: "5" }), null, 16)
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
                          if (unref(isSubmitting)) {
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
                            unref(isSubmitting) ? (openBlock(), createBlock("span", { key: 0 }, [
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
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(unref(_sfc_main$3$2), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$1$3), null, {
                          default: withCtx(() => [
                            createTextVNode("Edit Data Master Role")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    !unref(isLoading) ? (openBlock(), createBlock("form", {
                      key: 0,
                      class: "space-y-5",
                      onSubmit: unref(onSubmit)
                    }, [
                      createVNode(_component_FormField, { name: "namaRole" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(_component_FormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Nama Role")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$7), mergeProps({
                                    type: "text",
                                    placeholder: "Nama Role"
                                  }, componentField), null, 16)
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
                      createVNode(_component_FormField, { name: "description" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(_component_FormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Deskripsi")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Textarea, mergeProps({ placeholder: "Deskripsi" }, componentField, { cols: "5" }), null, 16)
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
                          unref(isSubmitting) ? (openBlock(), createBlock("span", { key: 0 }, [
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
                    ], 40, ["onSubmit"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$9), { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$2$1), {
                    class: "mr-2",
                    onClick: openDialog
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(PencilIcon), { class: "w-4 h-4 mr-2" }),
                      createTextVNode(" Edit Data")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$6$2), { class: "sm:max-w-[800px] [&>button]:hidden" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$3$2), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$1$3), null, {
                        default: withCtx(() => [
                          createTextVNode("Edit Data Master Role")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  !unref(isLoading) ? (openBlock(), createBlock("form", {
                    key: 0,
                    class: "space-y-5",
                    onSubmit: unref(onSubmit)
                  }, [
                    createVNode(_component_FormField, { name: "namaRole" }, {
                      default: withCtx(({ componentField }) => [
                        createVNode(_component_FormItem, null, {
                          default: withCtx(() => [
                            createVNode(_component_FormLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("Nama Role")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_FormControl, null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$7), mergeProps({
                                  type: "text",
                                  placeholder: "Nama Role"
                                }, componentField), null, 16)
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
                    createVNode(_component_FormField, { name: "description" }, {
                      default: withCtx(({ componentField }) => [
                        createVNode(_component_FormItem, null, {
                          default: withCtx(() => [
                            createVNode(_component_FormLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("Deskripsi")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_FormControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_Textarea, mergeProps({ placeholder: "Deskripsi" }, componentField, { cols: "5" }), null, 16)
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
                        unref(isSubmitting) ? (openBlock(), createBlock("span", { key: 0 }, [
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
                  ], 40, ["onSubmit"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/master-role/EditData.vue");
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
        const response = await fetch(`${baseUrl}/roles/${props.item.id}`, {
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
          console.log(errorData);
          const message = (errorData == null ? void 0 : errorData.serverMessage) || "Gagal Menghapus Data";
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
      const _component_Button = _sfc_main$2$1;
      _push(ssrRenderComponent(unref(_sfc_main$8$2), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$d), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(TrashIcon), { class: "w-4 h-4 mr-2" }, null, _parent4, _scopeId3));
                        _push4(` Delete Data `);
                      } else {
                        return [
                          createVNode(unref(TrashIcon), { class: "w-4 h-4 mr-2" }),
                          createTextVNode(" Delete Data ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, null, {
                      default: withCtx(() => [
                        createVNode(unref(TrashIcon), { class: "w-4 h-4 mr-2" }),
                        createTextVNode(" Delete Data ")
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
                  _push3(ssrRenderComponent(unref(_sfc_main$2$3), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$1$5), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Apakah anda yakin menghapus data ${ssrInterpolate(props.item.namaRole)}? `);
                            } else {
                              return [
                                createTextVNode("Apakah anda yakin menghapus data " + toDisplayString(props.item.namaRole) + "? ", 1)
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
                          createVNode(unref(_sfc_main$1$5), null, {
                            default: withCtx(() => [
                              createTextVNode("Apakah anda yakin menghapus data " + toDisplayString(props.item.namaRole) + "? ", 1)
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
                    createVNode(unref(_sfc_main$2$3), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$1$5), null, {
                          default: withCtx(() => [
                            createTextVNode("Apakah anda yakin menghapus data " + toDisplayString(props.item.namaRole) + "? ", 1)
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
              createVNode(unref(_sfc_main$d), null, {
                default: withCtx(() => [
                  createVNode(_component_Button, null, {
                    default: withCtx(() => [
                      createVNode(unref(TrashIcon), { class: "w-4 h-4 mr-2" }),
                      createTextVNode(" Delete Data ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$5$2), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$2$3), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$1$5), null, {
                        default: withCtx(() => [
                          createTextVNode("Apakah anda yakin menghapus data " + toDisplayString(props.item.namaRole) + "? ", 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/master-role/DeleteData.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ModalAkses",
  __ssrInlineRender: true,
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  emits: ["dataAkses"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const config = useRuntimeConfig();
    const baseUrl = config.public.apiBase;
    const isDialogOpen = ref(false);
    const isLoading = ref(true);
    const menus = ref([]);
    const accessToken = useCookie("accessToken");
    const token = accessToken.value.token;
    async function fetchGetAkses() {
      try {
        const response = await fetch(`${baseUrl}/getAksesRole/${props.id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const results = data;
        menus.value = results.map((menu) => {
          var _a;
          return {
            ...menu,
            children: ((_a = menu.children) == null ? void 0 : _a.map((child) => ({ ...child }))) || []
          };
        });
        isLoading.value = false;
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    }
    async function openDialog() {
      isDialogOpen.value = true;
      isLoading.value = true;
      await fetchGetAkses();
    }
    function closeDialog() {
      isDialogOpen.value = false;
    }
    function toggleParent(menu) {
      var _a;
      (_a = menu.children) == null ? void 0 : _a.forEach((child) => {
        child.checked = menu.checked;
      });
    }
    function toggleChild(menu, child) {
      if (!child.checked) {
        menu.checked = false;
      } else if (menu.children.every((c) => c.checked)) {
        menu.checked = true;
      }
    }
    async function onSubmit() {
      const selectedMenus = [];
      menus.value.forEach((menu) => {
        var _a;
        const selectedChildren = ((_a = menu.children) == null ? void 0 : _a.filter((child) => child.checked)) || [];
        if (menu.checked || selectedChildren.length > 0) {
          selectedMenus.push({
            id: menu.id,
            name: menu.name,
            checked: menu.checked,
            children: selectedChildren.map((child) => ({
              id: child.id,
              name: child.name,
              checked: child.checked
            }))
          });
        }
      });
      try {
        const response = await fetch(`${baseUrl}/saveAksesRole/${props.id}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
          body: JSON.stringify(selectedMenus)
        });
        if (!response.ok) {
          throw new Error(`Gagal menyimpan akses role. Status: ${response.status}`);
        }
        toast({ title: "Berhasil", description: "Akses role berhasil diperbarui" });
        setTimeout(() => {
          emit("dataAkses");
          closeDialog();
        }, 300);
      } catch (error) {
        console.error("Error saat simpan:", error);
        toast({ title: "Error", description: "Gagal menyimpan data", variant: "destructive" });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormField = Field;
      const _component_FormItem = _sfc_main$2$2;
      const _component_FormControl = _sfc_main$4$3;
      const _component_Checkbox = _sfc_main$c;
      const _component_FormLabel = _sfc_main$1$4;
      _push(ssrRenderComponent(unref(_sfc_main$8$1), mergeProps({
        open: unref(isDialogOpen),
        onOpenChange: ($event) => isDialogOpen.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$9), { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$2$1), {
                    class: "mr-2",
                    onClick: openDialog
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(ScanEyeIcon), { class: "w-4 h-4 mr-2" }, null, _parent4, _scopeId3));
                        _push4(` Role Access `);
                      } else {
                        return [
                          createVNode(unref(ScanEyeIcon), { class: "w-4 h-4 mr-2" }),
                          createTextVNode(" Role Access ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$2$1), {
                      class: "mr-2",
                      onClick: openDialog
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ScanEyeIcon), { class: "w-4 h-4 mr-2" }),
                        createTextVNode(" Role Access ")
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
                  _push3(ssrRenderComponent(unref(_sfc_main$3$2), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$1$3), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Akses Role`);
                            } else {
                              return [
                                createTextVNode("Akses Role")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$1$3), null, {
                            default: withCtx(() => [
                              createTextVNode("Akses Role")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (!unref(isLoading)) {
                    _push3(`<form class="space-y-5"${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(menus), (menu) => {
                      _push3(`<div${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_FormField, { name: "menuHeader" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_FormItem, { class: "flex items-center space-x-2" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_FormControl, null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_Checkbox, {
                                          checked: menu.checked,
                                          "onUpdate:checked": ($event) => menu.checked = $event,
                                          onChange: ($event) => toggleParent(menu)
                                        }, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_Checkbox, {
                                            checked: menu.checked,
                                            "onUpdate:checked": ($event) => menu.checked = $event,
                                            onChange: ($event) => toggleParent(menu)
                                          }, null, 8, ["checked", "onUpdate:checked", "onChange"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(_component_FormLabel, null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(menu.name)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(menu.name), 1)
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
                                          checked: menu.checked,
                                          "onUpdate:checked": ($event) => menu.checked = $event,
                                          onChange: ($event) => toggleParent(menu)
                                        }, null, 8, ["checked", "onUpdate:checked", "onChange"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_FormLabel, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(menu.name), 1)
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
                              createVNode(_component_FormItem, { class: "flex items-center space-x-2" }, {
                                default: withCtx(() => [
                                  createVNode(_component_FormControl, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Checkbox, {
                                        checked: menu.checked,
                                        "onUpdate:checked": ($event) => menu.checked = $event,
                                        onChange: ($event) => toggleParent(menu)
                                      }, null, 8, ["checked", "onUpdate:checked", "onChange"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_FormLabel, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(menu.name), 1)
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
                      }, _parent3, _scopeId2));
                      if (menu.children) {
                        _push3(`<div class="pl-6 space-y-1 mt-2"${_scopeId2}><!--[-->`);
                        ssrRenderList(menu.children, (child) => {
                          _push3(`<div${_scopeId2}>`);
                          _push3(ssrRenderComponent(_component_FormField, { name: "childMenu" }, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(ssrRenderComponent(_component_FormItem, { class: "flex items-center space-x-2" }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(ssrRenderComponent(_component_FormControl, null, {
                                        default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                          if (_push6) {
                                            _push6(ssrRenderComponent(_component_Checkbox, {
                                              checked: child.checked,
                                              "onUpdate:checked": ($event) => child.checked = $event,
                                              onChange: ($event) => toggleChild(menu, child)
                                            }, null, _parent6, _scopeId5));
                                          } else {
                                            return [
                                              createVNode(_component_Checkbox, {
                                                checked: child.checked,
                                                "onUpdate:checked": ($event) => child.checked = $event,
                                                onChange: ($event) => toggleChild(menu, child)
                                              }, null, 8, ["checked", "onUpdate:checked", "onChange"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent5, _scopeId4));
                                      _push5(ssrRenderComponent(_component_FormLabel, null, {
                                        default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                          if (_push6) {
                                            _push6(`${ssrInterpolate(child.name)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(child.name), 1)
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
                                              checked: child.checked,
                                              "onUpdate:checked": ($event) => child.checked = $event,
                                              onChange: ($event) => toggleChild(menu, child)
                                            }, null, 8, ["checked", "onUpdate:checked", "onChange"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_FormLabel, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(child.name), 1)
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
                                  createVNode(_component_FormItem, { class: "flex items-center space-x-2" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_FormControl, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Checkbox, {
                                            checked: child.checked,
                                            "onUpdate:checked": ($event) => child.checked = $event,
                                            onChange: ($event) => toggleChild(menu, child)
                                          }, null, 8, ["checked", "onUpdate:checked", "onChange"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_FormLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(child.name), 1)
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
                          }, _parent3, _scopeId2));
                          _push3(`</div>`);
                        });
                        _push3(`<!--]--></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                    });
                    _push3(`<!--]-->`);
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
                          _push4(ssrRenderComponent(unref(_sfc_main$2$1), { type: "submit" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Update`);
                              } else {
                                return [
                                  createTextVNode("Update")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
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
                            createVNode(unref(_sfc_main$2$1), { type: "submit" }, {
                              default: withCtx(() => [
                                createTextVNode("Update")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</form>`);
                  } else {
                    _push3(`<div class="text-center p-6"${_scopeId2}>Loading data...</div>`);
                  }
                } else {
                  return [
                    createVNode(unref(_sfc_main$3$2), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$1$3), null, {
                          default: withCtx(() => [
                            createTextVNode("Akses Role")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    !unref(isLoading) ? (openBlock(), createBlock("form", {
                      key: 0,
                      class: "space-y-5",
                      onSubmit: withModifiers(onSubmit, ["prevent"])
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(menus), (menu) => {
                        return openBlock(), createBlock("div", {
                          key: menu.id
                        }, [
                          createVNode(_component_FormField, { name: "menuHeader" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormItem, { class: "flex items-center space-x-2" }, {
                                default: withCtx(() => [
                                  createVNode(_component_FormControl, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Checkbox, {
                                        checked: menu.checked,
                                        "onUpdate:checked": ($event) => menu.checked = $event,
                                        onChange: ($event) => toggleParent(menu)
                                      }, null, 8, ["checked", "onUpdate:checked", "onChange"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_FormLabel, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(menu.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          menu.children ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "pl-6 space-y-1 mt-2"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(menu.children, (child) => {
                              return openBlock(), createBlock("div", {
                                key: child.id
                              }, [
                                createVNode(_component_FormField, { name: "childMenu" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_FormItem, { class: "flex items-center space-x-2" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_FormControl, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_Checkbox, {
                                              checked: child.checked,
                                              "onUpdate:checked": ($event) => child.checked = $event,
                                              onChange: ($event) => toggleChild(menu, child)
                                            }, null, 8, ["checked", "onUpdate:checked", "onChange"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_FormLabel, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(child.name), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]);
                            }), 128))
                          ])) : createCommentVNode("", true)
                        ]);
                      }), 128)),
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
                          createVNode(unref(_sfc_main$2$1), { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode("Update")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ], 32)) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-center p-6"
                    }, "Loading data..."))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$9), { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$2$1), {
                    class: "mr-2",
                    onClick: openDialog
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(ScanEyeIcon), { class: "w-4 h-4 mr-2" }),
                      createTextVNode(" Role Access ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$6$2), { class: "sm:max-w-[800px] [&>button]:hidden" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$3$2), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$1$3), null, {
                        default: withCtx(() => [
                          createTextVNode("Akses Role")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  !unref(isLoading) ? (openBlock(), createBlock("form", {
                    key: 0,
                    class: "space-y-5",
                    onSubmit: withModifiers(onSubmit, ["prevent"])
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(menus), (menu) => {
                      return openBlock(), createBlock("div", {
                        key: menu.id
                      }, [
                        createVNode(_component_FormField, { name: "menuHeader" }, {
                          default: withCtx(() => [
                            createVNode(_component_FormItem, { class: "flex items-center space-x-2" }, {
                              default: withCtx(() => [
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Checkbox, {
                                      checked: menu.checked,
                                      "onUpdate:checked": ($event) => menu.checked = $event,
                                      onChange: ($event) => toggleParent(menu)
                                    }, null, 8, ["checked", "onUpdate:checked", "onChange"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(menu.name), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        menu.children ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "pl-6 space-y-1 mt-2"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(menu.children, (child) => {
                            return openBlock(), createBlock("div", {
                              key: child.id
                            }, [
                              createVNode(_component_FormField, { name: "childMenu" }, {
                                default: withCtx(() => [
                                  createVNode(_component_FormItem, { class: "flex items-center space-x-2" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_FormControl, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Checkbox, {
                                            checked: child.checked,
                                            "onUpdate:checked": ($event) => child.checked = $event,
                                            onChange: ($event) => toggleChild(menu, child)
                                          }, null, 8, ["checked", "onUpdate:checked", "onChange"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_FormLabel, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(child.name), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]);
                          }), 128))
                        ])) : createCommentVNode("", true)
                      ]);
                    }), 128)),
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
                        createVNode(unref(_sfc_main$2$1), { type: "submit" }, {
                          default: withCtx(() => [
                            createTextVNode("Update")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ], 32)) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "text-center p-6"
                  }, "Loading data..."))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/master-role/ModalAkses.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ListData",
  __ssrInlineRender: true,
  setup(__props) {
    const searchQuery = ref("");
    const currentPage = ref(1);
    const itemsPerPage = ref(10);
    const data = ref([]);
    const config = useRuntimeConfig();
    const baseUrl = config.public.apiBase;
    const isLoading = ref(false);
    const accessToken = useCookie("accessToken");
    const token = accessToken.value.token;
    async function fetchData() {
      isLoading.value = true;
      try {
        const timestamp = (/* @__PURE__ */ new Date()).getTime();
        const response = await fetch(`${baseUrl}/roles`, {
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
      } finally {
        isLoading.value = false;
      }
    }
    const filteredData = computed(() => {
      return data.value.filter(
        (item) => item.namaRole.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });
    const totalPages = computed(() => {
      return Math.ceil(filteredData.value.length / itemsPerPage.value);
    });
    const paginatedData = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      return filteredData.value.slice(start, start + itemsPerPage.value);
    });
    function nextPage() {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    }
    function prevPage() {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = _sfc_main$5$1;
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
                                          _push7(`Nama Peran`);
                                        } else {
                                          return [
                                            createTextVNode("Nama Peran")
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
                                    _push6(ssrRenderComponent(_component_TableHead, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Akses`);
                                        } else {
                                          return [
                                            createTextVNode("Akses")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_TableHead, { class: "text-center w-[300px]" }, {
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
                                          createTextVNode("Nama Peran")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Keterangan")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Akses")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableHead, { class: "text-center w-[300px]" }, {
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
                                        createTextVNode("Nama Peran")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Keterangan")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Akses")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableHead, { class: "text-center w-[300px]" }, {
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
                                            _push7(`${ssrInterpolate(index + 1)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(index + 1), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, { class: "font-medium" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.namaRole)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.namaRole), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.description)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.description), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_sfc_main$2, {
                                              id: item.id,
                                              onDataAkses: fetchData
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_sfc_main$2, {
                                                id: item.id,
                                                onDataAkses: fetchData
                                              }, null, 8, ["id"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, { class: "text-right" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_sfc_main$4, {
                                              id: item.id,
                                              onDataUpdated: fetchData
                                            }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_sfc_main$3, {
                                              item,
                                              onDataDeleted: fetchData
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_sfc_main$4, {
                                                id: item.id,
                                                onDataUpdated: fetchData
                                              }, null, 8, ["id"]),
                                              createVNode(_sfc_main$3, {
                                                item,
                                                onDataDeleted: fetchData
                                              }, null, 8, ["item"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_TableCell, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(index + 1), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, { class: "font-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.namaRole), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.description), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, null, {
                                          default: withCtx(() => [
                                            createVNode(_sfc_main$2, {
                                              id: item.id,
                                              onDataAkses: fetchData
                                            }, null, 8, ["id"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, { class: "text-right" }, {
                                          default: withCtx(() => [
                                            createVNode(_sfc_main$4, {
                                              id: item.id,
                                              onDataUpdated: fetchData
                                            }, null, 8, ["id"]),
                                            createVNode(_sfc_main$3, {
                                              item,
                                              onDataDeleted: fetchData
                                            }, null, 8, ["item"])
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
                                          createTextVNode(toDisplayString(index + 1), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, { class: "font-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.namaRole), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.description), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$2, {
                                            id: item.id,
                                            onDataAkses: fetchData
                                          }, null, 8, ["id"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$4, {
                                            id: item.id,
                                            onDataUpdated: fetchData
                                          }, null, 8, ["id"]),
                                          createVNode(_sfc_main$3, {
                                            item,
                                            onDataDeleted: fetchData
                                          }, null, 8, ["item"])
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
                                      createTextVNode("Nama Peran")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Keterangan")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Akses")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, { class: "text-center w-[300px]" }, {
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
                                        createTextVNode(toDisplayString(index + 1), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "font-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.namaRole), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.description), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$2, {
                                          id: item.id,
                                          onDataAkses: fetchData
                                        }, null, 8, ["id"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$4, {
                                          id: item.id,
                                          onDataUpdated: fetchData
                                        }, null, 8, ["id"]),
                                        createVNode(_sfc_main$3, {
                                          item,
                                          onDataDeleted: fetchData
                                        }, null, 8, ["item"])
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
                                      createTextVNode("Nama Peran")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Keterangan")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Akses")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, { class: "text-center w-[300px]" }, {
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
                                        createTextVNode(toDisplayString(index + 1), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "font-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.namaRole), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.description), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$2, {
                                          id: item.id,
                                          onDataAkses: fetchData
                                        }, null, 8, ["id"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$4, {
                                          id: item.id,
                                          onDataUpdated: fetchData
                                        }, null, 8, ["id"]),
                                        createVNode(_sfc_main$3, {
                                          item,
                                          onDataDeleted: fetchData
                                        }, null, 8, ["item"])
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
                                    createTextVNode("Nama Peran")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Keterangan")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Akses")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, { class: "text-center w-[300px]" }, {
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
                                      createTextVNode(toDisplayString(index + 1), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_TableCell, { class: "font-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.namaRole), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_TableCell, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.description), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_TableCell, null, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$2, {
                                        id: item.id,
                                        onDataAkses: fetchData
                                      }, null, 8, ["id"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_TableCell, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$4, {
                                        id: item.id,
                                        onDataUpdated: fetchData
                                      }, null, 8, ["id"]),
                                      createVNode(_sfc_main$3, {
                                        item,
                                        onDataDeleted: fetchData
                                      }, null, 8, ["item"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/master-role/ListData.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "master-role",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col gap-4" }, _attrs))}><div class="flex flex-wrap items-center justify-between gap-2"><h2 class="text-2xl font-bold tracking-tight">Master Role</h2></div><div>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(mon-project)/master-role.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=master-role-UxAw6SXg.mjs.map
