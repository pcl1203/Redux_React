import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/types";

describe('saveComment', () => {
    it('has a correct type', () => {
        const action = saveComment();
        expect(action.type).toEqual(SAVE_COMMENT);
    });

    it('has a correct payload', () => {
        const action = saveComment('New');
        expect(action.payload).toEqual('New');
    });
} );