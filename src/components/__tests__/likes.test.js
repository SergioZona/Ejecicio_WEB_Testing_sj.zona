import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

import Likes from "../likes";

let container;

//helpers
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(<Likes />, container);
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Testing checkbox component", () => {
    it("Likes empiezan en cero", () => {
        const p = container.querySelector("p");
        const likes = p.textContent.split(" ")[1];
        expect(likes).toBe("0");
      });

    it("Aumenta si se da like", () => {
        const p = container.querySelector("p");
        const likes = p.textContent.split(" ")[1];

        const aumenta = document.getElementById("increment");
        act(() => {
        aumenta.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });

        const likes_aumentan = container.querySelector("p");
        expect(likes_aumentan.textContent.split(" ")[1]).toBe(String(parseInt(likes)+1));
    });

    it("Disminuye si se da dislike", () => {
        const p = container.querySelector("p");
        const likes = p.textContent.split(" ")[1];

        const disminuye = document.getElementById("decrement");
        act(() => {
            disminuye.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });

        const likes_disminuyen = container.querySelector("p");
        expect(likes_disminuyen.textContent.split(" ")[1]).toBe(String(parseInt(likes)-1));
    });
});
