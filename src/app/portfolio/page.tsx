"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  ExternalLink,
  User,
  Linkedin,
  Code,
  Palette,
  ShoppingCart,
  Headphones,
  Settings,
  Filter,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { FooterMenus } from "@/components/layout/FooterMenus"
import { NavHeaderMenus } from "@/components/layout/NavHeaderMenus"

// Types
interface PortfolioProject {
  id: number;
  title: string;
  project_description: string;
  skills_deliverables: string;
  tools: string;
  category: string;
  store_link: string;
  client_name: string;
  client_linkedin: string;
  created_at?: string;
  updated_at?: string;
  images: string[];
}

// Constants
const CATEGORIES = [
  "All",
  "Store Development", 
  "Customer Support",
  "Graphic Design",
  "App Support",
  "Virtual Assistance",
] as const;

const CATEGORY_ICONS = {
  "Store Development": ShoppingCart,
  "Customer Support": Headphones,
  "Graphic Design": Palette,
  "App Support": Settings,
  "Virtual Assistance": User,
} as const;

// Custom Hooks
const usePortfolioData = () => {
  const [data, setData] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/portfolio");
        
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        
        const result = await res.json();
        setData(result.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch portfolio data");
        console.error("Error fetching portfolio data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

// Components
interface CategoryFilterProps {
  categories: readonly string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  const getCategoryIcon = (category: string) => {
    const IconComponent = CATEGORY_ICONS[category as keyof typeof CATEGORY_ICONS] || Code;
    return <IconComponent className="h-4 w-4" />;
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Filter className="h-4 w-4 text-muted-foreground" />
      <span className="text-sm font-medium text-muted-foreground">Filter by:</span>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category)}
          className={selectedCategory === category ? "bg-teal-600 hover:bg-teal-700" : ""}
        >
          {category !== "All" && getCategoryIcon(category)}
          {category}
        </Button>
      ))}
    </div>
  );
};

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => (
  <div className="relative w-full md:w-80">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
    <Input
      placeholder="Search projects..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      className="pl-10"
    />
  </div>
);

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  priority?: boolean;
}

const ProjectImage = ({ src, alt, className = "", onClick, priority = false }: ProjectImageProps) => {
  const [imageError, setImageError] = React.useState(false);
  
  return (
    <div className="relative w-full h-full overflow-hidden rounded-sm">
      {imageError ? (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-xs">Image not found</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover transition-transform duration-300 hover:scale-105 ${onClick ? 'cursor-pointer' : ''} ${className}`}
          onClick={onClick}
          unoptimized
          priority={priority}
          onError={() => setImageError(true)}
        />
      )}
    </div>
  );
};

interface ImageGridProps {
  images: string[];
  title: string;
  onImageClick: (index: number) => void;
}

const ImageGrid = ({ images, title, onImageClick }: ImageGridProps) => {
  // Filter out empty/null images and trim whitespace
  const validImages = images.filter(img => img && img.trim() !== '');
  
  if (!validImages.length) {
    return (
      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500 text-sm">No image available</span>
      </div>
    );
  }

  // If there's only one image, let it take the full space
  if (validImages.length === 1) {
    return (
      <div className="w-full h-full">
        <ProjectImage
          src={validImages[0]}
          alt={title}
          onClick={() => onImageClick(0)}
          priority
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 h-full gap-1">
      {/* Main image */}
      <div className="col-span-2 h-full">
        <div key={`${title}-main-${validImages[0]}`} className="h-full">
          <ProjectImage
            src={validImages[0]}
            alt={title}
            onClick={() => onImageClick(0)}
            priority
          />
        </div>
      </div>
      
      {/* Side images */}
      <div className="col-span-1 grid grid-rows-2 gap-1 h-full">
        {validImages[1] && (
          <div key={`${title}-side1-${validImages[1]}`}>
            <ProjectImage
              src={validImages[1]}
              alt={`${title} - Image 2`}
              onClick={() => onImageClick(1)}
            />
          </div>
        )}
        
        {validImages[2] && (
          <div key={`${title}-side2-${validImages[2]}`} className="relative">
            <ProjectImage
              src={validImages[2]}
              alt={`${title} - Image 3`}
              onClick={() => onImageClick(2)}
              className={validImages.length > 3 ? "filter blur-md" : ""}
            />
            {validImages.length > 3 && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-black font-bold text-lg bg-opacity-60 px-3 py-1 rounded">
                  +{validImages.length - 3} more
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

interface SkillsBadgesProps {
  skills: string;
  maxVisible?: number;
}

const SkillsBadges = ({ skills, maxVisible = 3 }: SkillsBadgesProps) => {
  const [expanded, setExpanded] = React.useState(false);
  const skillsArray = skills?.split(',').map(s => s.trim()) || [];
  const visibleCount = expanded ? skillsArray.length : maxVisible;
  return (
    <div className="flex flex-wrap gap-1">
      {skillsArray.slice(0, visibleCount).map((skill, index) => (
        <Badge key={index} variant="secondary" className="text-xs">
          {skill}
        </Badge>
      ))}
      {!expanded && skillsArray.length > maxVisible && (
        <Badge
          variant="secondary"
          className="text-xs cursor-pointer hover:bg-gray-200"
          onClick={() => setExpanded(true)}
        >
          +{skillsArray.length - maxVisible} more
        </Badge>
      )}
    </div>
  );
};

interface ToolsBadgesProps {
  tools: string;
}

const ToolsBadges = ({ tools }: ToolsBadgesProps) => {
  const toolsArray = tools?.split(',').map(t => t.trim()) || [];
  
  return (
    <div className="flex flex-wrap gap-1">
      {toolsArray.map((tool, index) => (
        <Badge key={index} variant="outline" className="text-xs">
          {tool}
        </Badge>
      ))}
    </div>
  );
};

interface ClientInfoProps {
  clientName: string;
  clientLinkedin?: string;
  storeLink?: string;
}

const ClientInfo = ({ clientName, clientLinkedin, storeLink }: ClientInfoProps) => (
  <div className="flex items-center justify-between pt-4 border-t mb-4">
    <div className="flex items-center gap-2">
      <User className="h-4 w-4 text-muted-foreground" />
      <span className="text-sm font-medium">{clientName}</span>
      {clientLinkedin && (
        <Link
          href={clientLinkedin}
          target="_blank"
          className="text-teal-600 hover:text-teal-700"
        >
          <Linkedin className="h-4 w-4" />
        </Link>
      )}
    </div>
    {storeLink && (
      <Link
        href={storeLink}
        target="_blank"
        className="flex items-center gap-1 text-sm text-teal-600 hover:text-teal-700"
      >
        View Store <ExternalLink className="h-3 w-3" />
      </Link>
    )}
  </div>
);

interface ProjectCardProps {
  project: PortfolioProject;
  onImageClick: (images: string[], index: number) => void;
}

const ProjectCard = ({ project, onImageClick }: ProjectCardProps) => {
  const getCategoryIcon = (category: string) => {
    const IconComponent = CATEGORY_ICONS[category as keyof typeof CATEGORY_ICONS] || Code;
    return <IconComponent className="h-4 w-4" />;
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow p-0">
      <div className="relative h-56 overflow-hidden">
        <ImageGrid
          images={project.images}
          title={project.title}
          onImageClick={(index) => onImageClick(project.images, index)}
        />
      </div>

      <CardHeader className="pb-3">
        <div className="mb-3">
          <Badge className="bg-teal-600 hover:bg-teal-700 text-white">
            {getCategoryIcon(project.category)}
            {project.category}
          </Badge>
        </div>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="line-clamp-3">
          {project.project_description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-sm mb-2">Key Deliverables:</h4>
          <SkillsBadges skills={project.skills_deliverables} />
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-2">Tools Used:</h4>
          <ToolsBadges tools={project.tools} />
        </div>

        <ClientInfo
          clientName={project.client_name}
          clientLinkedin={project.client_linkedin}
          storeLink={project.store_link}
        />
      </CardContent>
    </Card>
  );
};

interface ImageModalProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

const ImageModal = ({ isOpen, images, currentIndex, onClose, onNavigate }: ImageModalProps) => {
  if (!isOpen || !images.length) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background: `url(${currentImage}) center center / cover no-repeat`,
      }}
      onClick={onClose}
    >
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          background: 'rgba(0,0,0,0.5)',
        }}
      />
      
      <div
        className="relative z-10 flex flex-col items-center max-w-4xl mx-4"
        style={{ 
          background: 'rgba(255,255,255,0.05)', 
          borderRadius: '1rem', 
          boxShadow: '0 4px 32px rgba(0,0,0,0.2)' 
        }}
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute -top-5 -right-5 text-black bg-white z-10 bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-opacity"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="relative">
          <Image
            src={currentImage}
            alt={`Portfolio Image ${currentIndex + 1}`}
            width={900}
            height={600}
            className="max-h-[80vh] w-auto rounded shadow-lg"
            unoptimized
          />
        </div>

        <div className="flex justify-between items-center w-full px-6 py-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onNavigate('prev')}
            disabled={currentIndex === 0}
            className="text-white hover:text-white hover:bg-white/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <span className="text-white font-semibold">
            {currentIndex + 1} / {images.length}
          </span>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onNavigate('next')}
            disabled={currentIndex === images.length - 1}
            className="text-white hover:text-white hover:bg-white/20"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

interface HeroStatsProps {
  projectCount: number;
}

const HeroStats = ({ projectCount }: HeroStatsProps) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 w-full max-w-2xl">
    <div className="text-center space-y-2">
      <div className="text-3xl font-bold text-teal-600">{projectCount}+</div>
      <div className="text-sm font-medium text-slate-600">Projects Delivered</div>
    </div>
    <div className="text-center space-y-2">
      <div className="text-3xl font-bold text-teal-600">5</div>
      <div className="text-sm font-medium text-slate-600">Service Areas</div>
    </div>
    <div className="text-center space-y-2">
      <div className="text-3xl font-bold text-teal-600">100%</div>
      <div className="text-sm font-medium text-slate-600">Client Satisfaction</div>
    </div>
  </div>
);

// Main Component
export default function PortfolioPage() {
  const { data, loading, error } = usePortfolioData();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [modalImages, setModalImages] = useState<string[]>([]);

  // Filter projects
  const filteredProjects = data.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = [
      project.project_description,
      project.skills_deliverables,
      project.client_name,
      project.title
    ].some(field => 
      field?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return matchesCategory && matchesSearch;
  });

  // Modal handlers
  const openModal = (images: string[], index: number) => {
    setModalImages(images);
    setModalImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const navigateModal = (direction: 'prev' | 'next') => {
    setModalImageIndex(prev => {
      if (direction === 'prev') return Math.max(0, prev - 1);
      return Math.min(modalImages.length - 1, prev + 1);
    });
  };

  const clearFilters = () => {
    setSelectedCategory("All");
    setSearchTerm("");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <NavHeaderMenus />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading portfolio...</p>
          </div>
        </main>
        <FooterMenus />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen flex-col">
        <NavHeaderMenus />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-600 mb-4">Error: {error}</p>
            <Button onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </div>
        </main>
        <FooterMenus />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <NavHeaderMenus />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-teal-50">
          <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-4xl mx-auto">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Our <span className="text-teal-600">Work</span>
                </h1>
                <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
              </div>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl">
                Discover how we&apos;ve transformed businesses through strategic e-commerce solutions, 
                exceptional customer support, and innovative digital experiences.
              </p>
              <HeroStats projectCount={data.length} />
            </div>
          </div>
        </section>

        {/* Filter and Search Section */}
        <section className="w-full py-8 border-b bg-muted/20">
          <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <CategoryFilter
                categories={CATEGORIES}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
              <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg mb-4">
                  No projects found matching your criteria.
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project) => {
                  console.log('Render project', project.id, project.title, project.images);
                  return (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onImageClick={openModal}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-teal-600 to-teal-700">
          <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-6 text-center text-white">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Ready to Transform Your Business?
              </h2>
              <p className="mx-auto max-w-2xl text-teal-100 text-lg md:text-xl leading-relaxed">
                Join our growing list of successful clients. Let&apos;s discuss how we can 
                deliver exceptional results for your e-commerce business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-slate-50 font-semibold">
                  <Link href="#contact">
                    Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-teal-600"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterMenus />

      <ImageModal
        isOpen={modalOpen}
        images={modalImages}
        currentIndex={modalImageIndex}
        onClose={closeModal}
        onNavigate={navigateModal}
      />
    </div>
  );
}
