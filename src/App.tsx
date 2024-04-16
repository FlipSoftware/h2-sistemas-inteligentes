import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function App() {
    function getCurrentYear(): number {
        const currentDate = new Date();
        return currentDate.getFullYear();
    }

    return (
        <div className="flex flex-col min-h-screen">
            <div className="grid">
                <nav className="sticky top-0 z-10 w-full bg-background bg-op-50 backdrop-blur-lg drop-shadow-xl">
                    <div className="flex-center h-[60px] px-4">
                        <div className="flex-center space-x-4">
                            <a
                                href="#"
                                className="flex-center space-x-2 hover:text-yellow-3 text-xl"
                            >
                                <span className="i-mage:light-bulb-electricity mb-1 text-2xl" />
                                <span className="font-semibold text-black <md:hidden">
                                    WAV.OLT
                                </span>
                            </a>
                            <div className="grid grid-flow-col gap-4 grid-place-items-center">
                                <a href="#">Soluções</a>
                                <a href="#">Preços</a>
                                <a href="#">Sobre</a>
                            </div>
                        </div>
                    </div>
                </nav>
                <main className="px-16 <md:px-8 w-screen -mt-16 <md:-mt-8">
                    <div className="relative w-screen -ml-16 <md:-ml-8">
                        <img
                            alt="Hero"
                            className="object-cover w-full max-h-80vh <md:max-h-40vh"
                            src="https://images.unsplash.com/photo-1552862750-746b8f6f7f25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <div className="absolute inset-0 backdrop-blur-md flex justify-center items-center p-4 text-center">
                            <div className="space-y-4">
                                <div className="space-y-2 max-w-[800px] ring-2 ring-black ring-op-50 bg-black bg-op-20 p8 text-white">
                                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                                        Automação. Energia Solar. Carregadores.
                                    </h1>
                                    <p className="max-w-[700px md:text-xl lg:text-base xl:text-xl">
                                        Soluções eficientes para corporações e
                                        residências.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="w-full py-12 md:py-24 lg:py-32">
                        <div className="grid grid-items-center grid-justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                            <div className="space-y-3">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Vantagens
                                </h2>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    A combinação perfeita de eficiência,
                                    segurança e escalabilidade.
                                </p>
                            </div>
                            <div className="grid w-full grid-flow-col <md:grid-flow-row grid-cols-center grid-items-start gap-6">
                                <Card className="max-w-xs">
                                    <CardHeader>
                                        <div className="grid grid-place-items-center">
                                            <CardTitle>Velocidade</CardTitle>
                                            <span className="i-pajamas:dashboard m-4 text-4xl text-gray-6" />
                                        </div>

                                        <CardDescription>
                                            Agilidade na hora de solicitar
                                            qualquer operação ou serviço.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>Conteúdo com tags SEO...</p>
                                    </CardContent>
                                    <CardFooter className="flex-center">
                                        <Button
                                            variant="outline"
                                            className="active:_btn_click"
                                        >
                                            Saiba mais
                                        </Button>
                                    </CardFooter>
                                </Card>
                                <Card className="max-w-xs">
                                    <CardHeader>
                                        <div className="grid grid-place-items-center">
                                            <CardTitle>Segurança</CardTitle>
                                            <span className="i-tdesign:secured m-4 text-4xl text-gray-6" />
                                        </div>

                                        <CardDescription>
                                            Altos padrões de segurança
                                            proporcionam zero preocupações.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>Conteúdo com tags SEO...</p>
                                    </CardContent>
                                    <CardFooter className="flex-center">
                                        <Button
                                            variant="outline"
                                            className="active:_btn_click"
                                        >
                                            Saiba mais
                                        </Button>
                                    </CardFooter>
                                </Card>
                                <Card className="max-w-xs">
                                    <CardHeader>
                                        <div className="grid grid-place-items-center">
                                            <CardTitle>Escalável</CardTitle>
                                            <span className="i-carbon:chart-stacked m-4 text-4xl text-gray-6" />
                                        </div>

                                        <CardDescription>
                                            Software robusto que não desaponta
                                            em grandes picos de uso.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>Conteúdo com tags SEO...</p>
                                    </CardContent>
                                    <CardFooter className="flex-center">
                                        <Button
                                            variant="outline"
                                            className="active:_btn_click"
                                        >
                                            Saiba mais
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </section>
                    <section className="w-full py-12 md:py-24 lg:py-32">
                        <div className="grid-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                            <div className="space-y-3">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Testado e Aprovado
                                </h2>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Nossos clientes atestam a qualidade de
                                    nossos produtos.
                                </p>
                            </div>
                            <div className="grid-center w-full grid-flow-col <md:grid-flow-row gap-6 md:grid-cols-3 md:gap-12">
                                <div className="mx-auto flex-center w-full space-y-2">
                                    <img
                                        alt="Avatar"
                                        className="rounded-full object-cover"
                                        height="150"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "150/150",
                                            objectFit: "cover",
                                        }}
                                        width="150"
                                    />
                                </div>
                                <div className="mx-auto flex-center w-full space-y-2">
                                    <img
                                        alt="Avatar"
                                        className="rounded-full object-cover"
                                        height="150"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "150/150",
                                            objectFit: "cover",
                                        }}
                                        width="150"
                                    />
                                </div>
                                <div className="mx-auto flex-center w-full space-y-2">
                                    <img
                                        alt="Avatar"
                                        className="rounded-full object-cover"
                                        height="150"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "150/150",
                                            objectFit: "cover",
                                        }}
                                        width="150"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                        <div className="grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Soluções diversas adequadas ao cliente
                                </h2>
                                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    De condomínios até grandes corporações.
                                </p>
                            </div>
                            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                                <img
                                    alt="Image"
                                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                                    height="310"
                                    src="/placeholder.svg"
                                    width="550"
                                />

                                <div className="flex flex-col justify-center space-y-4">
                                    <ul>
                                        <li>
                                            <div className="grid gap-1">
                                                <h3 className="text-xl font-bold">
                                                    Vídeo Promocional
                                                </h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    Entenda mais
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </section>
                    <section className="w-full py-12 md:py-24 lg:py-32 border-t">
                        <div className="px-4 md:px-6">
                            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
                                <div className="space-y-4">
                                    <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                        Custo-benefício
                                    </div>
                                    <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                    Tenha um produto eficiente que caiba no orçamento
                                    </h2>
                                    <a
                                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                        href="#"
                                    >
                                        Consultar Preços
                                    </a>
                                </div>
                                <div className="flex flex-col items-start space-y-4">
                                    <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                        Garantia
                                    </div>
                                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                                        Conteúdo com tags SEO comprovando a garantia e eficácia do produto...
                                    </p>
                                    <a
                                        className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                        href="#"
                                    >
                                        Entenda mais
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="bg-gray-100 dark:bg-gray-800">
                        <section className="w-full py-12 md:py-24 lg:py-32">
                            <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                                <div className="space-y-3">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                        Inscreva-se e tenha acesso aos
                                        benefícios.
                                    </h2>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Receba atualizações e vantagens
                                        cadastrando seu e-mail.
                                    </p>
                                </div>
                                <div className="flex w-full max-w-md mx-auto items-center justify-center space-x-2">
                                    <Input
                                        className="max-w-xs flex-1"
                                        placeholder="Seu e-mail"
                                        type="email"
                                    />
                                    <Button type="submit">Inscrever</Button>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
            <footer className="w-full py-12">
                <div className="flex flex-col items-center justify-center gap-4 text-center md:gap-10 md:flex-row">
                    <p className="text-sm tracking-wide">
                        © 2022 - {getCurrentYear()} WAV.OLT
                    </p>
                    <div className="grid grid-cols-3 items-center justify-center gap-4 md:grid-cols-3">
                        <a
                            href="#"
                            className="text-sm font-medium"
                        >
                            Privacidade
                        </a>
                        <a
                            href="#"
                            className="text-sm font-medium"
                        >
                            Termos
                        </a>
                        <a
                            href="#"
                            className="text-sm font-medium"
                        >
                            Política
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
