<script>
import Btn from "./Button.vue"
export default {
  name: "Dropdown",
  render: function (createElement, context) {
    return createElement(
      "li",
      {
        attrs: {
          role: "presentation"
        },
        class: [
          this.dropClass,
          { open: this.opened }
        ]
      },
      [
        createElement(
          "a",
          {
            attrs: {
              class: "dropdown-toggle",
              dataToggle: "dropdown",
              href: "javascript:",
              role: "button",
              ariaHaspopup: "true",
              ariaExpanded: "false"
            },
            nativeOn: {
              click: this.toggle
            },
          },
          [
            this.text,
            createElement(
              "span",
              {
                attrs: {
                  class: "caret"
                }
              }
            )
          ]
        ),
        createElement(
          "ul",
          {
            attrs: {
              class: "dropdown-menu",
              ariaLabelledby: "dropdownMenu1"
            }
          },
          this.$slots.default
        )
      ]
    )
  },
  components: {
    Btn: Btn
  },
  props: {
    text: {
      default: "Dropdown"
    },
    drop: {
      default: "dropdown"
    },
    btn: String,
    split: {
      default: false
    }
  },
  data() {
    return {
      dropClass: this.drop,
      opened: false,
      ulDrop: false
    }
  },
  methods: {
    toggle() {
      let e = window.event;
      e.stopPropagation();
      this.opened = !this.opened
    },
    hideMenu() {
      this.opened = false
    },
    isUlDrop() {
      if (this.$parent.$el.nodeName == "UL") {
        this.ulDrop = true
      }
    }
  },
  mounted() {
    this.isUlDrop();
    document.body.addEventListener("click", () => this.hideMenu())
  },
  beforeDestroy() {
    document.body.removeEventListener("click", () => this.hideMenu())
  }
}
</script>
