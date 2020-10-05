import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the status", () => {
        const component = create(<ProfileStatus status="social sity" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("social sity");
    });
    test("after creation span should be displayed with correct status", () => {
        const component = create(<ProfileStatus status="social sity" />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.length).not.toBeNull();
    });
    test("after creation input should be displayed with correct status", () => {
        const component = create(<ProfileStatus status="social sity" />);
        const root = component.root;

        expect(() => {
            let input = root.findByType('input');
        }).toThrow();
    });
    test("after creation span should be displayed with correct status", () => {
        const component = create(<ProfileStatus status="social sity" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("social sity");
    });
    test("input should be desplayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="social sity" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("social sity");
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="social sity" updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});