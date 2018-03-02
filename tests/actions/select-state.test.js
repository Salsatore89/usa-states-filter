import { selectState } from '../../src/actions/select-state';

test('should return the selected state', () => {
    const action = selectState({ "AK": "Alaska" })
    expect(action).toEqual({
        type: "STATE_SELECTED",
        "payload": { "AK": "Alaska" }
    });
});