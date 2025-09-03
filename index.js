export default {
  name: "Hide N Messages",
  description: "Enable /hide N to hide multiple recent messages.",
  setup({ registerSlashCommand, eventBus }) {
    registerSlashCommand("hide", "Hide N last messages", async (args) => {
      let n = 1;
      if (args.length > 0) {
        const parsed = parseInt(args[0]);
        if (!isNaN(parsed) && parsed > 0) n = parsed;
      }
      eventBus.emit("hideLastMessages", n);
    });
  }
};
