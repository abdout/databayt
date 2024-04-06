import React from 'react';
import { ProjectProvider } from "@/provider/project";
import { ModalProvider } from "@/provider/modal";
import { CreateProvider } from "@/provider/create";
import { PostProjectProvider } from "@/provider/post";
import { TaskProvider } from "@/provider/task";
import Head from 'next/head';
import { HeaderProvider } from './header';
import Footer from '@/model/report/footer';
import { FooterProvider } from './footer';
import { KitProvider } from './kit';

export const MainProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    
      <ModalProvider>
        <CreateProvider>
          <PostProjectProvider>
            <ProjectProvider>
              <TaskProvider>
                <HeaderProvider>
                  <FooterProvider>
                    <KitProvider>
                {children}
                    </KitProvider>
                  </FooterProvider>
                </HeaderProvider>
              </TaskProvider>
            </ProjectProvider>
          </PostProjectProvider>
        </CreateProvider>
      </ModalProvider>
    
  );
};