import { LibComponents } from "./shared/components";

export default function Home() {

  const onSubmit = () => {

  }

  const bannerData = {
    title: "Explore os filtros para buscar o perfil perfeito",
    description: "Encontre ou ofereça serviços domésticos com facilidade. Junte-se à comunidade de profissionais domésticos qualificados e proprietários satisfeitos.",
    buttonLabel: "Explore Perfils"
  }

  return (
    <div>
      <LibComponents.Header bannerData={bannerData} onClickBanner={onSubmit} />
    </div>
  );
}
