export default {
  name: "HideN Extension",
  description: "Use /hide, /hide2, /hide5, /hide10 etc. to hide multiple messages.",
  setup({ registerSlashCommand, eventBus }) {
    // 기본 hide (최근 1개)
    registerSlashCommand("hide", "Hide last N messages", async (args, { rawInput }) => {
      let n = 1;

      // rawInput = 사용자가 입력한 전체 문자열 (예: "hide5")
      const match = rawInput.match(/^hide(\d+)$/);
      if (match) {
        n = parseInt(match[1]);
      }

      eventBus.emit("hideLastMessages", n);
    });
  }
};
