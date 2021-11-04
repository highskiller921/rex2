import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react'
import LoadingBox from '../components/Loadingbox';
import MessageBox from '../components/MessageBox';
import {listOrderMine} from '../actions/orderActions'

export default function OrderHistoryScreen(props) {
    const orderMineList = useSelector ((state) => state.orderMineList);
    const {loading, error, orders}= orderMineList;
    const dispatch =useDispatch();
    useEffect(()=>{
        dispatch(listOrderMine());
    },[dispatch]);
    return (
        <div>
            <h1>Order History</h1>
            {loading
            ? <LoadingBox></LoadingBox>
            : error
            ? <MessageBox varient ="danger">{error}</MessageBox>
            :
            (
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DATE</th>
                            <th>TOTAL</th>
                            <th>PAID</th>
                            <th>DELIVERED</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        { orders.map((order) => (
                            <tr key ={order._id}>
                                <td>{order._id}</td>
                                <td>{order.createdAt}</td>
                                <td>{order.totalPrice.toFixed(2)}</td>
                                <td>{order.isPaid? order.paidAt.substring(0.10):'No'}</td>
                                <td>{order.isDelivered? order.deliveredAt.substring(0.10):'No'}</td>
                                <td>
                                  <button type="button" className="small"
                                          onClick={()=> {
                                              props.history.push(`/order/${order.id}`);
                                        }}>
                                    Details
                                  </button>
                                </td>
                             </tr>   
                        ))}
                    </tbody>
                </table>
            )
        }
        </div>
    )
}
