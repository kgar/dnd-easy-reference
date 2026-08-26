const { HandlebarsApplicationMixin, ApplicationV2 } = foundry.applications.api;

/**
 * A custom dialog prompt shown when a text pattern is detected.
 * Allows the user to confirm conversion, skip the match, or cancel the scan.
 */
export default class PatternPromptDialog extends HandlebarsApplicationMixin(
  ApplicationV2,
) {
  constructor(data = {}, options = {}) {
    super(options);
    this.data = data;
    this.promise = new Promise((resolve) => {
      this.resolve = resolve;
    });
  }

  static DEFAULT_OPTIONS = {
    classes: ["dnd-pattern-prompt"],
    tag: "form",
    position: { width: 400, height: "auto" },
    window: {
      title: "DND.DETECT.PROMPT_TITLE",
      contentClasses: ["dialog-content", "standard-form"],
    },
    position: {
      width: 400,
      height: "auto",
    },
    actions: {
      confirm: PatternPromptDialog.#handleAction,
      skip: PatternPromptDialog.#handleAction,
      cancel: PatternPromptDialog.#handleAction,
    },
  };

  static PARTS = {
    form: {
      template:
        "modules/dnd-easy-reference/templates/pattern-detection/pattern-prompt.hbs",
    },
    footer: {
      template: "templates/generic/form-footer.hbs",
    },
  };

  get title() {
    return game.i18n.localize(this.options.window.title) || "Pattern Found";
  }

  _prepareContext(options) {
    try {
      const context = {
        promptText:
          game.i18n.localize("DND.DETECT.PROMPT_CONFIRM") ||
          "Convert this text?",
        textToSelect: this.data.textToSelect,
        warningText:
          game.i18n.localize("DND.DETECT.PROMPT_WARNING") ||
          "Warning: Verify selection before confirming.",
        buttons: [
          {
            type: "button",
            icon: 'fas fa-times"',
            label:
              game.i18n.localize("DND.DETECT.BUTTON_CANCEL") || "Cancel Scan",
            action: "cancel",
          },
          {
            type: "button",
            icon: "fas fa-forward",
            label: game.i18n.localize("DND.DETECT.BUTTON_SKIP") || "Skip",
            action: "skip",
          },
          {
            type: "button",
            icon: "fas fa-check",
            label: game.i18n.localize("DND.DETECT.BUTTON_CONFIRM") || "Confirm",
            classes: "default",
            action: "confirm",
          },
        ],
      };
      return context;
    } catch (err) {
      console.error("D&D Easy Reference | PatternPromptDialog | Error preparing context:", err);
      throw err;
    }
  }

  static async #handleAction(event, target) {
    const action = target.dataset.action;
    if (this.resolve) {
      this.resolve(action);
      this.resolve = null;
    } else {
      console.warn(
        "D&D Easy Reference | PatternPromptDialog | Resolve function was null when handling action:",
        action,
      );
    }
    await this.close({ force: true });
  }

  async close(options) {
    if (this.resolve) {
      this.resolve("cancel");
      this.resolve = null;
    }
    return super.close(options);
  }

  static async create(data, options = {}) {
    try {
      const dialog = new this(data, options);
      dialog.render(true);
      return dialog.promise;
    } catch (err) {
      console.error("D&D Easy Reference | PatternPromptDialog | Error during create/render:", err);
      return Promise.reject(err);
    }
  }
}
