import { _ as __nuxt_component_0 } from './Layout-BQ5iXvOj.mjs';
import { _ as _sfc_main$2 } from './Separator-Bs1EkIKE.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$1$1, b as _sfc_main$4, c as _sfc_main$3$1, d as _sfc_main$5 } from './FormMessage-D5Wcp1o-.mjs';
import { useForm, Field, FieldArray } from 'vee-validate';
import { _ as _sfc_main$3 } from './Input-CDkjoebz.mjs';
import { _ as _sfc_main$a, a as _sfc_main$1$2, b as _sfc_main$6, c as _sfc_main$9, e as _sfc_main$8, d as _sfc_main$7 } from './SelectValue-B4V_V5Kg.mjs';
import { _ as _sfc_main$b } from './Textarea-U1r39FPM.mjs';
import { t as toast, c as cn, _ as __nuxt_component_5, a as _sfc_main$2$2 } from './server.mjs';
import { withCtx, defineComponent, createVNode, ref, h, createTextVNode, mergeProps, toDisplayString, createBlock, openBlock, Fragment, renderList, unref, useSSRContext } from 'vue';
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
  __name: "ProfileForm",
  __ssrInlineRender: true,
  setup(__props) {
    const verifiedEmails = ref(["m@example.com", "m@google.com", "m@support.com"]);
    const profileFormSchema = toTypedSchema(z.object({
      username: z.string().min(2, {
        message: "Username must be at least 2 characters."
      }).max(30, {
        message: "Username must not be longer than 30 characters."
      }),
      email: z.string({
        required_error: "Please select an email to display."
      }).email(),
      bio: z.string().max(160, { message: "Bio must not be longer than 160 characters." }).min(4, { message: "Bio must be at least 2 characters." }),
      urls: z.array(
        z.object({
          value: z.string().url({ message: "Please enter a valid URL." })
        })
      ).optional()
    }));
    const { handleSubmit, resetForm } = useForm({
      validationSchema: profileFormSchema,
      initialValues: {
        bio: "I own a computer.",
        urls: [
          { value: "https://shadcn.com" },
          { value: "http://twitter.com/shadcn" }
        ]
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
      const _component_Input = _sfc_main$3;
      const _component_FormDescription = _sfc_main$3$1;
      const _component_FormMessage = _sfc_main$5;
      const _component_Select = _sfc_main$a;
      const _component_SelectTrigger = _sfc_main$1$2;
      const _component_SelectValue = _sfc_main$6;
      const _component_SelectContent = _sfc_main$9;
      const _component_SelectGroup = _sfc_main$8;
      const _component_SelectItem = _sfc_main$7;
      const _component_Textarea = _sfc_main$b;
      const _component_Icon = __nuxt_component_5;
      const _component_Button = _sfc_main$2$2;
      _push(`<!--[--><div><h3 class="text-lg font-medium"> Profile </h3><p class="text-sm text-muted-foreground"> This is how others will see you on the site. </p></div>`);
      _push(ssrRenderComponent(_component_Separator, null, null, _parent));
      _push(`<form class="space-y-8">`);
      _push(ssrRenderComponent(_component_FormField, { name: "username" }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormItem, null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormLabel, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Username`);
                      } else {
                        return [
                          createTextVNode("Username")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Input, mergeProps({
                          type: "text",
                          placeholder: "shadcn"
                        }, componentField), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Input, mergeProps({
                            type: "text",
                            placeholder: "shadcn"
                          }, componentField), null, 16)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormDescription, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days. `);
                      } else {
                        return [
                          createTextVNode(" This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days. ")
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
                        createTextVNode("Username")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_Input, mergeProps({
                          type: "text",
                          placeholder: "shadcn"
                        }, componentField), null, 16)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_FormDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(" This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days. ")
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
                      createTextVNode("Username")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_FormControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_Input, mergeProps({
                        type: "text",
                        placeholder: "shadcn"
                      }, componentField), null, 16)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_FormDescription, null, {
                    default: withCtx(() => [
                      createTextVNode(" This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days. ")
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
      _push(ssrRenderComponent(_component_FormField, { name: "email" }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormItem, null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormLabel, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Email`);
                      } else {
                        return [
                          createTextVNode("Email")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Select, componentField, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormControl, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectTrigger, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_SelectValue, { placeholder: "Select an email" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_SelectValue, { placeholder: "Select an email" })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_SelectValue, { placeholder: "Select an email" })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectContent, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectGroup, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(verifiedEmails.value, (email) => {
                                      _push6(ssrRenderComponent(_component_SelectItem, {
                                        key: email,
                                        value: email
                                      }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(email)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(email), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(verifiedEmails.value, (email) => {
                                        return openBlock(), createBlock(_component_SelectItem, {
                                          key: email,
                                          value: email
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(email), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectGroup, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(verifiedEmails.value, (email) => {
                                      return openBlock(), createBlock(_component_SelectItem, {
                                        key: email,
                                        value: email
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(email), 1)
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
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FormControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectValue, { placeholder: "Select an email" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectGroup, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(verifiedEmails.value, (email) => {
                                    return openBlock(), createBlock(_component_SelectItem, {
                                      key: email,
                                      value: email
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(email), 1)
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
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormDescription, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` You can manage verified email addresses in your email settings. `);
                      } else {
                        return [
                          createTextVNode(" You can manage verified email addresses in your email settings. ")
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
                        createTextVNode("Email")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Select, componentField, {
                      default: withCtx(() => [
                        createVNode(_component_FormControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_SelectValue, { placeholder: "Select an email" })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectContent, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectGroup, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(verifiedEmails.value, (email) => {
                                  return openBlock(), createBlock(_component_SelectItem, {
                                    key: email,
                                    value: email
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(email), 1)
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
                      ]),
                      _: 1
                    }, 16),
                    createVNode(_component_FormDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(" You can manage verified email addresses in your email settings. ")
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
                      createTextVNode("Email")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Select, componentField, {
                    default: withCtx(() => [
                      createVNode(_component_FormControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_SelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectValue, { placeholder: "Select an email" })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SelectContent, null, {
                        default: withCtx(() => [
                          createVNode(_component_SelectGroup, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(verifiedEmails.value, (email) => {
                                return openBlock(), createBlock(_component_SelectItem, {
                                  key: email,
                                  value: email
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(email), 1)
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
                    ]),
                    _: 1
                  }, 16),
                  createVNode(_component_FormDescription, null, {
                    default: withCtx(() => [
                      createTextVNode(" You can manage verified email addresses in your email settings. ")
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
      _push(ssrRenderComponent(_component_FormField, { name: "bio" }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormItem, null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormLabel, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Bio`);
                      } else {
                        return [
                          createTextVNode("Bio")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Textarea, mergeProps({ placeholder: "Tell us a little bit about yourself" }, componentField), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Textarea, mergeProps({ placeholder: "Tell us a little bit about yourself" }, componentField), null, 16)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormDescription, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` You can <span${_scopeId3}>@mention</span> other users and organizations to link to them. `);
                      } else {
                        return [
                          createTextVNode(" You can "),
                          createVNode("span", null, "@mention"),
                          createTextVNode(" other users and organizations to link to them. ")
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
                        createTextVNode("Bio")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_Textarea, mergeProps({ placeholder: "Tell us a little bit about yourself" }, componentField), null, 16)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_FormDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(" You can "),
                        createVNode("span", null, "@mention"),
                        createTextVNode(" other users and organizations to link to them. ")
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
                      createTextVNode("Bio")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_FormControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_Textarea, mergeProps({ placeholder: "Tell us a little bit about yourself" }, componentField), null, 16)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_FormDescription, null, {
                    default: withCtx(() => [
                      createTextVNode(" You can "),
                      createVNode("span", null, "@mention"),
                      createTextVNode(" other users and organizations to link to them. ")
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
      _push(`<div>`);
      _push(ssrRenderComponent(unref(FieldArray), { name: "urls" }, {
        default: withCtx(({ fields, push, remove }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(fields, (field, index) => {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_FormField, {
                name: `urls[${index}].value`
              }, {
                default: withCtx(({ componentField }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_FormItem, null, {
                      default: withCtx((_, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_FormLabel, {
                            class: unref(cn)(index !== 0 && "sr-only")
                          }, {
                            default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` URLs `);
                              } else {
                                return [
                                  createTextVNode(" URLs ")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_FormDescription, {
                            class: unref(cn)(index !== 0 && "sr-only")
                          }, {
                            default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Add links to your website, blog, or social media profiles. `);
                              } else {
                                return [
                                  createTextVNode(" Add links to your website, blog, or social media profiles. ")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<div class="relative flex items-center"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_FormControl, null, {
                            default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Input, mergeProps({ type: "url" }, { ref_for: true }, componentField), null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Input, mergeProps({ type: "url" }, { ref_for: true }, componentField), null, 16)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<button type="button" class="absolute end-0 py-2 pe-3 text-muted-foreground"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "i-radix-icons-cross1",
                            class: "w-3"
                          }, null, _parent4, _scopeId3));
                          _push4(`</button></div>`);
                          _push4(ssrRenderComponent(_component_FormMessage, null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_FormLabel, {
                              class: unref(cn)(index !== 0 && "sr-only")
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" URLs ")
                              ]),
                              _: 1
                            }, 8, ["class"]),
                            createVNode(_component_FormDescription, {
                              class: unref(cn)(index !== 0 && "sr-only")
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Add links to your website, blog, or social media profiles. ")
                              ]),
                              _: 1
                            }, 8, ["class"]),
                            createVNode("div", { class: "relative flex items-center" }, [
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Input, mergeProps({ type: "url" }, { ref_for: true }, componentField), null, 16)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("button", {
                                type: "button",
                                class: "absolute end-0 py-2 pe-3 text-muted-foreground",
                                onClick: ($event) => remove(index)
                              }, [
                                createVNode(_component_Icon, {
                                  name: "i-radix-icons-cross1",
                                  class: "w-3"
                                })
                              ], 8, ["onClick"])
                            ]),
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
                          createVNode(_component_FormLabel, {
                            class: unref(cn)(index !== 0 && "sr-only")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" URLs ")
                            ]),
                            _: 1
                          }, 8, ["class"]),
                          createVNode(_component_FormDescription, {
                            class: unref(cn)(index !== 0 && "sr-only")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Add links to your website, blog, or social media profiles. ")
                            ]),
                            _: 1
                          }, 8, ["class"]),
                          createVNode("div", { class: "relative flex items-center" }, [
                            createVNode(_component_FormControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_Input, mergeProps({ type: "url" }, { ref_for: true }, componentField), null, 16)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("button", {
                              type: "button",
                              class: "absolute end-0 py-2 pe-3 text-muted-foreground",
                              onClick: ($event) => remove(index)
                            }, [
                              createVNode(_component_Icon, {
                                name: "i-radix-icons-cross1",
                                class: "w-3"
                              })
                            ], 8, ["onClick"])
                          ]),
                          createVNode(_component_FormMessage)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(_component_Button, {
              type: "button",
              variant: "outline",
              size: "sm",
              class: "mt-2 w-20 text-xs",
              onClick: ($event) => push({ value: "" })
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Add URL `);
                } else {
                  return [
                    createTextVNode(" Add URL ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(fields, (field, index) => {
                return openBlock(), createBlock("div", {
                  key: `urls-${field.key}`
                }, [
                  createVNode(_component_FormField, {
                    name: `urls[${index}].value`
                  }, {
                    default: withCtx(({ componentField }) => [
                      createVNode(_component_FormItem, null, {
                        default: withCtx(() => [
                          createVNode(_component_FormLabel, {
                            class: unref(cn)(index !== 0 && "sr-only")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" URLs ")
                            ]),
                            _: 1
                          }, 8, ["class"]),
                          createVNode(_component_FormDescription, {
                            class: unref(cn)(index !== 0 && "sr-only")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Add links to your website, blog, or social media profiles. ")
                            ]),
                            _: 1
                          }, 8, ["class"]),
                          createVNode("div", { class: "relative flex items-center" }, [
                            createVNode(_component_FormControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_Input, mergeProps({ type: "url" }, { ref_for: true }, componentField), null, 16)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("button", {
                              type: "button",
                              class: "absolute end-0 py-2 pe-3 text-muted-foreground",
                              onClick: ($event) => remove(index)
                            }, [
                              createVNode(_component_Icon, {
                                name: "i-radix-icons-cross1",
                                class: "w-3"
                              })
                            ], 8, ["onClick"])
                          ]),
                          createVNode(_component_FormMessage)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["name"])
                ]);
              }), 128)),
              createVNode(_component_Button, {
                type: "button",
                variant: "outline",
                size: "sm",
                class: "mt-2 w-20 text-xs",
                onClick: ($event) => push({ value: "" })
              }, {
                default: withCtx(() => [
                  createTextVNode(" Add URL ")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex justify-start gap-2">`);
      _push(ssrRenderComponent(_component_Button, { type: "submit" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Update profile `);
          } else {
            return [
              createTextVNode(" Update profile ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        type: "button",
        variant: "outline",
        onClick: unref(resetForm)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Reset form `);
          } else {
            return [
              createTextVNode(" Reset form ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/settings/ProfileForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SettingsLayout = __nuxt_component_0;
  const _component_SettingsProfileForm = _sfc_main$1;
  _push(ssrRenderComponent(_component_SettingsLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SettingsProfileForm, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_SettingsProfileForm)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const profile = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { profile as default };
//# sourceMappingURL=profile-BP-kuP0i.mjs.map
