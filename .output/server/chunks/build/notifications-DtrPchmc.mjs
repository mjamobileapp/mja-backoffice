import { _ as __nuxt_component_0 } from './Layout-BQ5iXvOj.mjs';
import { _ as _sfc_main$2 } from './Separator-Bs1EkIKE.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$1$1, b as _sfc_main$4, d as _sfc_main$5, c as _sfc_main$3$1 } from './FormMessage-D5Wcp1o-.mjs';
import { useForm, Field } from 'vee-validate';
import { _ as _sfc_main$1$2, a as _sfc_main$3 } from './RadioGroupItem-CzBGn88l.mjs';
import { _ as _sfc_main$6 } from './Switch-iusG_qLb.mjs';
import { _ as _sfc_main$7 } from './Checkbox-DuA9XWkc.mjs';
import { t as toast, a as _sfc_main$2$2 } from './server.mjs';
import { withCtx, defineComponent, createVNode, h, createTextVNode, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "NotificationsForm",
  __ssrInlineRender: true,
  setup(__props) {
    const notificationsFormSchema = toTypedSchema(z.object({
      type: z.enum(["all", "mentions", "none"], {
        required_error: "You need to select a notification type."
      }),
      mobile: z.boolean().default(false).optional(),
      communication_emails: z.boolean().default(false).optional(),
      social_emails: z.boolean().default(false).optional(),
      marketing_emails: z.boolean().default(false).optional(),
      security_emails: z.boolean()
    }));
    const { handleSubmit } = useForm({
      validationSchema: notificationsFormSchema,
      initialValues: {
        communication_emails: false,
        marketing_emails: false,
        social_emails: true,
        security_emails: true
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
      const _component_FormControl = _sfc_main$4;
      const _component_RadioGroup = _sfc_main$1$2;
      const _component_RadioGroupItem = _sfc_main$3;
      const _component_FormMessage = _sfc_main$5;
      const _component_FormDescription = _sfc_main$3$1;
      const _component_Switch = _sfc_main$6;
      const _component_Checkbox = _sfc_main$7;
      const _component_Button = _sfc_main$2$2;
      _push(`<!--[--><div><h3 class="text-lg font-medium"> Notifications </h3><p class="text-sm text-muted-foreground"> Configure how you receive notifications. </p></div>`);
      _push(ssrRenderComponent(_component_Separator, null, null, _parent));
      _push(`<form class="space-y-8">`);
      _push(ssrRenderComponent(_component_FormField, {
        type: "radio",
        name: "type"
      }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormItem, { class: "space-y-3" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormLabel, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Notify me about...`);
                      } else {
                        return [
                          createTextVNode("Notify me about...")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_RadioGroup, mergeProps({ class: "flex flex-col space-y-1" }, componentField), {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormItem, { class: "flex items-center space-x-3 space-y-0" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_FormControl, null, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_RadioGroupItem, { value: "all" }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_RadioGroupItem, { value: "all" })
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_FormLabel, { class: "font-normal" }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` All new messages `);
                                        } else {
                                          return [
                                            createTextVNode(" All new messages ")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_FormControl, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_RadioGroupItem, { value: "all" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_FormLabel, { class: "font-normal" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" All new messages ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormItem, { class: "flex items-center space-x-3 space-y-0" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_FormControl, null, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_RadioGroupItem, { value: "mentions" }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_RadioGroupItem, { value: "mentions" })
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_FormLabel, { class: "font-normal" }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Direct messages and mentions `);
                                        } else {
                                          return [
                                            createTextVNode(" Direct messages and mentions ")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_FormControl, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_RadioGroupItem, { value: "mentions" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_FormLabel, { class: "font-normal" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Direct messages and mentions ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormItem, { class: "flex items-center space-x-3 space-y-0" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_FormControl, null, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_RadioGroupItem, { value: "none" }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_RadioGroupItem, { value: "none" })
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_FormLabel, { class: "font-normal" }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Nothing `);
                                        } else {
                                          return [
                                            createTextVNode(" Nothing ")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_FormControl, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_RadioGroupItem, { value: "none" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_FormLabel, { class: "font-normal" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Nothing ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormItem, { class: "flex items-center space-x-3 space-y-0" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_FormControl, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_RadioGroupItem, { value: "all" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_FormLabel, { class: "font-normal" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" All new messages ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormItem, { class: "flex items-center space-x-3 space-y-0" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_FormControl, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_RadioGroupItem, { value: "mentions" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_FormLabel, { class: "font-normal" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Direct messages and mentions ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormItem, { class: "flex items-center space-x-3 space-y-0" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_FormControl, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_RadioGroupItem, { value: "none" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_FormLabel, { class: "font-normal" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Nothing ")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_RadioGroup, mergeProps({ class: "flex flex-col space-y-1" }, componentField), {
                            default: withCtx(() => [
                              createVNode(_component_FormItem, { class: "flex items-center space-x-3 space-y-0" }, {
                                default: withCtx(() => [
                                  createVNode(_component_FormControl, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_RadioGroupItem, { value: "all" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_FormLabel, { class: "font-normal" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" All new messages ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormItem, { class: "flex items-center space-x-3 space-y-0" }, {
                                default: withCtx(() => [
                                  createVNode(_component_FormControl, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_RadioGroupItem, { value: "mentions" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_FormLabel, { class: "font-normal" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Direct messages and mentions ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormItem, { class: "flex items-center space-x-3 space-y-0" }, {
                                default: withCtx(() => [
                                  createVNode(_component_FormControl, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_RadioGroupItem, { value: "none" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_FormLabel, { class: "font-normal" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Nothing ")
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormMessage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormLabel, null, {
                      default: withCtx(() => [
                        createTextVNode("Notify me about...")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_RadioGroup, mergeProps({ class: "flex flex-col space-y-1" }, componentField), {
                          default: withCtx(() => [
                            createVNode(_component_FormItem, { class: "flex items-center space-x-3 space-y-0" }, {
                              default: withCtx(() => [
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_RadioGroupItem, { value: "all" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormLabel, { class: "font-normal" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" All new messages ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_FormItem, { class: "flex items-center space-x-3 space-y-0" }, {
                              default: withCtx(() => [
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_RadioGroupItem, { value: "mentions" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormLabel, { class: "font-normal" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Direct messages and mentions ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_FormItem, { class: "flex items-center space-x-3 space-y-0" }, {
                              default: withCtx(() => [
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_RadioGroupItem, { value: "none" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormLabel, { class: "font-normal" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Nothing ")
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
                    }, 1024),
                    createVNode(_component_FormMessage)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormItem, { class: "space-y-3" }, {
                default: withCtx(() => [
                  createVNode(_component_FormLabel, null, {
                    default: withCtx(() => [
                      createTextVNode("Notify me about...")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_FormControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_RadioGroup, mergeProps({ class: "flex flex-col space-y-1" }, componentField), {
                        default: withCtx(() => [
                          createVNode(_component_FormItem, { class: "flex items-center space-x-3 space-y-0" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_RadioGroupItem, { value: "all" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormLabel, { class: "font-normal" }, {
                                default: withCtx(() => [
                                  createTextVNode(" All new messages ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormItem, { class: "flex items-center space-x-3 space-y-0" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_RadioGroupItem, { value: "mentions" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormLabel, { class: "font-normal" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Direct messages and mentions ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormItem, { class: "flex items-center space-x-3 space-y-0" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_RadioGroupItem, { value: "none" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormLabel, { class: "font-normal" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Nothing ")
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
                  }, 1024),
                  createVNode(_component_FormMessage)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><h3 class="mb-4 text-lg font-medium"> Email Notifications </h3><div class="space-y-4">`);
      _push(ssrRenderComponent(_component_FormField, {
        type: "checkbox",
        name: "communication_emails"
      }, {
        default: withCtx(({ handleChange, value }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormItem, { class: "flex flex-row items-center justify-between border rounded-lg p-4" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-0.5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_FormLabel, { class: "text-base" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Communication emails `);
                      } else {
                        return [
                          createTextVNode(" Communication emails ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormDescription, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Receive emails about your account activity. `);
                      } else {
                        return [
                          createTextVNode(" Receive emails about your account activity. ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_FormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Switch, {
                          checked: value,
                          "onUpdate:checked": handleChange
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Switch, {
                            checked: value,
                            "onUpdate:checked": handleChange
                          }, null, 8, ["checked", "onUpdate:checked"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "space-y-0.5" }, [
                      createVNode(_component_FormLabel, { class: "text-base" }, {
                        default: withCtx(() => [
                          createTextVNode(" Communication emails ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_FormDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(" Receive emails about your account activity. ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_FormControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_Switch, {
                          checked: value,
                          "onUpdate:checked": handleChange
                        }, null, 8, ["checked", "onUpdate:checked"])
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormItem, { class: "flex flex-row items-center justify-between border rounded-lg p-4" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-0.5" }, [
                    createVNode(_component_FormLabel, { class: "text-base" }, {
                      default: withCtx(() => [
                        createTextVNode(" Communication emails ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(" Receive emails about your account activity. ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_FormControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_Switch, {
                        checked: value,
                        "onUpdate:checked": handleChange
                      }, null, 8, ["checked", "onUpdate:checked"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FormField, {
        type: "checkbox",
        name: "marketing_emails"
      }, {
        default: withCtx(({ handleChange, value }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormItem, { class: "flex flex-row items-center justify-between border rounded-lg p-4" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-0.5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_FormLabel, { class: "text-base" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Marketing emails `);
                      } else {
                        return [
                          createTextVNode(" Marketing emails ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormDescription, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Receive emails about new products, features, and more. `);
                      } else {
                        return [
                          createTextVNode(" Receive emails about new products, features, and more. ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_FormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Switch, {
                          checked: value,
                          "onUpdate:checked": handleChange
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Switch, {
                            checked: value,
                            "onUpdate:checked": handleChange
                          }, null, 8, ["checked", "onUpdate:checked"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "space-y-0.5" }, [
                      createVNode(_component_FormLabel, { class: "text-base" }, {
                        default: withCtx(() => [
                          createTextVNode(" Marketing emails ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_FormDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(" Receive emails about new products, features, and more. ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_FormControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_Switch, {
                          checked: value,
                          "onUpdate:checked": handleChange
                        }, null, 8, ["checked", "onUpdate:checked"])
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormItem, { class: "flex flex-row items-center justify-between border rounded-lg p-4" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-0.5" }, [
                    createVNode(_component_FormLabel, { class: "text-base" }, {
                      default: withCtx(() => [
                        createTextVNode(" Marketing emails ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(" Receive emails about new products, features, and more. ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_FormControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_Switch, {
                        checked: value,
                        "onUpdate:checked": handleChange
                      }, null, 8, ["checked", "onUpdate:checked"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FormField, {
        type: "checkbox",
        name: "social_emails"
      }, {
        default: withCtx(({ handleChange, value }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormItem, { class: "flex flex-row items-center justify-between border rounded-lg p-4" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-0.5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_FormLabel, { class: "text-base" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Social emails `);
                      } else {
                        return [
                          createTextVNode(" Social emails ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormDescription, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Receive emails for friend requests, follows, and more. `);
                      } else {
                        return [
                          createTextVNode(" Receive emails for friend requests, follows, and more. ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_FormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Switch, {
                          checked: value,
                          "onUpdate:checked": handleChange
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Switch, {
                            checked: value,
                            "onUpdate:checked": handleChange
                          }, null, 8, ["checked", "onUpdate:checked"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "space-y-0.5" }, [
                      createVNode(_component_FormLabel, { class: "text-base" }, {
                        default: withCtx(() => [
                          createTextVNode(" Social emails ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_FormDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(" Receive emails for friend requests, follows, and more. ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_FormControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_Switch, {
                          checked: value,
                          "onUpdate:checked": handleChange
                        }, null, 8, ["checked", "onUpdate:checked"])
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormItem, { class: "flex flex-row items-center justify-between border rounded-lg p-4" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-0.5" }, [
                    createVNode(_component_FormLabel, { class: "text-base" }, {
                      default: withCtx(() => [
                        createTextVNode(" Social emails ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(" Receive emails for friend requests, follows, and more. ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_FormControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_Switch, {
                        checked: value,
                        "onUpdate:checked": handleChange
                      }, null, 8, ["checked", "onUpdate:checked"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FormField, {
        type: "checkbox",
        name: "security_emails"
      }, {
        default: withCtx(({ handleChange, value }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormItem, { class: "flex flex-row items-center justify-between border rounded-lg p-4" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-0.5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_FormLabel, { class: "text-base" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Security emails `);
                      } else {
                        return [
                          createTextVNode(" Security emails ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormDescription, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Receive emails about your account activity and security. `);
                      } else {
                        return [
                          createTextVNode(" Receive emails about your account activity and security. ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_FormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Switch, {
                          checked: value,
                          "onUpdate:checked": handleChange
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Switch, {
                            checked: value,
                            "onUpdate:checked": handleChange
                          }, null, 8, ["checked", "onUpdate:checked"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "space-y-0.5" }, [
                      createVNode(_component_FormLabel, { class: "text-base" }, {
                        default: withCtx(() => [
                          createTextVNode(" Security emails ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_FormDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(" Receive emails about your account activity and security. ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_FormControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_Switch, {
                          checked: value,
                          "onUpdate:checked": handleChange
                        }, null, 8, ["checked", "onUpdate:checked"])
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormItem, { class: "flex flex-row items-center justify-between border rounded-lg p-4" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-0.5" }, [
                    createVNode(_component_FormLabel, { class: "text-base" }, {
                      default: withCtx(() => [
                        createTextVNode(" Security emails ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(" Receive emails about your account activity and security. ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_FormControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_Switch, {
                        checked: value,
                        "onUpdate:checked": handleChange
                      }, null, 8, ["checked", "onUpdate:checked"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_FormField, {
        type: "checkbox",
        name: "mobile"
      }, {
        default: withCtx(({ handleChange, value }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormItem, { class: "flex flex-row items-start space-x-3 space-y-0" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Checkbox, {
                          checked: value,
                          "onUpdate:checked": handleChange
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Checkbox, {
                            checked: value,
                            "onUpdate:checked": handleChange
                          }, null, 8, ["checked", "onUpdate:checked"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<div class="leading-none space-y-1"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_FormLabel, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Use different settings for my mobile devices `);
                      } else {
                        return [
                          createTextVNode(" Use different settings for my mobile devices ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormDescription, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` You can manage your mobile notifications in the <a href="/examples/forms"${_scopeId3}> mobile settings </a> page. `);
                      } else {
                        return [
                          createTextVNode(" You can manage your mobile notifications in the "),
                          createVNode("a", { href: "/examples/forms" }, " mobile settings "),
                          createTextVNode(" page. ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_FormControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_Checkbox, {
                          checked: value,
                          "onUpdate:checked": handleChange
                        }, null, 8, ["checked", "onUpdate:checked"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode("div", { class: "leading-none space-y-1" }, [
                      createVNode(_component_FormLabel, null, {
                        default: withCtx(() => [
                          createTextVNode(" Use different settings for my mobile devices ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_FormDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(" You can manage your mobile notifications in the "),
                          createVNode("a", { href: "/examples/forms" }, " mobile settings "),
                          createTextVNode(" page. ")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormItem, { class: "flex flex-row items-start space-x-3 space-y-0" }, {
                default: withCtx(() => [
                  createVNode(_component_FormControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_Checkbox, {
                        checked: value,
                        "onUpdate:checked": handleChange
                      }, null, 8, ["checked", "onUpdate:checked"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode("div", { class: "leading-none space-y-1" }, [
                    createVNode(_component_FormLabel, null, {
                      default: withCtx(() => [
                        createTextVNode(" Use different settings for my mobile devices ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(" You can manage your mobile notifications in the "),
                        createVNode("a", { href: "/examples/forms" }, " mobile settings "),
                        createTextVNode(" page. ")
                      ]),
                      _: 1
                    })
                  ])
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
            _push2(` Update notifications `);
          } else {
            return [
              createTextVNode(" Update notifications ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/settings/NotificationsForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SettingsLayout = __nuxt_component_0;
  const _component_SettingsNotificationsForm = _sfc_main$1;
  _push(ssrRenderComponent(_component_SettingsLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SettingsNotificationsForm, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_SettingsNotificationsForm)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/notifications.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const notifications = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { notifications as default };
//# sourceMappingURL=notifications-DtrPchmc.mjs.map
