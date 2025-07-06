'use client'

import { ExcellentIcon, GoodIcon, AverageIcon, PoorIcon } from "@/components/atom/icons"
import { useLocale } from "@/hooks/use-locale"

export default function ComparisonTable() {
  const { t } = useLocale();

  return (
    <div className="flex w-full max-w-6xl flex-col gap-8 pt-16">
      <div className="flex w-full flex-col gap-4 text-center">
        <h3 className="font-heading font-bold text-2xl sm:text-3xl rtl:font-black">
          {t("components.pricing.comparison.title")}
        </h3>
        <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7 rtl:text-base rtl:font-medium">
          {t("components.pricing.comparison.subtitle")}
        </p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="p-4 text-left rtl:text-right font-semibold rtl:font-bold">{t("components.pricing.comparison.tableHeaders.features")}</th>
              <th className="p-4 text-center font-semibold rtl:font-bold">{t("components.pricing.comparison.tableHeaders.databayt")}</th>
              <th className="p-4 text-center font-semibold rtl:font-bold">{t("components.pricing.comparison.tableHeaders.agencies")}</th>
              <th className="p-4 text-center font-semibold whitespace-nowrap rtl:font-bold">{t("components.pricing.comparison.tableHeaders.inHouse")}</th>
              <th className="p-4 text-center font-semibold rtl:font-bold">{t("components.pricing.comparison.tableHeaders.freelancers")}</th>
              <th className="p-4 text-center font-semibold rtl:font-bold">{t("components.pricing.comparison.tableHeaders.diy")}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-4">
                <div>
                  <div className="font-medium rtl:font-bold">{t("components.pricing.comparison.rows.quality.title")}</div>
                  <div className="text-sm text-muted-foreground max-w-xs rtl:text-base rtl:font-medium">
                    {t("components.pricing.comparison.rows.quality.description")}
                  </div>
                </div>
              </td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><ExcellentIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><ExcellentIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><AverageIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><AverageIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><GoodIcon /></div></td>
            </tr>
            <tr className="border-b">
              <td className="p-4">
                <div>
                  <div className="font-medium rtl:font-bold">{t("components.pricing.comparison.rows.costEffectiveness.title")}</div>
                  <div className="text-sm text-muted-foreground max-w-xs rtl:text-base rtl:font-medium">
                    {t("components.pricing.comparison.rows.costEffectiveness.description")}
                  </div>
                </div>
              </td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><ExcellentIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><PoorIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><AverageIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><ExcellentIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><ExcellentIcon /></div></td>
            </tr>
            <tr className="border-b">
              <td className="p-4">
                <div>
                  <div className="font-medium rtl:font-bold">{t("components.pricing.comparison.rows.fastTurnaround.title")}</div>
                  <div className="text-sm text-muted-foreground max-w-xs rtl:text-base rtl:font-medium">
                    {t("components.pricing.comparison.rows.fastTurnaround.description")}
                  </div>
                </div>
              </td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><ExcellentIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><GoodIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><PoorIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><ExcellentIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><ExcellentIcon /></div></td>
            </tr>
            <tr className="border-b">
              <td className="p-4">
                <div>
                  <div className="font-medium rtl:font-bold">{t("components.pricing.comparison.rows.ongoingSupport.title")}</div>
                  <div className="text-sm text-muted-foreground max-w-xs rtl:text-base rtl:font-medium">
                    {t("components.pricing.comparison.rows.ongoingSupport.description")}
                  </div>
                </div>
              </td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><ExcellentIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><GoodIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><ExcellentIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><AverageIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><PoorIcon /></div></td>
            </tr>
            <tr className="border-b">
              <td className="p-4">
                <div>
                  <div className="font-medium rtl:font-bold">{t("components.pricing.comparison.rows.scalability.title")}</div>
                  <div className="text-sm text-muted-foreground max-w-xs rtl:text-base rtl:font-medium">
                    {t("components.pricing.comparison.rows.scalability.description")}
                  </div>
                </div>
              </td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><ExcellentIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><ExcellentIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><GoodIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><AverageIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><PoorIcon /></div></td>
            </tr>
            <tr className="border-b">
              <td className="p-4">
                <div>
                  <div className="font-medium rtl:font-bold">{t("components.pricing.comparison.rows.industrySavvy.title")}</div>
                  <div className="text-sm text-muted-foreground max-w-xs rtl:text-base rtl:font-medium">
                    {t("components.pricing.comparison.rows.industrySavvy.description")}
                  </div>
                </div>
              </td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><ExcellentIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><ExcellentIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><GoodIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><GoodIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><GoodIcon /></div></td>
            </tr>
            <tr className="border-b">
              <td className="p-4">
                <div>
                  <div className="font-medium rtl:font-bold">{t("components.pricing.comparison.rows.reliability.title")}</div>
                  <div className="text-sm text-muted-foreground max-w-xs rtl:text-base rtl:font-medium">
                    {t("components.pricing.comparison.rows.reliability.description")}
                  </div>
                </div>
              </td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><ExcellentIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><ExcellentIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><AverageIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><GoodIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><GoodIcon /></div></td>
            </tr>
            <tr className="border-b">
              <td className="p-4">
                <div>
                  <div className="font-medium rtl:font-bold">{t("components.pricing.comparison.rows.teamSupport.title")}</div>
                  <div className="text-sm text-muted-foreground max-w-xs rtl:text-base rtl:font-medium">
                    {t("components.pricing.comparison.rows.teamSupport.description")}
                  </div>
                </div>
              </td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><ExcellentIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><ExcellentIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><ExcellentIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><PoorIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><PoorIcon /></div></td>
            </tr>
            <tr className="border-b">
              <td className="p-4">
                <div>
                  <div className="font-medium rtl:font-bold">{t("components.pricing.comparison.rows.productionProcess.title")}</div>
                  <div className="text-sm text-muted-foreground max-w-xs rtl:text-base rtl:font-medium">
                    {t("components.pricing.comparison.rows.productionProcess.description")}
                  </div>
                </div>
              </td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><ExcellentIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><ExcellentIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><AverageIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><GoodIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><GoodIcon /></div></td>
            </tr>
            <tr className="border-b">
              <td className="p-4">
                <div>
                  <div className="font-medium rtl:font-bold">{t("components.pricing.comparison.rows.revisionFlexibility.title")}</div>
                  <div className="text-sm text-muted-foreground max-w-xs rtl:text-base rtl:font-medium">
                    {t("components.pricing.comparison.rows.revisionFlexibility.description")}
                  </div>
                </div>
              </td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><ExcellentIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><AverageIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><ExcellentIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><AverageIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><PoorIcon /></div></td>
            </tr>
            <tr className="border-b">
              <td className="p-4">
                <div>
                  <div className="font-medium rtl:font-bold">{t("components.pricing.comparison.rows.technicalExpertise.title")}</div>
                  <div className="text-sm text-muted-foreground max-w-xs rtl:text-base rtl:font-medium">
                    {t("components.pricing.comparison.rows.technicalExpertise.description")}
                  </div>
                </div>
              </td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><ExcellentIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><ExcellentIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><GoodIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><AverageIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><AverageIcon /></div></td>
            </tr>
            <tr className="border-b">
              <td className="p-4">
                <div>
                  <div className="font-medium rtl:font-bold">{t("components.pricing.comparison.rows.assetManagement.title")}</div>
                  <div className="text-sm text-muted-foreground max-w-xs rtl:text-base rtl:font-medium">
                    {t("components.pricing.comparison.rows.assetManagement.description")}
                  </div>
                </div>
              </td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><ExcellentIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><GoodIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><ExcellentIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><PoorIcon /></div></td>
              <td className="p-4"><div className="flex justify-center items-center h-full"><PoorIcon /></div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
} 