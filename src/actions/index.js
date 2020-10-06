export const READ_MEMOS = "READ_MEMOS";
export const READ_MEMO = "READ_MEMO";
export const ADD_MEMO = "ADD_MEMO";
export const UPDATE_MEMO = "UPDATE_MEMO";
export const DELETE_MEMO = "DELETE_MEMO";

//一覧取得
export const getMemos = () => ({
	type : READ_MEMOS,
});

//idで指定したメモを取得
export const getMemo = (id) => ({
	type : READ_MEMO,
	params : id,
});

//新規メモ
export const addMemo = (values) => ({
	type : ADD_MEMO,
	params : values,
});

//メモ更新
export const updateMemo = (id, values) => ({
	type : UPDATE_MEMO,
	id : id,
	params : values,
});

//メモ削除
export const deleteMemo = (id) => ({
	type : DELETE_MEMO,
	id : id,
});