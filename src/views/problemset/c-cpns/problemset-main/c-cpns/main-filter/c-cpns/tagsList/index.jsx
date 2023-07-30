import React, { memo, useState } from 'react'
import classNames from 'classnames'
import { TagsListWrapper } from './styled'

const tagsList = [
    {
        titleText: '基本',
        tags: ['数组', '字符串', '排序', '矩阵', '模拟', '枚举', '字符串匹配', '桶排序', '计数排序', '基数排序']
    },
    {
        titleText: '算法',
        tags: ['动态规划', '深度优先搜索', '贪心', '广度优先搜索', '二分查找', '回溯', '递归', '分治', '记忆化搜索', '归并排序', '快速选择']
    },
    {
        titleText: '基础数据结构',
        tags: ['哈希表', '树', '二叉树', '栈', '堆（优先队列）', '图', '链表', '有序集合', '二叉搜索树', '单调栈']
    },
    {
        titleText: '高级数据结构',
        tags: ['并查集', '字典树', '线段树', '树状数组', '后缀数组']
    },
    {
        titleText: '技巧',
        tags: ['双指针', '位运算', '前缀和', '计数', '滑动窗口', '状态压缩', '哈希函数', '滚动哈希', '扫描线']
    },
    {
        titleText: '数学',
        tags: ['数学', '数论', '几何', '博弈', '组合数学', '随机化', '概率与统计', '水塘抽样', '拒绝采样']
    },
    {
        titleText: '其他',
        tags: ['数据库', '设计', '数据流', '交互', '脑筋急转弯', '迭代器', '多线程', 'Shell']
    },
]


const TagsList = memo((props) => {

    const { allOpen, tagsChangeHandler } = props
    const [tagsOpen, setTagsOpen] = useState([])
    const [tagsSelect, setTagsSelect] = useState([])

    const tagsSelectClickHandler = (item) => {
        const newList = [...tagsSelect];
        newList.includes(item) ? newList.splice(newList.findIndex((itemSelect) => itemSelect === item), 1) : newList.push(item)
        setTagsSelect(newList)
        tagsChangeHandler(item)
    }

    const tagsOpenClickHandler = (index) => {
        const newList = [...tagsOpen];
        newList.includes(index) ? newList.splice(newList.findIndex((item) => item === index), 1) : newList.push(index)
        setTagsOpen(newList)
    }

    return (<TagsListWrapper>
        {
            tagsList.map((item, index) =>
                <div className={classNames("tags-item", { active: tagsOpen.includes(index) || allOpen })} key={index}>
                    <div className="item-title">
                        <span className="title-text">
                            {item.titleText}
                        </span>
                        <span className="title-svg" onClick={() => { tagsOpenClickHandler(index) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" >
                                <path fillRule="evenodd" d="M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z" clipRule="evenodd">
                                </path>
                            </svg>
                        </span>
                    </div>
                    <div className={"item-main"}>
                        {
                            item.tags.map((item, index) =>
                                <div className={classNames("tags", { active: tagsSelect.includes(item) })}
                                    key={index}
                                    onClick={() => { tagsSelectClickHandler(item) }}
                                >{item}</div>
                            )
                        }
                    </div>
                </div>
            )
        }
    </TagsListWrapper>)
}
)

export default TagsList