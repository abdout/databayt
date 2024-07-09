'use client';
import React, { useState } from 'react';
import { DataTable } from '@/components/table/data-table';
import { columns } from '@/components/table/coloum';
import { useMember } from '@/components/platform/member/context';
import { Component } from '@/components/chart/a';
import { DountChart } from '@/components/chart/ch';

const Member = () => {

  const { members } = useMember();

  return (
    <div>
      <DataTable columns={columns} data={members} />
      
    </div>
  );
};

export default Member;