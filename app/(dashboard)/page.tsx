import { GetFormStats } from "@/actions/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ReactNode, Suspense } from "react";
import { LuView } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { TbArrowBounce } from "react-icons/tb";
import { Separator } from "@/components/ui/separator";
import CreateFormBtn from "@/components/CreateFormBtn";

const PERCENT = "%";

export default function Home() {
  return (
    <div className="container pt-4">
      <Suspense fallback={<StatsCards loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
      <Separator className="my-6" />
      <h2 className="text-3xl font-bold col-span-2">فرم های شما 😊</h2>
      <Separator className="my-6" />
      <CreateFormBtn />
    </div>
  );
}

async function CardStatsWrapper() {
  const stats = await GetFormStats();

  return <StatsCards loading={false} data={stats} />;
}

interface StatsCardProps {
  data?: Awaited<ReturnType<typeof GetFormStats>>;
  loading: boolean;
}
function StatsCards(props: StatsCardProps) {
  const { data, loading } = props;

  return (
    <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="بازدید کل"
        icon={<LuView className="text-blue-600" />}
        helperText="بازدید کل فرم ها"
        value={data?.visits.toLocaleString("fa-IR") || ""}
        loading={loading}
        className="shadow-md shadow-blue-600"
      />

      <StatsCard
        title="تعداد ارسالی ها"
        icon={<FaWpforms className="text-yellow-600" />}
        helperText="تعداد کل پاسخ ارسالی ثبت شده"
        value={data?.submissions.toLocaleString("fa-IR") + PERCENT || ""}
        loading={loading}
        className="shadow-md shadow-yellow-600"
      />

      <StatsCard
        title=" درصد ارسال پاسخ"
        icon={<HiCursorClick className="text-green-600" />}
        helperText="درصد بازدیدی که به ارسال پاسخ ختم شده"
        value={data?.submissionRate.toLocaleString("fa-IR") + PERCENT || ""}
        loading={loading}
        className="shadow-md shadow-green-600"
      />

      <StatsCard
        title="نرخ پرش "
        icon={<TbArrowBounce className="text-red-600" />}
        helperText="درصد بازدیدی که پاسخی نداده اند"
        value={data?.bounceRate.toLocaleString("fa-IR") + PERCENT || ""}
        loading={loading}
        className="shadow-md shadow-red-600"
      />
    </div>
  );
}

function StatsCard({
  title,
  value,
  icon,
  helperText,
  loading,
  className,
}: {
  title: string;
  value: string;
  icon: ReactNode;
  helperText: string;
  className: string;
  loading: boolean;
}) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {loading && (
            <Skeleton>
              <span className="opacity-0">0</span>
            </Skeleton>
          )}
          {!loading && value}
        </div>
        <p className="text-xs text-muted-foreground pt-1">{helperText}</p>
      </CardContent>
    </Card>
  );
}
