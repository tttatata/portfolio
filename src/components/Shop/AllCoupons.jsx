/* eslint-disable jsx-a11y/role-supports-aria-props */
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { DataGrid, GridCloseIcon } from "@material-ui/data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/styles";
import Loader from "../Layout/Loader";
import { server } from "../../server";
import { toast } from "react-toastify";

const AllCoupons = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [coupouns, setCoupouns] = useState([]);
  const [minAmount, setMinAmout] = useState(null);
  const [maxAmount, setMaxAmount] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [value, setValue] = useState(null);
  const { seller } = useSelector((state) => state.seller);
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${server}/coupon/get-coupon/${seller._id}`, {
        // Get all coupons of a seller
        withCredentials: true,
      })
      .then((res) => {
        setIsLoading(false);
        setCoupouns(res.data.couponCodes);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, [dispatch, seller._id]);

  const handleDelete = async (id) => {
    axios
      .delete(`${server}/coupon/delete-coupon/${id}`, { withCredentials: true }) // Delete a coupon
      .then((res) => {
        toast.success("Xóa mã giảm giá thành công!");
      });
    window.location.reload();
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    await axios
      .post(
        `${server}/coupon/create-coupon-code`,
        {
          name,
          minAmount,
          maxAmount,
          selectedProducts,
          value,
          shopId: seller._id,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("Tạo mã giảm giá thành công");
        setOpen(false);
        window.location.reload();
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const columns = [
    {
      field: "name",
      headerName: "Mã giảm giá",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "minAmount",
      headerName: "Số tiền yêu cầu",
      minWidth: 100,
      flex: 0.6,
    },
    {
      field: "maxAmount",
      headerName: "Giảm tối đa",
      minWidth: 100,
      flex: 0.6,
    },
    {
      field: "price",
      headerName: "(%) Giảm giá",
      minWidth: 100,
      flex: 0.6,
    },

    {
      field: "Xóa",
      flex: 0.8,
      minWidth: 120,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => handleDelete(params.id)}>
              <AiOutlineDelete size={20} />
            </Button>
          </>
        );
      },
    },
  ];

  const row = [];

  coupouns &&
    coupouns.forEach((item) => {
      row.push({
        id: item._id,
        name: item.name,
        minAmount: item.minAmount.toLocaleString("vi-VN", {
          style: "currency",
          currency: "VND",
        }),
        maxAmount: item.maxAmount.toLocaleString("vi-VN", {
          style: "currency",
          currency: "VND",
        }),
        price: item.value + " %",
      });
    });

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid container justify="flex-end" style={{ position: "relative" }}>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            onClick={() => setOpen(true)}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: 2,
            }}
          >
            Tạo mã giảm giá
          </Button>
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />

          <Dialog open={open} onClose={() => setOpen(false)}>
            <IconButton
              style={{ position: "absolute", right: "10px", top: "10px" }}
              onClick={() => setOpen(false)}
            >
              <GridCloseIcon />
            </IconButton>
            <DialogTitle>Tạo mã giảm giá</DialogTitle>
            <DialogContent>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Tên mã giảm"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nhập tên mã giảm giá..."
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="(%) Giảm giá"
                  required
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Nhập (%) giảm giá..."
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Số tiền nhỏ nhất"
                  value={minAmount || ""}
                  onChange={(e) =>
                    setMinAmout(Number(e.target.value.replace(/\D/g, "")))
                  }
                  placeholder="Nhập số tiền nhỏ nhất"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Giảm tối đa"
                  value={maxAmount || ""}
                  onChange={(e) =>
                    setMaxAmount(Number(e.target.value.replace(/\D/g, "")))
                  }
                  placeholder="Giảm tối đa"
                  fullWidth
                  margin="normal"
                />
                {/* <Select
                  value={selectedProducts}
                  onChange={(e) => setSelectedProducts(e.target.value)}
                  fullWidth
                  margin="normal"
                >
                  <MenuItem value="Choose your selected products">
                    Chọn sản phẩm
                  </MenuItem>
                  {products &&
                    products.map((i) => (
                      <MenuItem value={i.name} key={i.name}>
                        {i.name}
                      </MenuItem>
                    ))}
                </Select> */}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Tạo mã
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </Grid>
      )}
    </>
  );
};

export default AllCoupons;
