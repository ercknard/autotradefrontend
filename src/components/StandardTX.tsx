import React from "react";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

const govs = [
  {
    value: "1",
    label: "gov 1",
  },
  {
    value: "2",
    label: "gov 2",
  },
  {
    value: "3",
    label: "gov 3",
  },
  {
    value: "4",
    label: "gov 4",
  },
];

export default function StandardTX() {
  return (
    <>
      <div className="bg-[#342344] p-4 rounded-md drop-shadow-md mb-4">
        <div className="flex flex-col gap-4 justify-end">
          <Typography className="text-[#f5f5f5]" variant="h6">
            Manage AutoGovernor
          </Typography>
          <Stack spacing={2} direction="row">
            <Button
              className="bg-[#ffd36b] text-[#5e1e64] hover:bg-[#ffe66b] font-semibold min-w-[105.19px]"
              variant="contained"
            >
              Create
            </Button>
            <Button
              className="bg-[#ffd36b] text-[#5e1e64] hover:bg-[#ffe66b] font-semibold min-w-[105.19px]"
              variant="contained"
            >
              Manage
            </Button>
          </Stack>
        </div>
      </div>
      <div className="bg-[#342344] p-4 rounded-md drop-shadow-md">
        <Typography className="text-[#f5f5f5]" variant="h6" gutterBottom>
          Execute AutoGovernor Transaction
        </Typography>
        <div className="mt-8">
          <TextField
            className="min-w-full"
            id="outlined-select-currency"
            select
            label="Select AutoGovernor"
          >
            {govs.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <Divider className="mt-8 mb-4" />

          <TextField
            className="mt-4 min-w-full"
            id="outlined-basic"
            label="To*"
            variant="outlined"
            helperText="Address or .mrx MNS name"
          />

          <TextField
            className="mt-4 min-w-full"
            id="outlined-basic"
            label="Value*"
            variant="outlined"
            helperText="Amount of MRX to send"
          />

          <TextField
            className="mt-4 min-w-full"
            id="outlined-basic"
            label="Data"
            variant="outlined"
            multiline
            rows={5}
            helperText="Optional hexadecimal data"
          />
        </div>
        <div className="flex justify-end mt-2">
          <Stack spacing={2} direction="row">
            <Button
              className="bg-[#ffd36b] text-[#5e1e64] hover:bg-[#ffe66b] font-semibold min-w-[105.19px]"
              variant="contained"
            >
              Clear
            </Button>
            <Button
              className="bg-[#ffd36b] text-[#5e1e64] hover:bg-[#ffe66b] font-semibold min-w-[105.19px]"
              variant="contained"
            >
              Execute
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
}
