import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProblemById } from "../../services/modules/problem";

export const fetchProblemAction = createAsyncThunk("fetchProblem",(payload , {dispatch})=>{
    getProblemById(payload).then(res => {
       dispatch(changeProblemInfoAction(res))
       dispatch(changeCodeTemplateAction(res))
    })
})

const problemSlice = createSlice({
    name:'problem',
    initialState:{
        problemInfo:{
           title: 'tidas',
           access_count: 0,
           access_percent: 0,
           comment_count: 0,
           content: "sed",
           difficulty: 2,
           show_content: "给你两组点，其中第一组中有 `size1` 个点，第二组中有 `size2` 个点，且 `size1 >= size2` 。\r\n\r\n  任意两点间的连接成本 `cost` 由大小为 `size1 x size2` 矩阵给出，其中 `cost[i][j]` 是第一组中的点 `i` 和第二组中的点 `j` 的连接成本。如果两个组中的每个点都与另一组中的一个或多个点连接，则称这两组点是连通的。换言之，第一组中的每个点必须至少与第二组中的一个点连接，且第二组中的每个点必须至少与第一组中的一个点连接。\r\n\r\n  返回连通两组点所需的最小成本。\r\n\r\n\r\n  **示例 1：**\r\n\r\n  ![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/09/20/ex1.jpg)\r\n\r\n```\r\n   输入：cost = [[15, 96], [36, 2\\]]\r\n   输出：17\r\n   解释：连通两组点的最佳方法是：\r\n   1--A\r\n   2--B\r\n   总成本为 17 。\r\n```\r\n\r\n\r\n  **示例 2：**\r\n\r\n  ![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/09/20/ex2.jpg)\r\n```\r\n  输入：cost = [[1, 3, 5], [4, 1, 1], [1, 5, 3]]\r\n  输出：4\r\n  解释：连通两组点的最佳方法是：\r\n  1--A\r\n  2--B\r\n  2--C\r\n  3--A\r\n  最小成本为 4 。\r\n  请注意，虽然有多个点连接到第一组中的点 2 和第二组中的点 A ，但由于题目并不限制连接点的数目，所以只需要关心最低总成本。\r\n```\r\n\r\n\r\n  **示例 3：**\r\n\r\n```\r\n  输入：cost = [[2, 5, 1], [3, 4, 7], [8, 1, 2], [6, 2, 4], [3, 8, 8]]\r\n  输出：10\r\n```\r\n\r\n  提示：\r\n\r\n\r\n  *   `size1 == cost.length`\r\n  *   `size2 == cost[i].length`\r\n  *   `1 <= size1, size2 <= 12`\r\n  *   `size1 >= size2`\r\n  *   `0 <= cost[i][j] <= 100`",
           solve_count: 0,
           submit_count: 0,
           tags: "哈希表"
        },
        codeTemplate:
        [
            {
                "id": 1,
                "created_at": "2023-07-16 15:43:27.511",
                "updated_at": "2023-07-16 15:43:27.511",
                "DeletedAt": null,
                "problem_id": 19,
                "language": "Golang",
                "template": "func AddTwoNum(a int,b int)int{\n\n}"
            },
            {
                "id": 2,
                "created_at": "2023-07-16 15:43:27.511",
                "updated_at": "2023-07-16 15:43:27.511",
                "DeletedAt": null,
                "problem_id": 19,
                "language": "C",
                "template": "long AddTwoNum(long a, long b) {\n  return a+b;\n}"
            },
            {
                "id": 3,
                "created_at": "2023-07-16 15:43:27.511",
                "updated_at": "2023-07-16 15:43:27.511",
                "DeletedAt": null,
                "problem_id": 19,
                "language": "JavaScript",
                "template": "function addTwoNum(a, b) {\n \n}"
            }
        ],
        codeLang:'C'
    },
    reducers:{
        changeProblemInfoAction(state,{payload}){
            state.problemInfo= payload?.data?.problem
        },
        changeCodeTemplateAction(state,{payload}){
            state.codeTemplate= payload?.data?.templates
        },
        changeCodeLangAction(state,{payload}){
            state.codeLang = payload
        }
    }
})

export const {
    changeProblemInfoAction,
    changeCodeTemplateAction,
    changeCodeLangAction
} = problemSlice.actions
export default problemSlice.reducer