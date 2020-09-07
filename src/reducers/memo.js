import {
	READ_MEMOS,
	READ_MEMO,
	ADD_MEMO,
	UPDATE_MEMO,
	DELETE_MEMO,
} from '../actions';

//ID適当に生成
const getUniqueStr = () => {
	return new Date().getTime().toString(77)
}

//アクションに応じて状態を変える。
export default (memos = {}, action) => {
	switch(action.type){
		case READ_MEMO:
			return memos;
		case READ_MEMO:
			return memos;
		case ADD_MEMO:
			const insertData = {
		 		id : getUniqueStr(),
		 		title : action.params.title,
		 		memo : action.params.memo,
			}
			return { ...memos,[getUniqueStr()] : insertData};
		case UPDATE_MEMO
		 	const updateDate = {
		 		id : action.id,
		 		title : action.params.title,
		 		memo : action.params.memo,
			}
			return { ...memos,[updateDate.id] : updateDate};
		case DELETE_MEMO
			delete memos[action.id];
			return {...memos}
		default:
			return memos;
	}
}