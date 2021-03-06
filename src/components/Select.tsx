import * as React from 'react'
const { useState } = React

interface selectListItem {
    name?: string,
    className: string,
    src: string
}
interface TSelectChange {
    (selectIndex: number): void
}

interface SelectPro {
    list: selectListItem[],
    activeIndex: number,
    change: TSelectChange
}

export const Select = (props: SelectPro) => {
    let activeIndex = props.activeIndex
    let [selectName, setSelectName] = useState(props.list[activeIndex].name || props.list[activeIndex].src)
    let [isShow, setIsShow] = useState(false)
    let hanldeItem = (index: number): void => {
        setSelectName(props.list[index].name || props.list[index].src)
        props.change(index)
        setIsShow(false)
    }
    let tapShow = (): void => {
        setIsShow(!isShow)
    }
    const styles: any = {
        lists: {
            position: 'absolute',
            top: '0px',
            left: '0px',
            backgroundColor: '#fff',
            // border: '1px solid #999',
            zIndex: 9,
        },
        img: {
            width: '200px',
        }
    }
    return <div style={{ position: 'relative' }}>
        <div style={style.title} onClick={tapShow}>
            <img style={styles.img} src={require(`../${selectName}`)} />
        </div>
        {isShow && <div style={styles.lists}>
            {props.list.map((e, index) =>
                <div key={index} onClick={hanldeItem.bind(null, index)}>
                    {e.name &&
                        <span>{e.name}</span>
                    }
                    {e.src &&
                        <img style={styles.img} src={require(`../${e.src}`)} />
                    }
                </div>
            )}
        </div>
        }
    </div>
}


const style = {
    title: {
        minWidth: '50px',
        borderRadius: '2px',
        marginTop: '20px',
        // border: '1px solid rgba(0, 0, 0, .5)'
    }
}