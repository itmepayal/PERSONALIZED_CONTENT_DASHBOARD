import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import RealtimeFeed from "@/app/dashboard/live/page";
import contentReducer from "@/features/content/contentSlice";

class MockEventSource {
  url: string;
  onopen: any;
  onmessage: any;
  onerror: any;

  constructor(url: string) {
    this.url = url;

    setTimeout(() => {
      if (this.onopen) this.onopen({});

      if (this.onmessage) {
        this.onmessage({
          data: JSON.stringify([]),
        });
      }
    }, 50);
  }

  close() {}
}

(global as any).EventSource = MockEventSource;

function renderWithStore(ui: React.ReactNode) {
  const store = configureStore({
    reducer: {
      content: contentReducer,
    },
  });

  return render(<Provider store={store}>{ui}</Provider>);
}

describe("RealtimeFeed", () => {
  it("shows empty state when no news", async () => {
    renderWithStore(<RealtimeFeed />);

    await waitFor(() => {
      expect(
        screen.getByText(/No live news available right now/i)
      ).toBeInTheDocument();
    });
  });
});
